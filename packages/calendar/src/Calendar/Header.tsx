import { Dayjs } from 'dayjs';
import React, { useContext } from 'react';
import { HeaderProps } from './interface';
import allLocales from './locale';
import LocaleContext from './LocaleContext';

function Header(props: HeaderProps) {
  const { curMonth, prevMonthHandler, nextMonthHandler, todayHandler } = props;

  const localeContext = useContext(LocaleContext);
  const CalendarContext = allLocales[localeContext.locale];

  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon" onClick={prevMonthHandler}>
          &lt;
        </div>
        <div className="calendar-header-value">{curMonth.format(CalendarContext.formatMonth)}</div>
        <div className="calendar-header-icon" onClick={nextMonthHandler}>
          &gt;
        </div>
        <button type="button" className="calendar-header-btn" onClick={todayHandler}>
          {CalendarContext.today}
        </button>
      </div>
    </div>
  );
}

export default Header;
