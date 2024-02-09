import cs from 'classnames';
import dayjs, { Dayjs } from 'dayjs';
import React, { CSSProperties, ReactNode, useState } from 'react';
import Header from './Header';
import './index.less';
import { CalendarProps } from './interface';
import LocaleContext from './LocaleContext';
import MonthCalendar from './MonthCalendar';

function Calendar(props: CalendarProps) {
  const { value = dayjs(), style, className, locale, onChange } = props;

  const [curValue, setCurValue] = useState<Dayjs>(value);

  const [curMonth, setCurMonth] = useState<Dayjs>(value);

  const classNames = cs('calendar', className);

  function selectHandler(date: Dayjs) {
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  }

  function prevMonthHandler() {
    setCurMonth(curMonth.subtract(1, 'month'));
  }

  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, 'month'));
  }

  function todayHandler() {
    const date = dayjs(Date.now());

    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  }

  return (
    <LocaleContext.Provider
      value={{
        locale: locale || (navigator.language as any),
      }}
    >
      <div className={classNames} style={style}>
        <Header
          curMonth={curMonth}
          prevMonthHandler={prevMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
        ></Header>
        <MonthCalendar
          {...props}
          value={curValue}
          curMonth={curMonth}
          selectHandler={selectHandler}
        />
      </div>
    </LocaleContext.Provider>
  );
}

export default Calendar;
