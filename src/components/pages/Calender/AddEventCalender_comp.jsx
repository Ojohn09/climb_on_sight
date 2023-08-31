import { months, time } from "../../../utils/mockData"
import { setCurrentDate } from "../../../redux/slices/features/calendarSlice"
import * as dateFns from 'date-fns'
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"


function AddEventCalender_comp() {
    const [selectedMonth, setSelectedMonth] = useState(0);
    const dispatch = useDispatch()
    const calendarState = useSelector((state) => state.calendar);
    const currentDate = new Date(calendarState.currentDate);

    // format of date 
    const formatOfMonth = "MMMM"
    const formatOfWeek = 'iiiii'
    const formatOfDay = 'd'

    const today = new Date()
    const isToday = (day) => dateFns.isSameDay(day, new Date());

    console.log(isToday(31))

    const selectedMonthDate = new Date(currentDate.getFullYear(), selectedMonth + 1, 1);
    const firstDay = dateFns.startOfMonth(selectedMonthDate);
    const lastDay = dateFns.lastDayOfMonth(selectedMonthDate);
    const startDate = dateFns.startOfWeek(firstDay, { weekStartsOn: 1 });
    const endDate = dateFns.lastDayOfWeek(lastDay);
    const totalDate = dateFns.eachDayOfInterval({ start: startDate, end: endDate });

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
        dispatch(setCurrentDate(new Date(calendarState.currentDate).setMonth(event.target.value)));
    }

    const weeks = ((totalDate) => {
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



    return (
        <div className="w-full bg-[#FBF7F4] h-full px-10 p-4 rounded-t-xl flex flex-col gap-2">
            <p className="w-full text-center font-semibold 3xl:text-xl h-fit overflow-hidden">Add to your calendar</p>
            <div className='mt-2 xl:mt-4 xl:h-full flex flex-col gap-3 3xl:gap-[30px]'>
                <div className="text-xs xl:text-sm 3xl:text-base flex flex-col gap-1">
                    <p>Add month</p>
                    <select
                        name=""
                        id=""
                        className="px-3 p-2 rounded-xl w-full outline-none text-[10px] 3xl:text-[14px]"
                        value={selectedMonth}
                        onChange={handleMonthChange}
                    >
                        {months.map((data, i) => (
                            <option key={i} value={i} className="text-[10px] 3xl:text-[14px]">{data.month}</option>
                        ))}
                    </select>
                </div>

                <div className=" 3xl:text-2xl my-2 h-fit ">
                    <p className="text-xs xl:text-sm 2xl:text-base">Add day</p>
                    <div className="bg-white text-[8px] 2xl:text-[10px] 3xl:text-[14px] rounded-xl lg:h-fit p-2">
                        <div className='grid grid-cols-7 gap-1 text-center mt-2'>
                            {weeks[0].map((week, i) => (
                                <span key={i}>{dateFns.format(week, formatOfWeek)}</span>
                            ))}
                        </div>
                        <div className={`grid grid-cols-7 w-full lg:h-[100%] xl:h-[50%] gap-2 mt-2`}>
                            {totalDate.map((date, i) => (
                                <p key={i} className={`flex items-center justify-center py-0.5 4xl:py-0 ${isToday(date) ? 'bg-black text-white rounded-full' : ''} `}>
                                    {dateFns.format(date, formatOfDay)}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-xs xl:text-sm 3xl:text-base flex flex-col gap-1">
                    <p className="p-1">Start time</p>
                    <select name="" id="" className="p-2 rounded-xl w-full flex gap-2 outline-none text-[10px] 3xl:text-[14px]">
                        {time.map((data, i) => (
                            <option key={i} value={data.time} className="flex bg-gray-50 text-[10px] 3xl:text-[14px]">{data.time}</option>
                        ))}
                    </select>
                </div>

                <div className="text-xs xl:text-sm 3xl:text-base flex flex-col gap-1">
                    <p className="p-1">End time</p>
                    <select name="" id="" className="p-2 rounded-xl w-full flex flex-row gap-2 outline-none text-[10px] 3xl:text-[14px]">
                        {time.map((data, i) => (
                            <option className="flex bg-gray-50 text-[10px] 3xl:text-[14px]" key={i} value={data.time}>{data.time}</option>
                        ))}
                    </select>
                </div>


                <button className="w-full rounded-lg bg-black text-sm text-white p-3">Next</button>

            </div>
        </div>
    )
}

export default AddEventCalender_comp