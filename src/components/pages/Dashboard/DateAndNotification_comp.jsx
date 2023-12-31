import Calender from "../../../features/calender/Calender"
import Notification_comp from "../../../features/calender/Notification_comp"
import NewMessages_comp from "./NewMessages_comp"


function DateAndNotification_comp() {
    return (

        <div className="flex h-[50%] gap-4 flex-col mt-2 xl:mt-5 md:flex-row h">
            <div className="md:w-[65%]">
                <Calender />
            </div>
            <div className="md:w-[35%]">
                <Notification_comp />
            </div>
        </div>

    )
}

export default DateAndNotification_comp