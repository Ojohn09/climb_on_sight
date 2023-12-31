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
        { id: 0, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', name: 'Alexander Petrov' },
        { id: 1, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', name: 'Detroov Amir' },
        { id: 2, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', name: 'Felix Navidad' },
        { id: 3, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', name: 'Peter Jessy' },
        { id: 4, image: 'https://source.unsplash.com/random/300x200?sig=5', name: 'Oslov Remmy' },
        {
            id: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', name: 'Dennis Adam'
        },
        { id: 6, image: 'https://source.unsplash.com/random/300x200?sig=7', name: 'Lucy Chandlar' },
        { id: 7, image: 'https://source.unsplash.com/random/300x200?sig=8', name: 'Alex Demir' },
        { id: 8, image: 'https://source.unsplash.com/random/300x200?sig=9', name: 'Antetokumpo Giannis' },
        { id: 9, image: 'https://source.unsplash.com/random/300x200?sig=10', name: 'Lebron James' },
    ]

    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 h-screen z-10">
            <div className="max-w-screen mx-auto flex items-end justify-end mt-5 2xl:mt-5 3xl:mt-24">
                <button onClick={closeModal} className=" bg-white text-black 3xl:text-3xl px-2 rounded-full mt-16 mr-6">
                    x
                </button>
            </div>
            <div className="w-[100%] flex items-end justify-end">
                <div className="bg-white p-2 3xl:p-6 rounded-xl 3xl:rounded-3xl  mr-5 mt-6 xl:mt-12 2xl:mt-12 3xl:mt-14 lg:w-[50%] 2xl:w-[53%] 3xl:w-[55%]">
                    <div className="flex flex-col sm:flex-row   items-start justify-between">
                        <div className="lg:w-[50%]">
                            <img src={selectedEvent.image} alt="" className="w-[100%] rounded-2xl 3xl:rounded-2xl object-cover object-center" />
                            <p className="font-semibold 2xl:text-xl 3xl:text-2xl">Climb off</p>
                            <div className="flex flex-col text-[8px] xl:text-[12px] 2xl:text-sm 3xl:text-base font-medium mt-2">

                                <div className="text-justify">
                                    <p className="text-gray-400 text-[9px] xl:text-[13px] 2xl:text-[15px]">Event details</p>
                                    <p>
                                        It sportsman earnestly ye preserved an on. Moment led family sooner cannot her window pulled any.
                                        Or raillery if improved landlord to speaking hastened differed he. Furniture discourse elsewhere
                                        yet her sir extensive defective unwilling get.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 3xl:gap-4">
                                    <div>
                                        <p className="text-gray-400 text-[9px] xl:text-[13px] 2xl:text-[15px]">Event pricing</p>
                                        <p>{selectedEvent.amount}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-[9px] xl:text-[13px] 2xl:text-[15px]"> Date </p>
                                        <p>{selectedEvent.date}</p>
                                    </div>
                                    <div><p className="text-gray-400 text-[9px] xl:text-[13px] 2xl:text-[15px]">Event location</p>
                                        <p>{selectedEvent.location}</p></div>
                                    <div>
                                        <p className="text-gray-400 text-[9px] xl:text-[13px] 2xl:text-[15px]">Time</p>
                                        <p>{selectedEvent.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-[40%]">
                            <p className="text-xs text-end 2xl:text-lg">Registered climbers</p>
                            <div className="grid grid-cols-2 gap-3 scrollbar-hide overflow-y-auto h-[64vh] xl:h-[68vh] mt-4">
                                {climbers.map((data) => (
                                    <div key={data.id} style={{ backgroundImage: `url(${data.image})` }} className="w-[100%] xl:h-30 3xl:h-56 relative h-28 rounded-xl bg-cover bg-center">
                                        <div className="flex justify-between items-center absolute bottom-0 bg-gray-300 bg-opacity-60 backdrop-blur w-full rounded-xl p-2">
                                            <div>
                                                <p className="text-[7px] 3xl:text-base">{data.name}</p>
                                                <p className="text-[7px] 3xl:text-sm">
                                                    <Link>View profile </Link>
                                                </p>
                                            </div>
                                            <div className="text-white bg-black rounded-full p-1">
                                                <p className="text-[8px] xl:text-[12px] 3xl:text-base">
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