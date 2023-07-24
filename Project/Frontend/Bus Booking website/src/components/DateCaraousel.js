import React, { useState } from 'react';

const DateCarousel = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Generate a list of dates based on the current date
  const currentDate = new Date();
  const dates = [];
  for (let i = 0; i < 28; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    dates.push(date);
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex p-4 space-x-4 list-none">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`date-details ${selectedDate === date ? '_active' : ''}`}
          >
            <div
              className="date-href px-4 py-2 rounded-lg bg-gray-300 hover:bg-blue-500 hover:text-white w-[2vw] flex flex-col justify-center items-center cursor-pointer"
              // href="#"
              onClick={() => handleDateClick(date)}
            >
              <div className="date-day">
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div className="date-numeric">{date.getDate()}</div>
              <div className="date-month">
                {date.toLocaleDateString('en-US', { month: 'short' })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateCarousel;
