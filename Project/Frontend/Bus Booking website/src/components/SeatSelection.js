import React, { useState } from 'react';
import { MdAirlineSeatIndividualSuite } from 'react-icons/md';

const Seat = () => {
    const [iconColor, setIconColor] = useState('#cbd5e1');

    const handleClick = () => {
        setIconColor('#3b82f6')
    }
    return (
        <div className='m-2'>
            <MdAirlineSeatIndividualSuite size={40} color={iconColor} style={{ cursor: "pointer" }} onClick={handleClick}/>
        </div>
    );
};


const SeatSelection = () => {

    const generateSeats = (count, type) => {
        const seats = [];
        for (let i = 1; i <= count; i++) {
            seats.push(<Seat key={`${type}-${i}`} />);
        }
        return seats;
    };

    return (
        <>
            <div className="flex flex-col items-center p-2 border border-gray-300 rounded-lg border-solid">
                <div className="flex flex-row xl:flex-col items-center w-full">
                    <div className="flex flex-col justify-center items-start w-2/3 xl:w-full">
                        <p className="font-bold text-2xl">
                            Select Seats
                        </p>
                        <div className="flex flex-row xl:flex-col items-center xl:items-start justify-between w-full">
                            <div className="flex items-start">
                                <p className="font-semibold text-gray-500 me-2">
                                    Seat Price
                                </p>
                            </div>
                            <div className="flex flex-row w-1/2 xl:w-full xl:justify-evenly ">
                                <div className="flex items-center border border-solid rounded-lg border-gray-300 px-1 me-2">
                                    <input type="radio" name="" id="" />
                                    <p className="text-gray-500">
                                        All
                                    </p>
                                </div>
                                <div className="flex items-center border border-solid rounded-lg border-gray-300 px-1 me-2">
                                    <input type="radio" name="" id="" />
                                    <p className=" text-gray-500">
                                        $689
                                    </p>
                                </div>
                                <div className="flex items-center border border-solid rounded-lg border-gray-300 px-1 me-2">
                                    <input type="radio" name="" id="" />
                                    <p className=" text-gray-500">
                                        $889
                                    </p>
                                </div>
                                <div className="flex items-center border border-solid rounded-lg border-gray-300 px-1 me-2">
                                    <input type="radio" name="" id="" />
                                    <p className=" text-gray-500">
                                        $1199
                                    </p>
                                </div>
                                <div className="flex items-center border border-solid rounded-lg border-gray-300 px-1 me-2">
                                    <input type="radio" name="" id="" />
                                    <p className=" text-gray-500">
                                        $1599
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-1/3 xl:w-full xl:flex-row xl:justify-center">
                        <div className="xl:flex xl:flex-row xl:justify-evenly xl:w-full">
                            <div className="flex flex-row items-center my-0">
                                <div className="border border-solid rounded-sm border-gray-300 bg-slate-300 h-[11px] w-[11px] me-2">
                                </div>
                                <p className='text-gray-500'>Vacant Seats</p>
                            </div>
                            <div className="flex flex-row items-center my-0">
                                <div className="border border-solid rounded-sm border-gray-300 bg-slate-500 h-[11px] w-[11px] me-2">
                                </div>
                                <p className='text-gray-500'>Occupied Seats</p>
                            </div>
                            <div className="flex flex-row items-center my-0">
                                <div className="border border-solid rounded-sm border-gray-300 bg-blue-500 h-[11px] w-[11px] me-2">
                                </div>
                                <p className='text-gray-500'>Your Booked seats Seats</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center w-full h-[30vw] xl:h-auto">
                    <div className="flex flex-col w-2/3 xl:w-full h-full">
                        <div className="flex flex-row overflow-x-scroll flex-wrap justify-stretch items-center border border-gray-300 rounded-lg border-solid h-1/2 w-full">
                            <div className="flex flex-row items-center justify-center w-full">
                                {generateSeats(10, 'upper')}
                            </div>
                            <div className="flex flex-row items-center justify-center w-full">
                                {generateSeats(10, 'upper')}
                            </div>
                        </div>
                        <div className="flex flex-row overflow-x-scroll flex-wrap justify-around items-center border border-gray-300 rounded-lg border-solid h-1/2 w-full" >
                            <div className="flex flex-row  items-center justify-center w-full">
                                {generateSeats(10, 'lower')}
                            </div>
                            <div className="flex flex-row items-start justify-center w-full">
                                {generateSeats(9, 'lower')}
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 flex items-center xl:w-full h-full xl:h-auto">
                        <div className="flex flex-col justify-evenly border border-solid rounded-lg border-gray-300 px-2 m-2 w-full h-full xl:h-auto">
                            <p className="font-bold">
                                Boarding & Dropping
                            </p>
                            <div className="flex flex-row justify-between w-full">
                                <div>
                                    <p className="font-semibold mb-0">
                                        Patna
                                    </p>
                                    <p className="text-gray-400 mt-0">
                                        Bihar, India
                                    </p>
                                </div>
                                <p className="font-semi-bold">
                                    22:45
                                </p>
                            </div>
                            <div className="flex flex-row justify-between w-full">
                                <div>
                                    <p className="font-semibold mb-0">
                                        Mumbai
                                    </p>
                                    <p className="text-gray-400 mt-0">
                                        Maharashtra, India
                                    </p>
                                </div>
                                <p className="font-semi-bold">
                                    20:00
                                </p>
                            </div>
                            <div className="w-full bg-gray-400 h-[1px]"></div>
                            <div className="flex flex-row justify-between w-full">
                                <div>
                                    <p className="font-bold mb-0">
                                        Seat No.
                                    </p>
                                </div>
                                <p className="">
                                    U7, U8, L5
                                </p>
                            </div>
                            <div className="w-full bg-gray-400 h-[1px]"></div>
                            <div className="flex items-start">
                                <p className="font-bold">
                                    Fare Details
                                </p>
                            </div>
                            <div className="flex flex-row justify-between w-full">
                                <div>
                                    <p className="mb-0">
                                        Amount:
                                    </p>
                                </div>
                                <p className="font-bold">
                                    INR 750.00
                                </p>
                            </div>
                            <button className="bg-orange text-white my-2 p-2 rounded-lg">
                                Proceed to Book
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeatSelection