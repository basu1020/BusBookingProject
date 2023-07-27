import React from 'react';
import DateCarousel from './DateCaraousel';
import BusItem from './BusItem';
import Filter from './Filter';

const Booking = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="w-1/4">
          <Filter />
        </div>
        <div className="w-3/4 flex flex-col">
          <div className="oveflow-x w-98%">
          <DateCarousel />
          </div>
          <div className="flex flex-col justify-evenly h-auto mt-5">
            <BusItem />
            <BusItem />
            <BusItem />
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking