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
        <div className="w-full bg-[#FBF7F4] h-full p-3 rounded-t-xl flex flex-col gap-2">
            <p className="w-full text-center font-semibold  xl:text-xl 3xl:text-2xl h-fit overflow-hidden">Add to your calendar</p>
            <div className='mt-2 xl:mt-4 xl:h-full'>
                <div className="text-xs xl:text-sm 3xl:text-2xl">
                    <p>Add month</p>
                    <select
                        name=""
                        id=""
                        className="p-2 rounded-lg w-full"
                        value={selectedMonth}
                        onChange={handleMonthChange}
                    >
                        {months.map((data, i) => (
                            <option key={i} value={i}>{data.month}</option>
                        ))}
                    </select>
                </div>

                <div className="xl:mt-4 3xl:mt-8 3xl:text-2xl my-2 xl:h-[50%]">
                    <p className="text-xs xl:text-sm 2xl:text-base 3xl:text-2xl">Add day</p>
                    <div className="bg-white text-[10px] 2xl:text-sm 3xl:text-xl rounded-lg lg:h-[100%] xl:h-[80%] p-1">
                        <div className='grid grid-cols-7 gap-1 text-center mt-2'>
                            {weeks[0].map((week, i) => (
                                <span key={i}>{dateFns.format(week, formatOfWeek)}</span>
                            ))}
                        </div>
                        <div className={`grid grid-cols-7 w-full lg:h-[100%] xl:h-[80%] gap-2 mt-2`}>
                            {totalDate.map((date, i) => (
                                <p key={i} className={`flex items-center justify-center py-0.5 4xl:py-0 ${isToday(date) ? 'bg-black text-white rounded-full' : ''} `}>{dateFns.format(date, formatOfDay)}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="xl:mt-4 text-xs 2xl:text-sm 3xl:mt-4 4xl:mt-6 3xl:text-2xl">
                    <p>Start time</p>
                    <select name="" id="" className="p-2 rounded-lg w-full flex gap-2 outline-none">
                        {time.map((data, i) => (
                            <option key={i} value={data.time}>{data.time}</option>
                        ))}
                    </select>
                </div>

                <div className="xl:mt-4 text-xs 2xl:text-sm 3xl:mt-8 3xl:text-2xl">
                    <p>End time</p>
                    <select name="" id="" className="p-2 rounded-lg w-full flex flex-row gap-2 outline-none">
                        {time.map((data, i) => (
                            <option className="flex bg-gray-50" key={i} value={data.time}>{data.time}</option>
                        ))}
                    </select>
                </div>


                <button className="w-full mt-4 3xl:mt-8 rounded-lg bg-black text-sm xl:text-base 2xl:text-lg text-white p-2">Next</button>

            </div>
        </div>
    )
}

export default AddEventCalender_comp