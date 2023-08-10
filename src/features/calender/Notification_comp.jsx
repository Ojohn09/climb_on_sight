import { IoNotifications } from "react-icons/io5"


function Notification_comp() {

    const notificationArray = [
        { id: 0, notiText: "You have a guide request" },
        { id: 1, notiText: "You have a guide request" },
        { id: 2, notiText: "You have a guide request" },
        { id: 3, notiText: "You have a guide request" },
        { id: 4, notiText: "You have a guide request" },

    ]

    return (
        <div className="bg-white rounded-xl px-3 h-[100%] xl:h-[100%] overflow-y-auto shadow-sm">
            <div className="text-sm py-3 font-medium">
                <p>New Notification</p>
            </div>

            <div className="flex flex-col gap-5 xl:gap-7 items-center">
                {notificationArray.map((data) => (
                    <div key={data.id} className="flex justify-between gap-1 xs:text-[10px] sm:text-[12px] lg:text-[10px] w-full xl:text-[16px] border items-center ">
                        <p className="text-white bg-gray-200 p-1 md:p-2 rounded-full"><IoNotifications /></p>
                        <p className="">{data.notiText}</p>
                        <p className="bg-[#C69776] text-black font-medium p-1.5 lg:p-2 xl:p-3 rounded-2xl">View</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notification_comp