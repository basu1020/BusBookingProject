import React, { useEffect, useState } from 'react'
import SeatSelection from './SeatSelection'

const BusItem = () => {
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
                                Intercity Smart Bus
                            </p>
                            <span className='bg-green-700 text-white m-4 p-1 rounded-md'>
                                4.5
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
                                22:45, 16 NOV
                            </div>
                            <div className="font-light text-gray-500 m-4">
                                Duration
                            </div>
                            <div className="font-bold m-4">
                                08:56, 17 NOV
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className="font-bold">
                            Trip Cost
                        </p>
                        <p className='font-bold'>
                            ₹ 899
                        </p>
                        <button className='bg-orange rounded-lg p-2 text-white cursor-pointer' onClick={buttonClickHandle}>
                            {showSeats ? 'Close' : 'View Seats'}
                        </button>
                    </div>
                </div>
                {showSeats && <SeatSelection />}
            </div>
        </>
    )
}

export default BusItem