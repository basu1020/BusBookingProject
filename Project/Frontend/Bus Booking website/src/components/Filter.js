import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {MdCheckBoxOutlineBlank, MdCheckBox} from 'react-icons/md'
import { selectbusQueries, busQueriesChanged } from '../global-state/busQueriesSlice';

const Filter = () => {
    const dispatch = useDispatch()
    const [isAnyCheckboxSelected, setIsAnyCheckboxSelected] = useState(false);
    const [departureSessionSelected, setDepartureSessionSelected] = useState(false);
    const [arrivalSessionSelected, setArrivalSessionSelected] = useState(false);

    const [pickupPointSelected, setPickupPointSelected] = useState(null); // New state for Pickup Point
    const [dropPointSelected, setDropPointSelected] = useState(null); // New state for Drop Point
    const busQueries = useSelector(selectbusQueries)

    const [filterQueries, setFilterQueries] = useState({
        departureTime: {
            morning: false,
            afternoon: false,
            night: false
        },
        arrivalTime: {
            morning: false,
            afternoon: false,
            night: false
        },
        from: null,
        to: null,
        busOperator: {
            Zing: false,
            Inter: false,
            Safar: false
        }
    });

    const cities = [
        'Mumbai, Maharashtra',
        'Bengaluru, Karnataka',
        'Chennai, Tamil Nadu',
        'Kolkata, West Bengal',
        'Hyderabad, Telangana',
        'Patna, Bihar',
        'Ahmedabad, Gujarat',
        'Jaipur, Rajasthan',
    ]

    const handleCheckboxChange = (sessionType, isSelected) => {
        setIsAnyCheckboxSelected(
            Array.from(document.querySelectorAll('input[type="checkbox"]')).some(
                (checkbox) => checkbox.checked
            )
        );

        if (sessionType === 'departure') {
            if (!Array.from(document.querySelectorAll('input[type="checkbox"][data-session-type="departure"]')).some(
                (checkbox) => checkbox.checked
            )) {
                setDepartureSessionSelected(false)
            }
            else {
                setDepartureSessionSelected(isSelected);
                if (!isSelected && !arrivalSessionSelected) {
                    setArrivalSessionSelected(false);
                }
            }
        } else if (sessionType === 'arrival') {
            if (!Array.from(document.querySelectorAll('input[type="checkbox"][data-session-type="arrival"]')).some(
                (checkbox) => checkbox.checked
            )) {
                setArrivalSessionSelected(false)
            }
            else {
                setArrivalSessionSelected(isSelected);
                if (!isSelected && !departureSessionSelected) {
                    setDepartureSessionSelected(false);
                }
            }
        }
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
                    disabled={!isAnyCheckboxSelected}
                >
                    Apply
                </button>
            </div>
            <p className="font-bold text-gray-700 m-4">Departure Time</p>
            <div className='flex flex-row m-4'>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={() => handleCheckboxChange('departure', true)}
                    data-session-type="departure"
                    disabled={arrivalSessionSelected}
                />
                <span className="font-semibold text-gray-500 ml-2">Morning Session</span>
            </div>
            <div className='flex flex-row m-4'>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={() => handleCheckboxChange('departure', true)}
                    data-session-type="departure"
                    disabled={arrivalSessionSelected}
                />
                <span className="font-semibold text-gray-500 ml-2">Afternoon Session</span>
            </div>
            <div className='flex flex-row m-4'>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={() => handleCheckboxChange('departure', true)}
                    data-session-type="departure"
                    disabled={arrivalSessionSelected}
                />
                <span className="font-semibold text-gray-500 ml-2">Night Session</span>
            </div>
            <p className="font-bold text-gray-800 m-4">Arrival Time</p>
            <div className='flex flex-row m-4'>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={() => handleCheckboxChange('arrival', true)}
                    data-session-type="arrival"
                    disabled={departureSessionSelected}
                />
                <span className="font-semibold text-gray-500 ml-2">Morning Session</span>
            </div>
            <div className='flex flex-row m-4'>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={() => handleCheckboxChange('arrival', true)}
                    data-session-type="arrival"
                    disabled={departureSessionSelected}
                />
                <span className="font-semibold text-gray-500 ml-2">Afternoon Session</span>
            </div>
            <div className='flex flex-row m-4'>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={() => handleCheckboxChange('arrival', true)}
                    data-session-type="arrival"
                    disabled={departureSessionSelected}
                />
                <span className="font-semibold text-gray-500 ml-2">Night Session</span>
            </div>

            <p className="font-bold text-gray-800 m-4">Pickup Point</p>
            <div className="flex flex-col m-4 overflow-y-scroll max-h-40">
                {cities.map((elem, index) => {
                    return (
                        <div className="flex flex-row m-2" key={`from-${index}`}
                        onClick={() => {
                            dispatch(busQueriesChanged({...busQueries, from: elem}))
                        }}>
                            {busQueries.from === elem? <MdCheckBox color={"darkblue"}/> : <MdCheckBoxOutlineBlank color='gray'/>}
                            <span className="font-semibold text-gray-500 ml-2">
                                {elem}
                            </span>
                        </div>
                    )
                })}
            </div>
            <p className="font-bold text-gray-800 m-4">Drop Point</p>
            <div className="flex flex-col m-4 overflow-y-scroll max-h-40">
                {cities.map((elem, index) => {
                    return (
                        <div className="flex flex-row m-2" key={`from-${index}`} onClick={() => {
                            dispatch(busQueriesChanged({...busQueries, to: elem}))
                        }}>
                            {busQueries.to === elem ? <MdCheckBox color='blue'/> : <MdCheckBoxOutlineBlank color='gray'/>}
                            <span className="font-semibold text-gray-500 ml-2">
                                {elem}
                            </span>
                        </div>
                    )
                })}
            </div>
            <p className="font-bold text-gray-800 m-4">Bus Operator</p>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">Zing Bus</span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">InterCity Smart</span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={handleCheckboxChange} />
                <span className="font-semibold text-gray-500 ml-2">Safar Exp</span>
            </div>
        </div>
    );
};

export default Filter;
