import React, { useState } from 'react'
import * as dateFns from 'date-fns'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentDate } from '../../redux/slices/features/calendarSlice'

function Calender_comp() {

    const dispatch = useDispatch()

    const currentDate = useSelector((state) => state.calendar.currentDate)



    const formatOfMonth = "MMMM"
    const formatOfWeek = 'cccc'
    const formatOfDay = 'd'

    const today = new Date()

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

    //handle for previous and next month buttons
    const handlePrevMonthClick = () => {
        dispatch(setCurrentDate(dateFns.subMonths(currentDate, 1)));
    };
    const handleNextMonthClick = () => {
        dispatch(setCurrentDate(dateFns.addMonths(currentDate, 1)));
    };

    const isToday = (day) => day === today


    const weeks = ((date) => {
        const weeks = []
        for (let day = 0; day < totalDate.length; day += 7) {
            weeks.push(totalDate.slice(day, day + 7));
        }
        return weeks
    })(totalDate)


    return (


        <div className='w-full h-[100%] bg-white rounded-xl gap-4 xl:gap-8 py-4 overflow-hidden'>
            <div className=' w-full p-2 text-sm xl:text-lg font-semibold'>
                {dateFns.format(currentDate, formatOfMonth)} {dateFns.format(currentDate, formatOfDay)}
            </div>
            <div className='grid grid-cols-7 w-full gap-1 text-center text-[10px] lg:text-[8px] xl:text-sm 2xl:text-base'>

                {weeks[0].map((week, i) => (
                    <span key={i}>{dateFns.format(week, formatOfWeek)}</span>
                ))}
            </div>
            <div className={`grid grid-cols-7 h-[80%] border-collapse text-[6px] xl:text-base border-t border-gray-300`}>
                {totalDate.map((date, i) => (
                    <div key={i} className={`flex items-end justify-end p-1 border-gray-300   ${dateFns.isWeekend(date) ? 'text-gray-500 bg-gray-100 opacity-50 border-0' : ''} ${i % 1 === 5 ? '' : 'border-r '} ${i < totalDate.length - 7 ? 'border-b' : ''}`}>{dateFns.format(date, formatOfDay)}</div>
                ))}
            </div>
        </div>

    )
}

export default Calender_comp