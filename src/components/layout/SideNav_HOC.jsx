import { Link } from "react-router-dom"
import { CalendarDaysIcon, ChatBubbleLeftIcon, HomeIcon, MegaphoneIcon, WalletIcon } from "../../utils/icons"
import { BiSolidDoorOpen } from "react-icons/bi"


function SideNav_HOC() {
    return (
        <div className="">
            <div className="bg-red-100 p-4  fixed border border-r min-h-[90%] menu flex flex-col justify-between gap-[150px] z-50">
                <div>
                    <Link to="/dashboard" className="font-bold text-xs ">CBO</Link>
                </div>


                <div className="flex flex-col gap-4 text-gray-400">
                    <Link to='/dashboard'>
                        <div className="menu-icon flex items-center gap-2">
                            <HomeIcon />
                            <p className="menu-text text-black font-semibold">Home</p>
                        </div>
                    </Link>
                    <Link to=''>
                        <div className="menu-icon flex items-center gap-2">
                            <MegaphoneIcon />
                            <p className="menu-text flex justify-between gap-1">
                                <span className="text-black font-semibold">Upcoming</span>
                                <span className="text-black font-semibold">Events</span>
                            </p>
                        </div>
                    </Link>
                    <Link to=''>
                        <div className=" menu-icon flex items-center gap-2">
                            <CalendarDaysIcon />
                            <p className="menu-text text-black font-semibold">Calender</p>
                        </div>
                    </Link>
                    <Link to=''>
                        <div className="menu-icon flex items-center gap-2">
                            <WalletIcon />
                            <p className="menu-text text-black font-semibold">Payout</p> </div>
                    </Link>
                    <Link to=''>
                        <div className="menu-icon flex items-center gap-2">
                            <ChatBubbleLeftIcon />
                            <p className="menu-text text-black font-semibold">Chat</p> </div>
                    </Link>
                </div>

                <div>
                    <Link to=''>
                        <div className="menu-icon flex items-center gap-2 text-base ">
                            <p className="p-1 bg-black text-white rounded-full"><BiSolidDoorOpen /></p>
                            <p className="menu-text font-semibold">Logout</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideNav_HOC