import Calender from "../../../features/calender/Calender"
import Notification_comp from "../../../features/calender/Notification_comp"


function DateAndNotification_comp() {
    return (
        <div>
            <div className="flex gap-4 flex-col mt-5 lg:flex-row ">
                <div className="lg:w-[60%]">
                    <Calender />
                </div>
                <div className="lg:w-[40%]">
                    <Notification_comp />
                </div>
            </div>
        </div>
    )
}

export default DateAndNotification_comp