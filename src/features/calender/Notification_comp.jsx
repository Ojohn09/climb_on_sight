import { IoNotifications } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux";
import { openMultiModal } from '../../redux/slices/features/multiModalSlice'
import MultiModal from "../../components/modal/MultiModal";


function Notification_comp() {

    const dispatch = useDispatch();//dispatching the action
    const modals = useSelector(state => state.multiModal.modals); //getting the modalstate from the store




    const notificationArray = [
        { id: 0, notiText: "You have a guide request" },
        { id: 1, notiText: "You have a guide request" },
        { id: 2, notiText: "You have a guide request" },
        { id: 3, notiText: "You have a guide request" },
        { id: 4, notiText: "You have a guide request" },
        { id: 5, notiText: "You have a guide request" },
        { id: 6, notiText: "You have a guide request" },

    ]

    const openRequest = () => {
        dispatch(
            openMultiModal({
                id: 'request-modal',
                title: 'Request',
            })
        );
    };

    return (
        <div className="bg-white rounded-xl p-3 xl:px-6 h-full overflow-y-auto shadow-sm scrollbar-hide flex flex-col">
            <div className="xl:my-4 2xl:text-3xl w-full bg-white h-[15%] p-1">
                <p>New Notification</p>
            </div>

            <div className="scrollbar-hide">
                <div className="flex flex-col gap-2.5 xl:gap-5 3xl:gap-8 mt-2 items-center">
                    {notificationArray.map((data) => (
                        <div key={data.id} className="flex gap-2 xl:gap-6 2xl:gap-4 3xl:gap-[33px] 4xl:gap-[68px] xs:text-[8px] sm:text-[12px] lg:text-[9px] w-full xl:text-[12.5px] 2xl:text-[15px] 3xl:text-[19px] 4xl:text-3xl items-center ">
                            <p className="text-black bg-gray-200 p-1 md:p-2 rounded-full"><IoNotifications /></p>
                            <p className="">{data.notiText}</p>
                            <button onClick={openRequest} className="bg-[#C69776] text-black p-1.5 px-2 rounded-2xl cursor-pointer">View</button>
                        </div>
                    ))}
                </div>
            </div>
            {modals.map(modal => (
                <MultiModal
                    key={modal.id}
                    id={modal.id}
                    title={modal.title}
                />
            ))}
        </div>
    )
}

export default Notification_comp