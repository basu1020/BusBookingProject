import React from 'react'
import DateCarousel from './DateCaraousel'
import BusItem from './BusItem'
import Filter from './Filter'
import Footer from './Footer'
import SeatSelection from './SeatSelection'

const Booking = () => {
  return (
    <>
    <div className="flex flex-row justify-center">
        <div className="w-1/4">
            <Filter/>
        </div>
        <div className="w-3/4 flex flex-col">
            <DateCarousel/>
            <BusItem/>
            <SeatSelection/>
            <BusItem/>
            <BusItem/>
        </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Booking