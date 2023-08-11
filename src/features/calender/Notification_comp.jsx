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
        <div className="bg-white rounded-xl p-3 xl:px-6 h-[100%] xl:h-[100%] overflow-y-auto shadow-sm">
            <div className="my-3 xl:my-4 font-semibold">
                <p>New Notification</p>
            </div>

            <div className="flex flex-col gap-4 xl:gap-7 items-center">
                {notificationArray.map((data) => (
                    <div key={data.id} className="flex justify-between xs:text-[10px] sm:text-[12px] lg:text-[12px] w-full xl:text-[16px] items-center ">
                        <p className="text-black bg-gray-200 p-1 md:p-2 rounded-full text-xs"><IoNotifications /></p>
                        <p className="">{data.notiText}</p>
                        <p className="bg-[#C69776] text-black p-1.5 rounded-2xl">View</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notification_comp