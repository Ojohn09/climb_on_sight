import { useDispatch, useSelector } from "react-redux"
import { selectEvent, toggleModal } from "../../redux/slices/features/eventSlice"
import { Link } from "react-router-dom"
import { IoIosSend } from 'react-icons/io'

function EventModal() {

    const dispatch = useDispatch()
    const selectedEvent = useSelector((state) => state.event.selectedEvent)
    const isModalVisible = useSelector((state) => state.event.isModalVisible)

    const closeModal = () => {
        dispatch(toggleModal());
        dispatch(selectEvent(null));
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
        <div className="fixed inset-0 bg-black bg-opacity-10 z-20">
            <div className="w-screen flex items-end justify-end ">
                <button onClick={closeModal} className=" bg-white text-black  px-2 rounded-full mt-16 mr-16">
                    x
                </button>
            </div>
            <div className="bg-white p-6 rounded-lg absolute top-[65%] left-[72%] w-[50%] transform  -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-start">
                    <div className="w-[60%]">
                        <img src={selectedEvent.image} alt="" className="w-full rounded-xl py-2" />
                        <p className="font-semibold">Climb off</p>
                        <div className="flex flex-col gap-2 text-[10px]">
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
                    <div className="w-[40%]">
                        <p className="text-xs text-end">Registered climbers</p>
                        <div className="grid grid-cols-2">
                            <div style={{ backgroundImage: `url('https://source.unsplash.com/random/300x200?sig=3')` }} className="relative">
                                <div className="flex absolute">
                                    <div>
                                        <p className="text-[10px]">Alex Madov</p>
                                        <Link className="text-[8px]">View profile</Link>
                                    </div>
                                    <div>
                                        <p>
                                            <IoIosSend />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventModal