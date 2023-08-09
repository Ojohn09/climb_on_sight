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
        <div className="bg-white rounded-xl p-3 h-auto">
            <div className="text-sm py-3 font-bold">
                <p>New Notification</p>
            </div>

            <div className="flex flex-col gap-2.5 items-center">
                {notificationArray.map((data) => (
                    <div key={data.id} className="flex gap-6 text-[13px] items-center ">
                        <p className="text-white bg-gray-400 p-2 rounded-full"><IoNotifications /></p>
                        <p className="font-semibold">{data.notiText}</p>
                        <p className="bg-stone-400 text-black font-medium p-[6px] rounded-xl">View</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notification_comp