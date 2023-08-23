import { useDispatch, useSelector } from "react-redux"
import { selectEvent, setClickedEvent, toggleModal } from "../../redux/slices/features/eventSlice"
import { Link } from "react-router-dom"
import { IoIosSend } from 'react-icons/io'

function EventModal() {

    const dispatch = useDispatch()
    const selectedEvent = useSelector((state) => state.event.selectedEvent)
    const isModalVisible = useSelector((state) => state.event.isModalVisible)

    const closeModal = (event) => {
        dispatch(toggleModal());
        dispatch(selectEvent(null));
        dispatch(setClickedEvent(event));
    };

    if (!isModalVisible || !selectedEvent) {
        return null;
    }

    const climbers = [
        { id: 0, image: 'https://source.unsplash.com/random/300x200?sig=1', name: 'Alexander Petrov' },
        { id: 1, image: 'https://source.unsplash.com/random/300x200?sig=2', name: 'Detroov Amir' },
        { id: 2, image: 'https://source.unsplash.com/random/300x200?sig=3', name: 'Felix Navidad' },
        { id: 3, image: 'https://source.unsplash.com/random/300x200?sig=4', name: 'Peter Jessy' },
        { id: 4, image: 'https://source.unsplash.com/random/300x200?sig=5', name: 'Oslov Remmy' },
        { id: 5, image: 'https://source.unsplash.com/random/300x200?sig=6', name: 'Dennis Adam' },
        { id: 6, image: 'https://source.unsplash.com/random/300x200?sig=7', name: 'Lucy Chandlar' },
        { id: 7, image: 'https://source.unsplash.com/random/300x200?sig=8', name: 'Alex Demir' },
        { id: 8, image: 'https://source.unsplash.com/random/300x200?sig=9', name: 'Antetokumpo Giannis' },
        { id: 9, image: 'https://source.unsplash.com/random/300x200?sig=10', name: 'Lebron James' },
    ]

    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 h-screen z-10">
            <div className="max-w-screen mx-auto flex items-end justify-end mt-16">
                <button onClick={closeModal} className=" bg-white text-black  px-2 rounded-full mt-16 mr-6">
                    x
                </button>
            </div>
            <div className="w-[100%] flex items-end justify-end">
                <div className="bg-white p-3 rounded-xl mr-3 mt-8 w-[40%]">
                    <div className="flex flex-col sm:flex-row  items-start justify-between gap-5">
                        <div className="sm:w-[50%]">
                            <img src={selectedEvent.image} alt="" className="w-full rounded-2xl py-2" />
                            <p className="font-semibold">Climb off</p>
                            <div className="flex flex-col text-[10px] xl:text-[12px] gap-1 font-medium">
                                <p className="text-xs text-gray-500">Event details</p>
                                <p>
                                    It sportsman earnestly ye preserved an on. Moment led family sooner cannot her window pulled any.
                                    Or raillery if improved landlord to speaking hastened differed he. Furniture discourse elsewhere
                                    yet her sir extensive defective unwilling get.
                                </p>
                                <p className="text-gray-500">Event pricing</p>
                                <p>{selectedEvent.amount}</p>
                                <p className="text-gray-500"> Date </p>
                                <p>{selectedEvent.date}</p>
                                <p className="text-gray-500">Event location</p>
                                <p>{selectedEvent.location}</p>
                                <p className="text-gray-500">Time</p>
                                <p>{selectedEvent.time}</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-[50%]">
                            <p className="text-xs text-end">Registered climbers</p>
                            <div className="grid grid-cols-2 gap-3 scrollbar-hide overflow-y-auto h-[64vh] xl:h-[68vh] mt-4">
                                {climbers.map((data) => (
                                    <div key={data.id} style={{ backgroundImage: `url(${data.image})` }} className="w-[100%] xl:h-36 relative h-28 rounded-xl">
                                        <div className="flex justify-between items-center absolute bottom-0 bg-gray-300 bg-opacity-60 backdrop-blur w-full rounded-xl p-2">
                                            <div>
                                                <p className="text-[9px]">{data.name}</p>
                                                <p className="text-[7px]">
                                                    <Link>View profile </Link>
                                                </p>
                                            </div>
                                            <div className="text-white bg-black rounded-full p-1">
                                                <p className="text-[10px] xl:text-[12px]">
                                                    <IoIosSend />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventModal