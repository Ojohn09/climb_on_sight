import { IoNotifications } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux";
import { closeModal2, openModal2 } from "../../redux/slices/features/modalSlice";
import { useState } from "react";


function NotificationModal() {

    const dispatch = useDispatch();//dispatching the action
    const isModalOpen = useSelector((state) => state.modal.isModalOpen)//getting the modalstate from the store
    const [detailedModalOpen, setDetailedModalOpen] = useState(false);
    const handleModalOpen = () => {
        dispatch(openModal2())
    }

    const handleDetailedModalOpen = () => {
        setDetailedModalOpen(true);
        dispatch(closeModal2())
    }

    const notificationArray = [
        { id: 0, notiText: "You have a guide request" },
        { id: 1, notiText: "You have a guide request" },
        { id: 2, notiText: "You have a guide request" },
        { id: 3, notiText: "You have a guide request" },

    ]

    return (
        <div className="bg-white rounded-xl p-3 xl:px-6 h-full overflow-y-auto shadow-sm">
            <div className="xl:my-4 2xl:text-3xl">
                <p>New Notification</p>
            </div>

            <div className="flex flex-col gap-2.5 xl:gap-5 3xl:gap-8 3xl:mt-6 items-center ">
                {notificationArray.map((data) => (
                    <div key={data.id} className="flex gap-2.5 xl:gap-6 2xl:gap-5 3xl:gap-7 4xl:gap-[68px] xs:text-[8px] sm:text-[12px] lg:text-[9px] w-full xl:text-[12.5px] 2xl:text-[15px] 3xl:text-[24px] 4xl:text-3xl items-center ">
                        <p className="text-black bg-gray-200 p-1 md:p-2 rounded-full"><IoNotifications /></p>
                        <p className="">{data.notiText}</p>
                        <p onClick={handleModalOpen} className="bg-[#C69776] text-black p-1.5 px-2 rounded-2xl cursor-pointer">View</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NotificationModal