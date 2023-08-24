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


    console.log("selectedMonthStartDate:", selectedMonthStartDate);
    console.log("selectedMonthEndDate:", selectedMonthEndDate);
    console.log("selectedMonthTotalDate:", selectedMonthTotalDate);


    // Handler for month selection
    const handleMonthSelect = (event) => {
        const selectedMonthIndex = parseInt(event.target.value);
        const selectedMonthDate = new Date(currentDate, selectedMonthIndex, 1);
        const selectedMonthTimestamp = selectedMonthDate.getTime()
        dispatch(setSelectedMonth(selectedMonthTimestamp)); // Dispatch the selected month
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
        <div className="w-full bg-[#FBF7F4] h-full p-3 rounded-t-xl flex flex-col gap-2">
            <p className="w-full text-center font-semibold mt-4 xl:text-xl 3xl:text-2xl h-fit overflow-hidden">Add to your calendar</p>
            <div className='mt-2 xl:mt-4 text-[8px] xl:h-full'>
                <div className="xl:text-sm 3xl:text-2xl">
                    <p>Add month</p>
                    <select name="" id="" className="p-2 rounded-lg w-full" onChange={handleMonthSelect}>
                        {months.map((data, i) => (
                            <option key={i} value={i}>{data.month}</option>
                        ))}
                    </select>
                </div>

                <div className="xl:mt-4 text-[8px] 3xl:mt-8 3xl:text-2xl my-5 xl:h-[50%] ">
                    <p className="xl:text-sm 2xl:text-base 3xl:text-2xl">Add day</p>
                    <div className="bg-white text-[10px] 3xl:text-xl rounded-lg lg:h-[70%] xl:h-[80%] pt-5">
                        <div className='grid grid-cols-7 gap-1 text-center mt-2'>
                            {selectedMonthWeeks[0].map((week, i) => (
                                <span key={i}>{dateFns.format(week, formatOfWeek)}</span>
                            ))}
                        </div>
                        <div className={`grid grid-cols-7 w-full lg:h-[100%] xl:h-[80%] gap-1 mt-2`}>
                            {selectedMonthTotalDate.map((date, i) => (
                                <p key={i} className={`flex items-center justify-center ${isToday(date) ? 'bg-black text-white rounded-full' : ''} `}>{dateFns.format(date, formatOfDay)}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="xl:mt-4 text-[8px] 2xl:text-sm 3xl:mt-4 4xl:mt-6 3xl:text-2xl">
                    <p>Start time</p>
                    <select name="" id="" className="p-2 rounded-lg w-full flex gap-2 outline-none">
                        {time.map((data, i) => (
                            <option key={i} value={data.time}>{data.time}</option>
                        ))}
                    </select>
                </div>

                <div className="xl:mt-4 text-[8px] 2xl:text-sm 3xl:mt-8 3xl:text-2xl">
                    <p>End time</p>
                    <select name="" id="" className="p-2 rounded-lg w-full flex gap-2 outline-none">
                        {time.map((data, i) => (
                            <option key={i} value={data.time}>{data.time}</option>
                        ))}
                    </select>
                </div>


                <button className="w-full mt-4 3xl:mt-8 rounded-lg bg-black 2xl:text-xl text-white p-2">Next</button>

            </div>
        </div>
    )
}

export default AddEventCalender_comp