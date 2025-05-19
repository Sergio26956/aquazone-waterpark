'use client';

import { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import es from 'date-fns/locale/es';

export default function Calendario() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const header = () => (
    <div className="flex justify-between items-center mb-4">
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>&lt;</button>
      <h2 className="text-xl font-bold">{format(currentMonth, 'MMMM yyyy', { locale: es })}</h2>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>&gt;</button>
    </div>
  );

  const daysOfWeek = () => (
    <div className="grid grid-cols-7 text-center font-semibold mb-2">
      {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(day => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );

  const generateDates = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let day = startDate;

    while (day <= endDate) {
      const days = [];
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        days.push(
          <div
            key={cloneDay.toString()}
            className={`text-center p-2 rounded cursor-pointer 
              ${!isSameMonth(cloneDay, monthStart) ? 'text-gray-400' : ''}
              ${isSameDay(cloneDay, selectedDate) ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {format(cloneDay, 'd')}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div key={day.toString()} className="grid grid-cols-7">{days}</div>);
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      {header()}
      {daysOfWeek()}
      {generateDates()}
    </div>
  );
}
