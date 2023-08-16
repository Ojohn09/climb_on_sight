import { months, time } from "../../../utils/mockData"
import React, { useState } from 'react'
import * as dateFns from 'date-fns'


function AddEventCalender_comp() {


    const formatOfYear = "YYY"
    const formatOfMonth = "MMMM"
    const formatOfWeek = 'iiiii'
    const formatOfDay = 'd'

    const [currentDate, setCurrentDate] = useState(new Date())

    // find first day of currentDate 
    const firstDay = dateFns.startOfMonth(currentDate)

    //find last day of the currentDate
    const lastDay = dateFns.lastDayOfMonth(currentDate)

    //find first day of week of firstDay
    const startDate = dateFns.startOfWeek(firstDay, { weekStartsOn: 1 })

    //find first day of week of lastDay
    const endDate = dateFns.lastDayOfWeek(lastDay)

    //render all days
    const totalDate = dateFns.eachDayOfInterval({ start: startDate, end: endDate })

    // Format previous and next month names
    const prevMonth = dateFns.format(dateFns.subMonths(currentDate, 1), formatOfMonth);
    const nextMonth = dateFns.format(dateFns.addMonths(currentDate, 1), formatOfMonth);


    const weeks = ((date) => {
        const weeks = []
        for (let day = 0; day < totalDate.length; day += 7) {
            weeks.push(totalDate.slice(day, day + 7));
        }
        return weeks
    })(totalDate)

    const hours = [];

    for (let hour = 6; hour <= 19; hour++) {
        const ampm = hour < 12 ? 'am' : 'pm';
        const displayHour = hour <= 12 ? hour : hour - 12;
        hours.push({
            id: hour - 6,
            hour: `${displayHour}${ampm}`
        });
    }

    console.log(hours);

    return (
        <div className="w-full bg-[#FBF7F4] h-full p-3 rounded-t-xl">
            <p className="w-full text-center font-semibold mt-4">Add to your calendar</p>
            <div className='flex flex-col gap-4 xl:gap-6 text-xs mt-2'>
                <div>
                    <p>Add month</p>
                    <select name="" id="" className="p-2 rounded-lg w-full">
                        {months.map((data) => (
                            <option key={data.id} value="">{data.month}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p>Add day</p>
                    <div className="bg-white text-[10px] p-2 rounded-lg">
                        <div className='grid grid-cols-7 gap-1 text-center'>
                            {weeks[0].map((week) => (
                                <span>{dateFns.format(week, formatOfWeek)}</span>
                            ))}
                        </div>
                        <div className={`grid grid-cols-7 w-full h-[50%] gap-2 mt-1`}>
                            {totalDate.map((date) => (
                                <div className={`flex items-end justify-end p-1`}>{dateFns.format(date, formatOfDay)}</div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <p>Start time</p>
                    <select name="" id="" className="p-2 rounded-lg w-full">
                        {time.map((data) => (
                            <option key={data.id} value="">{data.month}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p>End time</p>
                    <select name="" id="" className="p-2 rounded-lg w-full">
                        {time.map((data) => (
                            <option key={data.id} value="">{data.month}</option>
                        ))}
                    </select>
                </div>


                <button className="w-full rounded-lg bg-black text-white p-2">Next</button>

            </div>
        </div>
    )
}

export default AddEventCalender_comp