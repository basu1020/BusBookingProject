import React, { useState, useEffect } from 'react';
import DateCarousel from './DateCaraousel';
import BusItem from './BusItem';
import Filter from './Filter';
import { FiFilter } from 'react-icons/fi';
import { selectBusList } from '../global-state/busListSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectqueriedBusList } from '../global-state/queriedbusListSlice';
import { selectbusQueries } from '../global-state/busQueriesSlice';

const Booking = () => {

  const [showFilter, setShowFilter] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  const busList = useSelector(selectBusList)
  const busQueries = useSelector(selectbusQueries)
  const queriedBusList = useSelector(selectqueriedBusList)
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onClickFilterButton = () => {
    if (showFilter) {
      setShowFilter(false)
    }
    else {
      setShowFilter(true)
    }
  }

  return (
    <>
      <div className="flex flex-row justify-center sticky">
        {(screenWidth > 1023 || showFilter) && <div className={`w-1/4 ${showFilter ? 'absolute left-2 top-2 bg-white w-2/5 transition-transform ease-in-out delay-150 duration-3000 shadow-lg shadow-gray-600/50' : ''}`}>
          <Filter />
        </div>}
        <div className="w-3/4 flex flex-col">
          <div className="oveflow-x w-98%">
            <DateCarousel />
          </div>
          <div className="flex flex-col justify-evenly h-auto mt-5">
            <div className="flex justify-between">
              <h3 className='text-lg font-normal'>
                Available Buses from {busQueries.from.split(',')[0]} to {busQueries.to.split(',')[0]}
              </h3>
              <div className='items-center'>
                {screenWidth <= 1023 &&
                  <button className="bg-blue-500 rounded py-2 px-4 justify-center text-white" onClick={onClickFilterButton}>
                    {showFilter ? 'Hide Filter' : <FiFilter />}
                  </button>
                }
              </div>
            </div>
            {
              queriedBusList.map((elem) => {
                return <BusItem busDetails={elem} />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking