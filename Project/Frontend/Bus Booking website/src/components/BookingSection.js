import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { IoIosArrowDown } from 'react-icons/io';
import DateSelector from './DateSelector';

const BookingSection = () => {
  const [showFromDiv, setShowFromDiv] = useState(false);
  const [showToDiv, setShowToDiv] = useState(false);
  const [showDateDiv, setShowDateDiv] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState('Patna, Bihar');
  const [selectedTo, setSelectedTo] = useState('New Delhi, Delhi');
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample big cities of India for destination selection
  const cities = [
    'Mumbai, Maharashtra',
    'Bengaluru, Karnataka',
    'Chennai, Tamil Nadu',
    'Kolkata, West Bengal',
    'Hyderabad, Telangana',
    'Patna, Bihar',
    'Ahmedabad, Gujarat',
    'Jaipur, Rajasthan',
  ];

  const handleFromClick = () => {
    setShowFromDiv(!showFromDiv);
    setShowToDiv(false);
    setShowDateDiv(false);
  };

  const handleToClick = () => {
    setShowFromDiv(false);
    setShowToDiv(!showToDiv);
    setShowDateDiv(false);
  };

  const handleDestinationSelect = (city) => {
    setSelectedFrom(city);
    setShowFromDiv(false);
  };

  const handleToSelect = (city) => {
    setSelectedTo(city);
    setShowToDiv(false);
  };

  const handleDateClick = () => {
    setShowFromDiv(false);
    setShowToDiv(false);
    setShowDateDiv(!showDateDiv);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowDateDiv(false);
  };

  return (
    <section className="relative w-[100vw] h-[32.75rem] bg-[url(/public/bus-1@2x.png)] bg-cover bg-no-repeat bg-[center] text-center text-[1.25rem] text-darkgray font-outfit" id="booking-section">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex flex-col gap-[1rem]">
          <div className="flex flex-row flex-wrap">
            <div
              className="flex justify-evenly items-center rounded-lg bg-gray-100 shadow-[0px_10px_10px_rgba(0,_0,_0,_0.5)] w-[15.88rem] h-[5.38rem] m-2 cursor-pointer"
              onClick={handleFromClick}
            >
              <div className="flex-flex-col">
                <div className="flex font-medium items-start">From</div>
                <div className="text-gray-200">{selectedFrom}</div>
                <div className="text-dimgray-200 text-sm flex items-start">India</div>
              </div>
              <div className="flex items-start justify-center w-[2vw] h-[1vh]">
                <IoIosArrowDown className="w-[20px] h-[20px]" />
              </div>
            </div>
            {showFromDiv && (
              <div className="absolute mt-8 bg-white p-2 rounded-lg shadow-[0px_10px_10px_rgba(0,_0,_0,_0.5)]">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="cursor-pointer px-2 py-1 hover:bg-gray-100"
                    onClick={() => handleDestinationSelect(city)}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
            <div
              className="flex justify-evenly items-center rounded-lg bg-gray-100 shadow-[0px_10px_10px_rgba(0,_0,_0,_0.5)] w-[15.88rem] h-[5.38rem] m-2 cursor-pointer"
              onClick={handleToClick}
            >
              <div className="flex-flex col">
                <div className="flex font-medium items-start">To</div>
                <div className="text-gray-200">{selectedTo}</div>
                <div className="text-sm text-dimgray-200 flex items-start">India</div>
              </div>
              <div className="flex items-center justify-center">
                <IoIosArrowDown className="w-[20px] h-[20px]" />
              </div>
            </div>
            {showToDiv && (
              <div className="absolute mt-8 bg-white p-2 rounded-lg shadow-[0px_10px_10px_rgba(0,_0,_0,_0.5)]">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="cursor-pointer px-2 py-1 hover:bg-gray-100"
                    onClick={() => handleToSelect(city)}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
            <div
              className="flex justify-evenly items-center rounded-lg bg-gray-100 shadow-[0px_10px_10px_rgba(0,_0,_0,_0.5)] w-[15.88rem] h-[5.38rem] flex-col py-[0.38rem] pr-[6.38rem] pl-[0rem] box-border m-2 cursor-pointer"
              onClick={handleDateClick}
            >
              <div className="relative font-medium">Travel Date</div>
              <div className="relative text-gray-200 hover:text-blue-400">
                {selectedDate ? selectedDate.toLocaleDateString('en-US') : 'Select a date'}
              </div>
              <div className="flex items-center justify-center">
                {/* <IoIosArrowDown /> */}
              </div>
            </div>
            {showDateDiv && (
              <div className="absolute mt-8 bg-white p-2 rounded-lg shadow-[0px_10px_10px_rgba(0,_0,_0,_0.5)]">
                <DateSelector selectedDate={selectedDate} handleDateSelect={handleDateSelect} />
              </div>
            )}
          </div>
          <div className="flex justify-center items-center">
            <button className="rounded-md bg-orange shadow-[0px_4px_4px_rgba(0,_0,_0,_0.5)] w-[10.69rem] h-[2.69rem] flex flex-col py-[0rem] px-[2.14rem] box-border items-center justify-center text-[1.56rem] text-seashell cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
