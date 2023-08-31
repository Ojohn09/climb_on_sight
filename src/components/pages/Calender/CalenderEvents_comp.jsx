import React, { useState } from 'react'
import * as dateFns from 'date-fns'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentDate } from '../../../redux/slices/features/calendarSlice'
import { date } from 'yup'

function CalenderEvents_comp() {

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
        <div className='w-full h-full'>
            <div className="flex flex-col lg:flex-row w-full h-full bg-[#FBF7F4] rounded-t-xl gap-4 xl:gap-7 ">
                <div className='lg:w-[70%] h-full'>

                    <div className='text-lg p-2 xl:text-xl 3xl:text-3xl px-6 mt-2 font-semibold'>
                        {dateFns.format(currentDate, formatOfMonth)} {dateFns.format(currentDate, formatOfDay)}
                    </div>
                    <div className='grid grid-cols-7 gap-1 text-center mt-4 text-[10px] xl:text-sm 2xl:text-base 3xl:text-xl'>
                        {weeks[0].map((week, i) => (
                            <span key={i} className={`${dateFns.isWeekend(week) ? 'text-gray-200 ' : ''}`}>{dateFns.format(week, formatOfWeek)}</span>
                        ))}
                    </div>
                    <div className={`grid grid-cols-7 w-full h-full lg:h-[50%] xl:h-[65%] 4xl:h-[70%] text-[10px] xl:text-sm 3xl:text-base`}>
                        {totalDate.map((date, i) => (
                            <p key={i} className={`flex items-end justify-end p-1 border-t border-r border-gray-200 ${dateFns.isWeekend(date) ? 'text-gray-200 bg-gray-50 opacity-50 border-t-0 border-r-0' : ''}`}>{dateFns.format(date, formatOfDay)}</p>
                        ))}
                    </div>
                    <div className='justify-between flex mt-4 xl:mt-8 px-4 3xl:text-[20px] 3xl:mt-[90px]'>
                        <button className='bg-white p-2 rounded-lg flex items-center' onClick={handlePrevMonthClick}>
                            <span className='text-[14px] 2xl:text-lg 3xl:text-xl'><BiLeftArrowAlt /></span>
                            <span className='text-[10px] xl:text-sm 2xl:text-base 3xl:text-xl'>{prevMonth}</span>
                        </button>
                        <button className='bg-white p-2 rounded-lg flex items-center' onClick={handleNextMonthClick}>
                            <span className='text-[10px] xl:text-sm 2xl:text-base 3xl:text-xl'>{nextMonth}</span>
                            <span className='text-[14px] 2xl:text-lg 3xl:text-xl'><BiRightArrowAlt /></span>
                        </button>
                    </div>
                </div>
                <div className='lg:w-[30%] h-full'>
                    <div className='flex flex-col gap-2 3xl:gap-6 4xl:gap-8 mt-12 px-4'>
                        <div className='bg-[#EFFCEF] px-4 py-2 3xl:p-6 rounded-xl text-[8px] xl:text-[12px] 3xl:text-base'>
                            <p className='flex items-center gap-1'>
                                <span className='text-xl xl:text-3xl 2xl:text-5xl font-bold p-2'>9</span>
                                <span className='font-semibold text-[12px] xl:text-[16px] 3xl:text-xl'>Event one</span>
                            </p>
                            <p className='text-[12px] xl:text-[16px] 3xl:text-2xl'>Wednesday,10th, 2023</p>
                            <p className='flex gap-3 text-gray-500 '>
                                <span>01:30 PM</span>
                                <span>Ice Piercer</span>
                            </p>
                        </div>

                        <div className='bg-[#ECF6F7] px-4 py-2 3xl:p-6 rounded-xl text-[8px] xl:text-[12px] 3xl:text-base'>
                            <p className='flex items-center gap-1'>
                                <span className='text-xl xl:text-3xl 2xl:text-5xl font-bold p-2'>9</span>
                                <span className='font-semibold text-[12px] xl:text-[16px] 3xl:text-xl'>Event one</span>
                            </p>
                            <p className='text-[12px] xl:text-[16px] 3xl:text-2xl'>Wednesday,10th, 2023</p>
                            <p className='flex gap-3 text-gray-500 '>
                                <span>01:30 PM</span>
                                <span>Ice Piercer</span>
                            </p>
                        </div>

                        <div className='bg-[#FFEEE2] px-4 py-2 3xl:p-6 rounded-xl text-[8px] xl:text-[12px] 3xl:text-base'>
                            <p className='flex items-center gap-1'>
                                <span className='text-xl xl:text-3xl 2xl:text-5xl font-bold p-2'>9</span>
                                <span className='font-semibold text-[12px] xl:text-[16px] 3xl:text-xl'>Event one</span>
                            </p>
                            <p className='text-[12px] xl:text-[16px] 3xl:text-2xl'>Wednesday,10th, 2023</p>
                            <p className='flex gap-3 text-gray-500 '>
                                <span>01:30 PM</span>
                                <span>Ice Piercer</span>
                            </p>
                        </div>

                        <div className='bg-[#EEE8FC] px-4 py-2 3xl:p-6 rounded-xl text-[8px] xl:text-[12px] 3xl:text-base'>
                            <p className='flex items-center gap-1'>
                                <span className='text-xl xl:text-3xl 2xl:text-5xl font-bold p-2'>9</span>
                                <span className='font-semibold text-[12px] xl:text-[16px] 3xl:text-xl'>Event one</span>
                            </p>
                            <p className='text-[12px] xl:text-[16px] 3xl:text-2xl'>Wednesday,10th, 2023</p>
                            <p className='flex gap-3 text-gray-500 '>
                                <span>01:30 PM</span>
                                <span>Ice Piercer</span>
                            </p>
                        </div>

                        <div className='bg-white rounded-xl text-xs 2xl:text-lg 3xl:text-2xl p-2 '>
                            <p className='m-2 p-1 flex justify-between'>
                                <span>Event Total amount</span>
                                <span className='text-white bg-black rounded-full px-1 2xl:px-2'>4</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalenderEvents_comp