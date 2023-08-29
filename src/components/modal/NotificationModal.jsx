import { IoNotifications } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux";
import { closeModal2, openModal2 } from "../../redux/slices/features/modalSlice";
import { useState } from "react";
import { closeMultiModal } from '../../redux/slices/features/multiModalSlice';
import { MdClose } from 'react-icons/md';



function NotificationModal({ id }) {

    const dispatch = useDispatch();//dispatching the action

    const handleClose = () => {
        dispatch(closeMultiModal(id));
    };


    const notificationArray = [
        { id: 0, notiText: "You have a guide request" },
        { id: 1, notiText: "You have a guide request" },
        { id: 2, notiText: "You have a guide request" },
        { id: 3, notiText: "You have a guide request" },
        { id: 4, notiText: "You have a guide request" },
        { id: 5, notiText: "You have a guide request" },
        { id: 6, notiText: "You have a guide request" },
        { id: 7, notiText: "You have a guide request" },
        { id: 8, notiText: "You have a guide request" },
        { id: 9, notiText: "You have a guide request" },
    ]

    return (
        <div className='min-w-[250px] p-5 bg-white absolute top-16 right-[90px] 3xl:top-28 rounded-xl text-xs 2xl:text-sm 4xl:text-lg '>
            <div className="bg-white rounded-xl h-full overflow-y-auto shadow-sm">
                <div className='flex justify-between py-1 items-center mb-2'>
                    <p className=''>Notification</p>
                    <p
                        onClick={handleClose}
                        className=' border border-black rounded-full cursor-pointer'><MdClose /></p>
                </div>

                <div className="flex flex-col gap-2 items-center mt-2">
                    {notificationArray.map((data) => (
                        <div key={data.id} className="flex gap-3 items-center ">
                            <p className="text-black bg-gray-200 p-1 md:p-2 rounded-full"><IoNotifications /></p>
                            <p className="">{data.notiText}</p>
                            <p className="bg-[#C69776] text-black p-1.5 px-2 rounded-2xl cursor-pointer">View</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NotificationModal