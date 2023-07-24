import React from 'react'
import BusItem from './BusItem'
import Footer from './Footer'

const PassengerInfo = () => {
    return (
        <>
            <div className="flex flex-row items-center w-[98vw]">
                <div className='flex flex-col w-2/3'>
                    <BusItem />
                    <p className='font-bold'>Enter Traveller Details</p>
                    <div className="flex flex-col border border-solid rounded-lg border-gray-300 p-2">
                        <div className="flex flex-row">
                            <p className='font-medium'>Passenger Details</p>
                            <p className='ms-3 font-medium'> Seat 16</p>
                        </div>
                        <div className="flex flex-row w-full">
                            <div className="flex flex-col justify-center w-1/2 mx-2">
                                <p>Name</p>
                                <input type="text" className='border border-zinc-300'/>
                            </div>
                            <div className="flex flex-col justify-center mx-2">
                                <p>Gender</p>
                                <select name="gender" id="" className='border border-zinc-300'>
                                    <option value=""></option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="flex flex-col justify-center border mx-2 border-gray-300">
                                <p>Age (in years)</p>
                                <input type="text" className='border border-zinc-300' />
                            </div>
                        </div>
                        <div className="flex flex-row w-full mb-3">
                            <div className="flex flex-col justify-center w-1/2 mx-2">
                                <p>Email</p>
                                <input type="text" className='border border-zinc-300' />
                            </div>
                            <div className="flex flex-col justify-center mx-2">
                                <p>Mobile No.</p>
                                <input type="text" className='border border-zinc-300' />
                            </div>
                            <div className="flex items-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex items-start">
                    <div className="rounded-lg border border-solid border-gray-300 flex flex-col p-3 m-4 w-full">
                        <p className="font-bold">
                            Fare Details
                        </p>
                        <div className="flex flex-row justify-between w-full">
                            <p>Base Fare</p>
                            <p className="font-bold">$799</p>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <p>Tax</p>
                            <p className="font-bold">$799</p>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <p>Offer applied</p>
                            <p className="font-bold">$799</p>
                        </div>
                        <div className="w-full bg-gray-300 h-[0.1vh]"></div>
                        <div className="mt-3 flex flex-row justify-between w-full">
                            <p>Total Price</p>
                            <p className="font-bold text-lg">
                                $5000
                            </p>
                        </div>
                        <div className="mt-1 flex justify-center w-full">
                            <button className="flex justify-center p-4 w-full rounded-lg text-white bg-orange">
                                Proceed to Payment 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PassengerInfo