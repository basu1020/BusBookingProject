import React, { useState, useEffect } from 'react';

const Filter = () => {
    // State to keep track of checkbox status
    const [isAnyCheckboxSelected, setIsAnyCheckboxSelected] = useState(false);

    // Function to handle checkbox changes
    const handleCheckboxChange = (event) => {
        setIsAnyCheckboxSelected(
            // Check if any checkbox is checked
            Array.from(document.querySelectorAll('input[type="checkbox"]')).some(
                (checkbox) => checkbox.checked
            )
        );
    };

    useEffect(() => {
        handleCheckboxChange();
    }, []);

    return (
        <div className='flex flex-col md:w-auto'>
            <div className="flex flex-row items-center justify-between">
                <p className='font-bold text-gray-900 m-4'>
                    Filter
                </p>
                <button
                    className={`bg-${isAnyCheckboxSelected ? 'gray-400' : 'gray'} text-white p-1 me-3 rounded-lg hover:bg-gray-600 cursor-pointer`}
                    disabled={!isAnyCheckboxSelected} // Disable the button when no checkbox is selected
                >
                    Apply
                </button>
            </div>
            {/* Departure Time */}
            <p className="font-bold text-gray-700 m-4">
                Departure Time
            </p>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Morning Session
                </span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Afternoon Session
                </span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Night Session
                </span>
            </div>
            {/* Arrival Time */}
            <p className="font-bold text-gray-800 m-4">
                Arrival Time
            </p>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Morning Session
                </span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Afternoon Session
                </span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Night Session
                </span>
            </div>

            {/* Rating */}
            <p className="font-bold text-gray-800 m-4">
                Bus Ratings
            </p>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    4 star or more
                </span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    3 star or more
                </span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    0-2 star
                </span>
            </div>

            <p className="font-bold text-gray-800 m-4">
                Pickup Point
            </p>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Mumbai
                </span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Pune
                </span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Delhi
                </span>
            </div>

            <p className="font-bold text-gray-800 m-4">
                Drop Point
            </p>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Mumbai
                </span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Pune
                </span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Delhi
                </span>
            </div>

            <p className="font-bold text-gray-800 m-4">
                Bus Operator
            </p>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Zing Bus
                </span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    InterCity Smart
                </span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">
                    Safar Exp
                </span>
            </div>
        </div>
    );
};

export default Filter;
