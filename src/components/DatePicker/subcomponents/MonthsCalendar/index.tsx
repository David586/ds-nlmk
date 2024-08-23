import React, { FC, useMemo, useState } from 'react';

import { locale } from '@components/DatePicker/helpers';
import { Day } from '@components/DatePicker/subcomponents';
import { useLocale } from '@components/DatePicker/utils';

import { IMonthsCalendarProps } from './types';

import styles from './MonthsCalendar.module.scss';

import {
  useIsDisabledMonth,
  useIsEndMonth,
  useIsMidMonth,
  useIsSelectedMonth,
  useIsStartMonth,
  useIsTodayMonth
} from './helpers';

export const MonthsCalendar: FC<IMonthsCalendarProps> = ({
  panelValue,
  disableChange,
  withPeriod,
  valueFrom,
  valueTo,
  enabledTo,
  enabledFrom,
  selectedDate,
  onSelect
}) => {
  const language = useLocale();
  const isTodayMonth = useIsTodayMonth({ panelValue });
  const dateFrom = useMemo(() => valueFrom && new Date(valueFrom.getFullYear(), valueFrom.getMonth()), [valueFrom]);
  const dateTo = useMemo(() => valueTo && new Date(valueTo.getFullYear(), valueTo.getMonth()), [valueTo]);
  const [innerCurrentHover, setCurrentHover] = useState<null | Date>(null);
  const currentHover = useMemo(
    () => (!valueFrom || !valueTo ? innerCurrentHover : null),
    [innerCurrentHover, valueFrom, valueTo]
  );
  const dateCurrentHover = useMemo(
    () => currentHover && new Date(currentHover.getFullYear(), currentHover.getMonth(), 1, 0, 0, 0, 0),
    [currentHover]
  );

  const isSelectedMonth = useIsSelectedMonth({
    dateCurrentHover,
    withPeriod,
    dateFrom,
    dateTo,
    selectedDate,
    panelValue
  });
  const isStartMonth = useIsStartMonth({
    dateCurrentHover,
    withPeriod,
    dateFrom
  });
  const isMidMonth = useIsMidMonth({
    dateCurrentHover,
    withPeriod,
    dateFrom,
    dateTo
  });
  const isEndMonth = useIsEndMonth({
    dateCurrentHover,
    withPeriod,
    dateFrom,
    dateTo
  });
  const isDisabled = useIsDisabledMonth(enabledFrom, enabledTo);

  return (
    <div className={styles.root}>
      {locale[language].months.map((month, idx) => {
        const dayAsDate = new Date((panelValue || new Date()).getFullYear(), idx);
        return (
          <Day
            onClick={() => onSelect && onSelect(dayAsDate)}
            onHover={() => withPeriod && setCurrentHover(dayAsDate)}
            isHoverState={Boolean(dateCurrentHover)}
            selected={isSelectedMonth(dayAsDate)}
            disabled={disableChange || isDisabled(panelValue?.getFullYear(), idx)}
            today={isTodayMonth(idx)}
            start={isStartMonth(dayAsDate)}
            mid={isMidMonth(dayAsDate)}
            end={isEndMonth(dayAsDate)}
            key={month}
            type="month"
          >
            {month}
          </Day>
        );
      })}
    </div>
  );
};

export default MonthsCalendar;
