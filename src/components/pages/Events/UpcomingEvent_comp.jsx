import { useDispatch, useSelector } from "react-redux";
import { selectEvent, toggleModal } from "../../../redux/slices/features/eventSlice";


function UpcomingEvent_comp() {
    const eventData = [
        { id: 0, image: 'https://source.unsplash.com/random/300x200?sig=1', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 1, image: 'https://source.unsplash.com/random/300x200?sig=2', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 2, image: 'https://source.unsplash.com/random/300x200?sig=3', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 3, image: 'https://source.unsplash.com/random/300x200?sig=4', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 4, image: 'https://source.unsplash.com/random/300x200?sig=5', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 5, image: 'https://source.unsplash.com/random/300x200?sig=6', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 6, image: 'https://source.unsplash.com/random/300x200?sig=7', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
        { id: 7, image: 'https://source.unsplash.com/random/300x200?sig=8', amount: '$243', date: 'September 3', time: '02:00 PM', location: '23 victoria avenue' },
    ]

    const dispatch = useDispatch();
    const selectedEvent = useSelector((state) => state.event.selectedEvent);
    const isModalVisible = useSelector((state) => state.event.isModalVisible);

    const handleEventClick = (event) => {
        dispatch(selectEvent(event));
        dispatch(toggleModal());

    };


    return (



        <div>
            <div className='w-full flex gap-10 z-10 overflow-y-hidden'>
                <div className='lg:w-[50%]  '>
                    <div className='h-[60px] p-3 z-10 bg-[#FBF7F4]'>
                        <p className='text-[20px] font-semibold'>All upcoming events</p>
                    </div>
                    <div className=''>
                        <div className="h-[80%]">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-6 p-3 scrollbar-hide overflow-hidden'>
                                {
                                    eventData.map((data) => (
                                        <div
                                            key={data.id}
                                            onClick={() => handleEventClick(data)}
                                            className={`bg-white rounded-xl shadow-xl p-3 w-fit cursor-pointer ${selectedEvent?.id === data.id ? 'lg:z-[25]' : 'z-0'
                                                }`}>
                                            <div>
                                                <img src={data.image} alt="" className='w-full rounded-xl' />

                                            </div>
                                            <div className="flex justify-between w-auto mt-2 font-semibold">
                                                <p>Climb off</p>
                                                <p>{data.amount}</p>
                                            </div>
                                            <div className='flex text-[8px] gap-3 mt-2'>
                                                <div>
                                                    <p className='text-gray-400'>Date</p>
                                                    <p>{data.date}</p>
                                                </div>
                                                <div>
                                                    <p className='text-gray-400'>Time</p>
                                                    <p>{data.time}</p>
                                                </div>
                                                <div>
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
                    <div className='fixed p-5'>
                        <p>Selected events</p>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default UpcomingEvent_comp