import React from 'react'
import BusItem from './BusItem'

const PaymentConfirmation = () => {
    return (
        <>
            <div className="flex flex-row justify-center">
                <div className="border border-solid border-gray-300 rounded-lg flex flex-col justify-center items-center w-1/2 p-3">
                    <div className="bg-white">
                        <img src="https://w7.pngwing.com/pngs/565/233/png-transparent-check-mark-scalable-graphics-check-s-angle-text-trademark-thumbnail.png" className='bg-white w-20 rounded-full' alt="" />
                    </div>
                    <p className="font-bold text-2xl">
                        Booking has been confirmed
                    </p>
                    <div className="flex flex-row text-sm text-gray-600">
                        <p className='m-2'>
                            Ticket ID :
                        </p>
                        <p className='m-2'>
                            4688NHYU
                        </p>
                    </div>
                    <div className="flex flex-row text-sm text-gray-600">
                        <p className='m-2'>
                            Payment ID :
                        </p>
                        <p className='m-2'>
                            2545-326A3-756444
                        </p>
                    </div>
                    <div className="flex flex-row text-sm text-gray-600">
                        <p className='m-2'>
                            Passenger Details :
                        </p>
                        <p className='m-2'>
                            Meghna Agarwal, F, 25 yrs
                        </p>
                    </div>
                    <div className="flex flex-row text-sm text-gray-600">
                        <p className='m-2'>
                            Email :
                        </p>
                        <p className='m-2'>
                            Meghna2345@gmail.com
                        </p>
                    </div>
                    <div className="flex flex-row text-sm text-gray-600">
                        <p className='m-2'>
                            Phone no :
                        </p>
                        <p className='m-2'>
                            48108018408401
                        </p>
                    </div>
                    <BusItem />
                </div>
            </div>
        </>
    )
}

export default PaymentConfirmation