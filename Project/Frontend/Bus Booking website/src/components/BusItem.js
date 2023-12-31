import React, { useEffect, useState } from 'react'
import SeatSelection from './SeatSelection'

const BusItem = ({busDetails}) => {
    const [showSeats, setShowSeats] = useState(false)

    const buttonClickHandle = () => {
        if (showSeats) {
            setShowSeats(false)
        }
        else {
            setShowSeats(true)
        }
    }

    return (
        <>
            <div>
                <div className="p-2 flex flex-row justify-evenly flex-wrap rounded-lg border border-solid border-gray-300 my-2">
                    <div>
                        <div className='flex flex-row' name="Bus-name-and-rating">
                            <p className='font-bold m-4'>
                                {busDetails.BusName}
                            </p>
                            <span className='bg-green-700 text-white m-4 p-1 rounded-md'>
                                {busDetails.Rating} ⭐
                            </span>
                            <span className="text-gray-500 m-4">
                                Rating
                            </span>
                        </div>
                        <div className="flex flex-row text-sm" name="Amenities-list">
                            <p className="text-gray-500 m-4">
                                A/C Sleeper
                            </p>
                            <span className="text-gray-500 my-4">
                                |
                            </span>
                            <p className="text-gray-500 m-4">
                                25 seats left
                            </p>
                            <span className="text-gray-500 my-4">
                                |
                            </span>
                            <p className='text-gray-500 m-4'>
                                0 Window Seats
                            </p>
                            <span className="text-gray-500 my-4">
                                |
                            </span>
                        </div>
                        <div className="flex flex-row">
                            <div className="font-bold m-4" name="boarding-time-and-date">
                                {busDetails.FromTime}, 16 NOV
                            </div>
                            <div className="font-light text-gray-500 m-4">
                                {busDetails.TimeInterval}
                            </div>
                            <div className="font-bold m-4">
                            {busDetails.ToTime}, 17 NOV
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className="font-normal">
                            Trip cost starts from
                        </p>
                        <p className='font-bold'>
                            ₹ 899
                        </p>
                        <button className='bg-orange rounded-lg p-2 text-white cursor-pointer' onClick={buttonClickHandle}>
                            {showSeats ? 'Close' : 'Book Seats'}
                        </button>
                    </div>
                </div>
                {showSeats && <SeatSelection busDetails={busDetails}/>}
            </div>
        </>
    )
}

export default BusItem