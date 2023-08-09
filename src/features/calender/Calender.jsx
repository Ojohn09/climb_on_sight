import {
    add,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    getDay,
    isSameMonth,
    isToday,
    parse,
    startOfToday,
    startOfWeek,
} from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setEventDates, setCurrentMonth } from "../../redux/slices/features/calendarSlice";



const isSameDay = (date1, date2) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();


function Calender() {

    const dispatch = useDispatch();
    const eventDates = useSelector((state) => state.calendar.eventDates);
    const currentMonth = useSelector((state) => state.calendar.currentMonth);

    useEffect(() => {
        // Example: Set the current day as an event
        const today = startOfToday();
        const newEventDates = [
            today,
            new Date(today.getFullYear(), today.getMonth(), 6),
            new Date(today.getFullYear(), today.getMonth(), 1),
            new Date(today.getFullYear(), today.getMonth(), 14),
            new Date(today.getFullYear(), today.getMonth(), 20),
        ];
        dispatch(setEventDates(newEventDates));
    }, [dispatch]);

    const currentDate = format(currentMonth, 'MMMM dd');

    const weekStartsOnMonday = 1;
    const daysInMonth = eachDayOfInterval({
        start: startOfWeek(currentMonth, { weekStartsOn: weekStartsOnMonday }),
        end: endOfWeek(endOfMonth(currentMonth)),
    });

    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    const colStartClasses = [
        "",
        "col-start-2",
        "col-start-3",
        "col-start-4",
        "col-start-5",
        "col-start-6",
        "col-start-7",
    ];

    const getPrevMonth = (event) => {
        event.preventDefault();
        const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
        setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
    };

    const getNextMonth = (event) => {
        event.preventDefault();
        const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
        setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
    };

    const isWeekendDay = (date) => {
        const dayOfWeek = getDay(date);
        return dayOfWeek === 0 || dayOfWeek === 6; // Sunday (0), Saturday (6)
    };

    const isEventDay = (date) => {
        return !isWeekendDay(date) && eventDates.some(eventDate => isSameDay(eventDate, date));
    };



    return (
        <div className="bg-white rounded-xl pr-4 pb-4 pt-4">
            <div>
                <p className="font-semibold mx-4 text-[14px]">
                    {currentDate}
                </p>
                <div className="grid grid-cols-7 place-items-center">

                    {
                        days.map((day, idx) => {
                            return (
                                <div key={idx} className="capitalize text-[8px]">
                                    {day}
                                </div>
                            );
                        })}
                </div>

                <div>
                    <div className="grid grid-cols-7 mt-2 place-items-center">
                        {daysInMonth.map((day, idx) => {
                            const dayOfWeek = (getDay(day) + 6) % 7; // Adjust to start week on Monday
                            const isWeekend = dayOfWeek === 5 || dayOfWeek === 6; // Friday (5) and Saturday (6)
                            const isEvent = isEventDay(day);
                            const isWeekendDay = isWeekend || isEvent;
                            const borderClass = isWeekendDay ? "" : "border-r border-t border-gray-300";
                            const textColor = isWeekendDay ? "text-gray-300" : '';
                            const bgColor = isEventDay(day) ? "bg-blue-200 textBlack" : "";
                            const eventTextColor = isEvent ? "text-black" : "";
                            // const todayStyle = isToday(day) ? "bg-red-500 text-white" : "";

                            return (
                                <div
                                    key={idx}
                                    className={`relative w-full h-12 p-1 font-semibold flex items-end ${borderClass} ${bgColor} justify-end text-[10px] ${textColor} ${eventTextColor}`}
                                >
                                    {format(day, "d")}
                                    {isEvent && <span className="absolute top-0 left-0 font-bold ml-1 text-[8px] text-black m-1 uppercase">event one</span>}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calender
