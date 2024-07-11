import React, {
  Children,
  FC,
  isValidElement,
  KeyboardEvent,
  MouseEventHandler,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { customInputColors, generateUUID, sizesMappingInput } from '@components/declaration';
import { Input } from '@components/index';
import clsx from 'clsx';

import { ISelectProps } from './types';

import styles from './SimpleSelect.module.scss';

import { ScrollingItemsDefault } from './constants';
import { SelectContext } from './context';
import { ArrowButton, OptionItem, Options } from './subcomponents';
import { IOptionItemProps } from './subcomponents/OptionItem/types';

const SimpleSelect: FC<ISelectProps> = ({
  value,
  onChange,
  id,
  name,
  portalContainerId = 'root',
  children,
  menuWidth,
  placeholder,
  label,
  withPortal = false,
  disabled = false,
  onFocus,
  onBlur,
  color = customInputColors.default,
  size = sizesMappingInput.m,
  scrollingItems = ScrollingItemsDefault,
  noOptionsText = 'Ничего не найдено',
  searchable = false,
  onEnterPress,
  className,
  style
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  id = useMemo(() => `Select-${(id && id.toString()) || generateUUID()}`, [id]);

  const options = Children.toArray(children).filter((child): child is ReactElement<IOptionItemProps> =>
    isValidElement(child)
  );

  useEffect(() => {
    setSelectedLabel(findOptionLabel(value));
  }, [value, children]);

  const handleFocus = () => {
    setIsOpen(true);
    onFocus?.();
  };

  const handleBlur = () => {
    onBlur?.();
  };

  const toggleDropdown: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    if (isOpen) {
      handleBlur();
    } else {
      onFocus?.();
    }
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (optionValue: string | number) => {
    setSelectedLabel(findOptionLabel(optionValue));
    setIsOpen(false);
    setFocusedIndex(-1);
    inputRef.current?.blur(); // Убираем фокус с инпута
    onChange?.(optionValue);
  };

  const findOptionLabel = (value: string | number | undefined): string => {
    if (value === undefined) return '';
    const selectedOption = options.find(child => child.props.value === value);
    return selectedOption
      ? selectedOption.props.label ||
          (typeof selectedOption.props.children === 'string' ? selectedOption.props.children : '')
      : '';
  };

  const filteredChildren = useMemo(() => {
    if (!searchable || !searchTerm) return options;
    return options.filter(child => {
      const optionLabel = child.props.label.toLowerCase();
      return optionLabel.includes(searchTerm.toLowerCase());
    });
  }, [options, searchTerm, searchable]);

  const optionsCount = filteredChildren.length;
  const noOptions = optionsCount === 0;

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!isOpen) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        setIsOpen(true);
        event.preventDefault();
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        setFocusedIndex(prevIndex => (prevIndex + 1) % optionsCount);
        event.preventDefault();
        break;
      case 'ArrowUp':
        setFocusedIndex(prevIndex => {
          const newIndex = prevIndex - 1;
          return newIndex < 0 ? optionsCount - 1 : newIndex;
        });
        event.preventDefault();
        break;
      case 'Enter':
        if (focusedIndex !== -1 && focusedIndex < optionsCount) {
          const selectedChild = filteredChildren[focusedIndex];
          if (selectedChild && !selectedChild.props.disabled) {
            handleOptionChange(selectedChild.props.value);
            if (onEnterPress) {
              onEnterPress(selectedChild.props.value);
            }
          }
        }
        event.preventDefault();
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        event.preventDefault();
        break;
    }
  };

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedOption: value,
        setSelectedOption: handleOptionChange,
        selectedLabel,
        setSelectedLabel,
        selectRef,
        menuRef,
        menuWidth,
        withPortal,
        portalContainerId,
        scrollingItems,
        searchTerm,
        setSearchTerm,
        focusedIndex,
        setFocusedIndex,
        onChange
      }}
    >
      <div className={clsx(styles.select, className)} ref={selectRef} style={style}>
        <Input
          id={id}
          name={name}
          size={size}
          inputRef={inputRef}
          value={searchable && isOpen ? searchTerm : selectedLabel}
          onChange={e => searchable && setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          label={label}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={!searchable || !isOpen}
          color={color}
          onFocus={handleFocus}
          onBlur={handleBlur}
          icon={<ArrowButton isOpen={isOpen} color={color} disabled={disabled} toggleDropdown={toggleDropdown} />}
          className={clsx(styles.select__input, styles['input-helper'])}
          data-testid="select-input"
        />
        <Options>
          {noOptions ? (
            <OptionItem value="" label={noOptionsText} disabled>
              {noOptionsText}
            </OptionItem>
          ) : (
            filteredChildren
          )}
        </Options>
      </div>
    </SelectContext.Provider>
  );
};

export default SimpleSelect;
