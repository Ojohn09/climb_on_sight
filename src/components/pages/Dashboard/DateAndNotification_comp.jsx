import Calender from "../../../features/calender/Calender"
import Notification_comp from "../../../features/calender/Notification_comp"


function DateAndNotification_comp() {
    return (
        <div>
            <div className="flex gap-4 flex-col mt-5 md:flex-row h-auto">
                <div className="md:w-[60%] h-auto">
                    <Calender />
                </div>
                <div className="md:w-[40%]">
                    <Notification_comp />
                </div>
            </div>
        </div>
    )
}

export default DateAndNotification_comp