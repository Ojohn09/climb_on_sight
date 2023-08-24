import { useDispatch, useSelector } from "react-redux";
import { selectEvent, toggleModal } from "../../../redux/slices/features/eventSlice";


function UpcomingEvent_comp() {
    const eventData = [
        { id: 0, image: 'https://plus.unsplash.com/premium_photo-1682308191763-2813d4a2e746?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 1, image: 'https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 2, image: 'https://images.unsplash.com/photo-1440186347098-386b7459ad6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 3, image: 'https://images.unsplash.com/photo-1458442310124-dde6edb43d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 4, image: 'https://plus.unsplash.com/premium_photo-1682308191763-2813d4a2e746?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 5, image: 'https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 6, image: 'https://images.unsplash.com/photo-1440186347098-386b7459ad6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 7, image: 'https://images.unsplash.com/photo-1458442310124-dde6edb43d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
    ]

    const dispatch = useDispatch();
    const selectedEvent = useSelector((state) => state.event.selectedEvent);
    const isModalVisible = useSelector((state) => state.event.isModalVisible);

    const handleEventClick = (event) => {
        dispatch(selectEvent(event));
        dispatch(toggleModal());

    };


    return (



        <div className="scrollbar-hide">
            <div className='w-full flex gap-10 z-10 h-full scrollbar-hide'>
                <div className='lg:w-[50%] overflow-hidden scrollbar-hide'>
                    <div className=' p-3 z-10 bg-[#FBF7F4] fixed w-[45%] 3xl:w-[47%] scrollbar-hide'>
                        <p className='text-[20px] 2xl:text-4xl h-full overflow-hidden'>All upcoming trips</p>
                    </div>
                    <div className=''>
                        <div className="h-full">
                            <div className='grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-6 p-3 mt-20 scrollbar-hide overflow-hidden'>
                                {
                                    eventData.map((data) => (
                                        <div
                                            key={data.id}
                                            onClick={() => handleEventClick(data)}
                                            className={`bg-white rounded-xl shadow-xl p-3 w-fit cursor-pointer ${selectedEvent?.id === data.id ? 'lg:z-[25]' : 'z-0'
                                                }`}>
                                            <div>
                                                <img src={data.image} alt="" className='w-full rounded-xl object-cover object-center' />

                                            </div>
                                            <div className="flex justify-between w-auto mt-2 font-semibold 3xl:text-[28px]">
                                                <p>Climb off</p>
                                                <p>{data.amount}</p>
                                            </div>
                                            <div className='flex text-[8px] gap-3 mt-2 xl:text-xs 3xl:text-[12px]'>
                                                <div className="flex flex-col gap-1">
                                                    <p className='text-gray-400'>Date</p>
                                                    <p>{data.date}</p>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <p className='text-gray-400'>Time</p>
                                                    <p>{data.time}</p>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <p className='text-gray-400'>Location</p>
                                                    <p>{data.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%] lg:block hidden relative border-l'>
                    <div className='fixed p-5 text-xl 3xl:text-4xl '>
                        <p className="overflow-hidden">Selected events</p>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default UpcomingEvent_comp