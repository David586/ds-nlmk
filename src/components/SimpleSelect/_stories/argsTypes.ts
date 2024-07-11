import { customInputColors, sizesMappingInput } from '@components/declaration';

export const argsTypes = {
  value: {
    description: 'Значение селекта',
    control: { type: 'text' }
  },
  onChange: {
    description: 'Обработчик изменения значения селекта',
    action: 'onChange'
  },
  id: {
    description: 'Идентификатор компонента',
    control: { type: 'text' }
  },
  portalContainerId: {
    description: 'id рутового контейнера для создания портала',
    control: { type: 'text' }
  },
  children: {
    description: 'Дочерние элементы селекта (опции меню)',
    control: { type: 'text' }
  },
  menuWidth: {
    description: 'Ширина меню селекта',
    control: { type: 'text' }
  },
  placeholder: {
    description: 'Плейсхолдер для инпута селекта',
    control: { type: 'text' }
  },
  label: {
    description: 'Лейбл инпута в селекте',
    control: { type: 'text' }
  },
  withPortal: {
    description: 'Флаг, указывающий, должно ли меню рендериться в портале',
    control: { type: 'boolean' }
  },
  disabled: {
    description: 'Флаг доступности селекта',
    control: { type: 'boolean' }
  },
  onBlur: {
    description: 'Обработчик закрытия меню options',
    action: 'onBlur'
  },
  onFocus: {
    description: 'Обработчик открытия меню options',
    action: 'onFocus'
  },
  color: {
    description: 'Цвет компонента',
    table: {
      defaultValue: {
        summary: customInputColors.default
      }
    },
    options: Object.values(customInputColors),
    control: { type: 'select' }
  },
  size: {
    description: 'Размер компонента',
    table: {
      defaultValue: {
        summary: sizesMappingInput.m
      }
    },
    options: Object.values(sizesMappingInput),
    control: { type: 'select' }
  },
  scrollingItems: {
    description: 'Количество элементов после которого включается прокрутка',
    control: { type: 'number' }
  },
  noOptionsText: {
    description: 'Текст, отображаемый когда нет доступных опций',
    control: { type: 'text' }
  },
  searchable: {
    description: 'Флаг, указывающий, доступен ли поиск',
    control: { type: 'boolean' }
  },
  name: {
    description: 'Name элемента, используется для ссылки на элемент',
    control: { type: 'text' }
  },
  onEnterPress: {
    description: 'Обработчик нажатия клавиши Enter',
    action: 'onEnterPress'
  },
  style: {
    description: 'Кастомные стили для компонента',
    control: { type: 'object' }
  },
  className: {
    description: 'Добавление самостоятельного CSS класса',
    control: { type: 'text' }
  }
};
