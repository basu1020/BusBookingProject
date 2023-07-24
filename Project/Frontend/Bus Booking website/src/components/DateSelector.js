import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = ({ selectedDate, handleDateSelect }) => {
  return (
    <div className="absolute mt-8 bg-white p-2 rounded-lg shadow-[0px_10px_10px_rgba(0,_0,_0,_0.5)]">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleDateSelect(date)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        maxDate={(function () {
          const maxDate = new Date();
          maxDate.setDate(maxDate.getDate() + 28);
          return maxDate;
        })()}
        inline
      />
    </div>
  );
};

export default DateSelector;
