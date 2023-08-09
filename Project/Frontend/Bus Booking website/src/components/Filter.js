import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectbusQueries, busQueriesChanged } from '../global-state/busQueriesSlice';
import { selectqueriedBusList, queriedBusListChanged } from '../global-state/queriedbusListSlice';
import { filterBusesWithQuery, delay } from '../useful-functions/usefulFunctions';
import { selectBusList } from '../global-state/busListSlice';

const Filter = () => {
    const dispatch = useDispatch()
    const [departureSessionSelected, setDepartureSessionSelected] = useState(false);
    const [arrivalSessionSelected, setArrivalSessionSelected] = useState(false);
    const [prevBusQueries, setPrevBusQueries] = useState({})
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

    const busQueries = useSelector(selectbusQueries)
    const busList = useSelector(selectBusList)

    const delay = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }


    const handleCheckboxChange = (sessionType, isSelected) => {

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

    const clickedAppliedButton = async () => {
        if (prevBusQueries === filterQueries) {
            alert("Please atleast make a change")
        }
        else {
            dispatch(busQueriesChanged({...filterQueries, date: busQueries.date}))
            setPrevBusQueries(filterQueries)
            await delay(500)
            const filteredBuses = filterBusesWithQuery(busList, busQueries)
            dispatch(queriedBusListChanged(filteredBuses))
            const {date, ...withoutDateBusQueries} = busQueries
            setFilterQueries(withoutDateBusQueries)
        }
    }

    useEffect(() => {
        handleCheckboxChange();
        const {date, ...withoutDateBusQueries} = busQueries
        setPrevBusQueries(withoutDateBusQueries)
        setFilterQueries(withoutDateBusQueries)
    }, []);

    return (
        <div className='flex flex-col md:w-auto'>
            <div className="flex flex-row items-center justify-between">
                <p className='font-bold text-gray-900 m-4'>
                    Filter
                </p>
                <button
                    className={`bg-gray-400 text-white p-1 me-3 rounded-lg hover:bg-gray-600 cursor-pointer`}
                    onClick={clickedAppliedButton}
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
                    onChange={() => {
                        handleCheckboxChange('departure', true)
                        setFilterQueries(prevFilterQueries => ({
                            ...prevFilterQueries,
                            departureTime: {
                                ...prevFilterQueries.departureTime,
                                morning: !prevFilterQueries.departureTime.morning
                            }
                        }))
                    }}
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
                    onChange={() => {
                        handleCheckboxChange('departure', true)
                        setFilterQueries(prevFilterQueries => ({
                            ...prevFilterQueries,
                            departureTime: {
                                ...prevFilterQueries.departureTime,
                                afternoon: !prevFilterQueries.departureTime.afternoon
                            }
                        }))
                    }}
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
                    onChange={() => {
                        handleCheckboxChange('departure', true)
                        setFilterQueries(prevFilterQueries => ({
                            ...prevFilterQueries,
                            departureTime: {
                                ...prevFilterQueries.departureTime,
                                night: !prevFilterQueries.departureTime.night
                            }
                        }))
                    }}
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
                    onChange={() => {
                        handleCheckboxChange('arrival', true)
                        setFilterQueries(prevFilterQueries => ({
                            ...prevFilterQueries,
                            arrivalTime: {
                                ...prevFilterQueries.arrivalTime,
                                morning: !prevFilterQueries.arrivalTime.morning
                            }
                        }))
                    }}
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
                    onChange={() => {
                        handleCheckboxChange('arrival', true)
                        setFilterQueries(prevFilterQueries => ({
                            ...prevFilterQueries,
                            arrivalTime: {
                                ...prevFilterQueries.arrivalTime,
                                afternoon: !prevFilterQueries.arrivalTime.afternoon
                            }
                        }))
                    }}
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
                    onChange={() => {
                        handleCheckboxChange('arrival', true)
                        setFilterQueries(prevFilterQueries => ({
                            ...prevFilterQueries,
                            arrivalTime: {
                                ...prevFilterQueries.arrivalTime,
                                night: !prevFilterQueries.arrivalTime.night
                            }
                        }))
                    }}
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
                                setFilterQueries({ ...filterQueries, from: elem })
                            }}>
                            {filterQueries.from === elem ? <input type="checkbox" id="" name="" checked readOnly/> : <input type="checkbox" id="" name="" readOnly/>}
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
                            setFilterQueries({ ...filterQueries, to: elem })
                        }}>
                            {filterQueries.to === elem ? <input type="checkbox" id="" name="" checked readOnly/> : <input type="checkbox" id="" name="" readOnly/>}
                            <span className="font-semibold text-gray-500 ml-2">
                                {elem}
                            </span>
                        </div>
                    )
                })}
            </div>
            <p className="font-bold text-gray-800 m-4">Bus Operator</p>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={
                    () => {
                        handleCheckboxChange
                        setFilterQueries(prevFilterQueries => ({
                            ...prevFilterQueries,
                            busOperator: {
                                ...prevFilterQueries.busOperator,
                                Zing: !prevFilterQueries.busOperator.Zing
                            }
                        }))
                    }} />
                <span className="font-semibold text-gray-500 ml-2">Zing Bus</span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={
                    () => {
                        handleCheckboxChange
                        setFilterQueries(prevFilterQueries => ({
                            ...prevFilterQueries,
                            busOperator: {
                                ...prevFilterQueries.busOperator,
                                Inter: !prevFilterQueries.busOperator.Inter
                            }
                        }))
                    }} />
                <span className="font-semibold text-gray-500 ml-2">InterCity Smart</span>
            </div>
            <div className='flex flex-row m-4'>
                <input type="checkbox" name="" id="" onChange={
                    () => {
                        handleCheckboxChange
                        setFilterQueries(prevFilterQueries => ({
                            ...prevFilterQueries,
                            busOperator: {
                                ...prevFilterQueries.busOperator,
                                Safar: !prevFilterQueries.busOperator.Safar
                            }
                        }))
                    }} />
                <span className="font-semibold text-gray-500 ml-2">Safar Exp</span>
            </div>
        </div>
    );
};

export default Filter;
