import { months, time } from "../../../utils/mockData"
import React, { useState } from 'react'
import * as dateFns from 'date-fns'
import { useDispatch, useSelector } from "react-redux"
import { setSelectedMonth } from "../../../redux/slices/features/calendarSlice"


function AddEventCalender_comp() {

    const dispatch = useDispatch()
    const currentDate = useSelector((state) => state.calendar.currentDate);
    const selectedMonth = useSelector((state) => state.calendar.selectedMonth);



    // format of date 
    const formatOfMonth = "MMMM"
    const formatOfWeek = 'iiiii'
    const formatOfDay = 'd'


    const today = new Date()
    const isToday = (day) => dateFns.isSameDay(day, today)

    // find first day of currentDate 
    const selectedMonthFirstDay = dateFns.startOfMonth(selectedMonth);

    //find last day of the currentDate
    const selectedMonthLastDay = dateFns.lastDayOfMonth(selectedMonth);

    //find first day of week of firstDay
    const selectedMonthStartDate = dateFns.startOfWeek(selectedMonthFirstDay, { weekStartsOn: 1 });

    //find first day of week of lastDay
    const selectedMonthEndDate = dateFns.lastDayOfWeek(selectedMonthLastDay);

    //render all days
    const selectedMonthTotalDate = dateFns.eachDayOfInterval({ start: selectedMonthStartDate, end: selectedMonthEndDate });


    // Handler for month selection
    const handleMonthSelect = (event) => {
        const selectedMonthIndex = parseInt(event.target.value);
        const selectedMonthDate = new Date(currentDate, selectedMonthIndex, 1);
        dispatch(setSelectedMonth(selectedMonthDate.getTime())); // Dispatch the selected month
    };


    const selectedMonthWeeks = ((date) => {
        const weeks = [];
        for (let day = 0; day < selectedMonthTotalDate.length; day += 7) {
            weeks.push(selectedMonthTotalDate.slice(day, day + 7));
        }
        return weeks;
    })(selectedMonthTotalDate);

    const hours = [];

    for (let hour = 6; hour <= 19; hour++) {
        const ampm = hour < 12 ? 'am' : 'pm';
        const displayHour = hour <= 12 ? hour : hour - 12;
        hours.push({
            id: hour - 6,
            hour: `${displayHour}${ampm}`
        });
    }

    return (
        <div className="w-full bg-[#FBF7F4] h-full p-3 rounded-t-xl">
            <p className="w-full text-center font-semibold mt-4">Add to your calendar</p>
            <div className='flex flex-col gap-4 xl:gap-6 text-xs mt-2'>
                <div>
                    <p>Add month</p>
                    <select name="" id="" className="p-2 rounded-lg w-full" onChange={handleMonthSelect}>
                        {months.map((data, i) => (
                            <option key={i} value={i}>{data.month}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p>Add day</p>
                    <div className="bg-white text-[10px] p-2 rounded-lg">
                        <div className='grid grid-cols-7 gap-1 text-center'>
                            {selectedMonthWeeks[0].map((week, i) => (
                                <span key={i}>{dateFns.format(week, formatOfWeek)}</span>
                            ))}
                        </div>
                        <div className={`grid grid-cols-7 w-full h-[70%] gap-1 mt-1`}>
                            {selectedMonthTotalDate.map((date, i) => (
                                <p key={i} className={`flex items-center justify-center py-1 ${isToday(date) ? 'bg-black text-white rounded-full' : ''} `}>{dateFns.format(date, formatOfDay)}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <p>Start time</p>
                    <select name="" id="" className="p-2 rounded-lg w-full flex gap-2 outline-none">
                        {time.map((data, i) => (
                            <option key={i} value={data.time}>{data.time}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p>End time</p>
                    <select name="" id="" className="p-2 rounded-lg w-full flex gap-2 outline-none">
                        {time.map((data, i) => (
                            <option key={i} value={data.time}>{data.time}</option>
                        ))}
                    </select>
                </div>


                <button className="w-full rounded-lg bg-black text-white p-2">Next</button>

            </div>
        </div>
    )
}

export default AddEventCalender_comp