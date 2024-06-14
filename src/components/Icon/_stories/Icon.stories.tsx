import React, {
  ChangeEvent,
  ChangeEventHandler,
  createElement,
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { FixedSizeList as List } from 'react-window';

import { CopyWrapper } from '@components/Colors/subcomponents/CopyWrapper';
import argsTypes from '@components/Icon/_stories/argsTypes';
import { TIconName } from '@components/Icon/IconsDirectory/unionType';
import { TIconProps, TIconsObject } from '@components/Icon/types';
import { Card, Icon, Input, Typography } from '@components/index';
import { Meta, StoryFn } from '@storybook/react';
import { clsx } from 'clsx';
import { startCase } from 'lodash';

import styles from './Icon.module.scss';

import icons from '../IconsDirectory';
import { iconsAlwaysDefaultColor, iconsUseFillAndStroke, iconsUseStroke, rowCount } from './variables';

export default {
  title: 'Components/Icon/Stories',
  component: Icon,
  argTypes: argsTypes,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof Icon>;

interface IconsWithSizesAndColors {
  [iconName: string]: {
    [size: string]: ReactNode;
  };
}

export const IconComponent = (argsTypes: TIconProps): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper, styles.sized, styles['wrapper-border-radius'])}>
      <Icon {...argsTypes} />
    </div>
  );
};

IconComponent.storyName = 'Компонент Icon по умолчанию';
IconComponent.args = {
  name: 'IconTuneControlOutlined32',
  color: 'primary',
  containerSize: 24
};
IconComponent.decorators = [
  (Story: StoryFn) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
      <Story />
    </div>
  )
];

export const AllIcons = (): JSX.Element => {
  const [searchText, setSearchText] = useState('');

  const formatIconName = useCallback((name: string) => {
    return name.replace('Icon', '');
  }, []);

  const iconsByNames: IconsWithSizesAndColors = useMemo(() => {
    const result: IconsWithSizesAndColors = {};
    Object.keys(icons).forEach((size: keyof TIconsObject) => {
      Object.keys(icons[size] || {}).forEach((iconName: string) => {
        const formattedIconName = formatIconName(iconName as TIconName).replace(size.toString(), '');
        if (!result[formattedIconName]) {
          result[formattedIconName] = {};
        }
        const useStroke = iconName.includes('Kovsh');
        const iconComponent = icons[size][iconName as TIconName];
        if (iconComponent) {
          const iconProps: Record<string, any> = {
            style: {
              ...(useStroke && { stroke: 'var(--icon-color)' })
            }
          };
          result[formattedIconName][size.toString()] = createElement(iconComponent, iconProps);
        }
      });
    });
    return result;
  }, [formatIconName]);

  const handleChangeColor = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    document.documentElement.style.setProperty('--icon-color', newColor);
  }, []);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(e => {
    const value = e.target.value;
    setSearchText(value);
  }, []);

  const resetSearch = () => {
    setSearchText('');
  };

  const colorInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const initialColor =
      getComputedStyle(document.documentElement).getPropertyValue('--icon-color').trim() || '#167ffb';
    if (colorInputRef.current) {
      colorInputRef.current.value = initialColor;
    }
  }, []);

  const filteredIconsMemo = useMemo(() => {
    return Object.keys(iconsByNames)
      .filter(iconName => iconName.toLowerCase().includes(searchText.toLowerCase()))
      .map(iconName => ({
        title: iconName,
        sizes: iconsByNames[iconName]
      }));
  }, [iconsByNames, searchText]);

  const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
    const icon = filteredIconsMemo[index];
    return (
      <div style={style} className={styles.row}>
        {new Array(rowCount).fill(null).map((_, colIndex) => {
          const iconIndex = index * rowCount + colIndex;
          if (iconIndex >= filteredIconsMemo.length) return null;

          const icon = filteredIconsMemo[iconIndex];

          return (
            <Card key={iconIndex} className={styles.card} indicatorStatus="default">
              <div className={styles.cardHeader}>
                <Typography variant="Body1" color="primary">
                  {startCase(formatIconName(icon.title))}
                </Typography>
              </div>
              <div className={styles.icons}>
                {Object.entries(icon.sizes).map(([size, iconElement]) => {
                  const useStroke = iconsUseStroke.includes(`Icon${icon.title}${size}`);
                  const useFillAndStroke = iconsUseFillAndStroke.includes(`Icon${icon.title}${size}`);
                  const isAlwaysDefaultColorIcon = iconsAlwaysDefaultColor.includes(`Icon${icon.title}${size}`);
                  return (
                    <CopyWrapper key={`Icon${icon.title}${size}`} copy={`Icon${icon.title}${size}`} placement="bottom">
                      <div
                        className={clsx(styles.icon, {
                          [styles.strokeIcon]: useStroke,
                          [styles.fillAndStrokeIcon]: useFillAndStroke,
                          [styles.iconFill]: !useStroke && !useFillAndStroke && !isAlwaysDefaultColorIcon
                        })}
                      >
                        {iconElement}
                      </div>
                    </CopyWrapper>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <Input
          label="Поиск иконок"
          value={searchText}
          onChange={handleSearchChange}
          className={styles.input}
          reset
          onReset={resetSearch}
        />
        <div className={styles.colorControl}>
          <Typography variant="Body1" className={styles.colorControlTitle}>
            Выберите цвет:
          </Typography>
          <input type="color" ref={colorInputRef} onChange={handleChangeColor} className={styles.colorInput} />
        </div>
      </div>
      <div className={styles.table}>
        {filteredIconsMemo.length > 0 ? (
          <List height={900} itemCount={Math.ceil(filteredIconsMemo.length / rowCount)} itemSize={200} width={'100%'}>
            {Row}
          </List>
        ) : (
          <Typography variant="Heading2" color="primary" className={styles.noResults}>
            Ничего не найдено
          </Typography>
        )}
      </div>
    </div>
  );
};
AllIcons.storyName = 'Все доступные иконки';
