import { IoNotifications } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux";
import { closeModal2, openModal2 } from "../../redux/slices/features/modalSlice";
import RequestModal from "../../components/modal/requestModal";
import { MdClose } from "react-icons/md";
import { useState } from "react";


function Notification_comp() {

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
        { id: 4, notiText: "You have a guide request" },

    ]

    return (
        <div className="bg-white rounded-xl p-3 xl:px-6 h-full overflow-y-auto shadow-sm">
            <div className="xl:my-4 font-semibold 2xl:text-3xl">
                <p>New Notification</p>
            </div>

            <div className="flex flex-col gap-2 xl:gap-4 3xl:gap-8 3xl:mt-6 items-center ">
                {notificationArray.map((data) => (
                    <div key={data.id} className="flex justify-between xs:text-[10px] sm:text-[12px] lg:text-[11px] w-full xl:text-lg 3xl:text-3xl items-center ">
                        <p className="text-black bg-gray-200 p-1 md:p-2 rounded-full"><IoNotifications /></p>
                        <p className="">{data.notiText}</p>
                        <p onClick={handleModalOpen} className="bg-[#C69776] text-black p-1.5 px-2 rounded-2xl cursor-pointer">View</p>
                        <RequestModal>
                            <div className="flex flex-col gap-2 items-center w-full relative">
                                <p>Notifications</p>
                                <img src="https://picsum.photos/200/300" alt="" className="w-16 h-16 rounded-full" />
                                <p className="text-sm font-semibold">Sarah Martins</p>
                                <p className="text-xs">Ice climber</p>
                                <div className="flex gap-16 items-center">
                                    <button className="px-6 p-2 text-white bg-black rounded-lg ">Accept</button>
                                    <button onClick={() => dispatch(closeModal2())} className="px-6 p-2 text-black border rounded-lg ">Reject</button>
                                </div>
                                <div className="absolute right-0">
                                    <p
                                        onClick={() => dispatch(closeModal2())}
                                        className=' border border-black rounded-full cursor-pointer'><MdClose /></p>
                                </div>
                            </div>

                        </RequestModal>

                        {detailedModalOpen && (
                            <RequestModal>
                                {/* <div className="flex flex-col gap-2 items-center w-full relative">
                                    <img src="https://picsum.photos/200/300" alt="" className="w-12 h-12 rounded-full" />
                                    <p className="text-sm font-semibold">Sarah Martins</p>
                                    <p className="text-xs">Ice climber</p>
                                    <div className="flex gap-16 items-center">
                                        <button onClick={handleDetailedModalOpen} className="px-4 p-2 text-white bg-black rounded-lg ">Accept</button>
                                        <button onClick={() => dispatch(closeModal2())} className="px-4 p-2 text-black border rounded-lg ">Reject</button>
                                    </div>
                                    <div className="absolute right-0">
                                        <p
                                            onClick={() => dispatch(closeModal2())}
                                            className=' border border-black rounded-full cursor-pointer'><MdClose /></p>
                                    </div>
                                </div> */}
                            </RequestModal>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notification_comp