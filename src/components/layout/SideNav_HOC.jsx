import { Link } from "react-router-dom"
import { CalendarDaysIcon, ChatBubbleLeftIcon, HomeIcon, MegaphoneIcon, WalletIcon } from "../../utils/icons"
import { BiSolidDoorOpen } from "react-icons/bi"
import { logout } from "../../redux/slices/auth/loginSlice"


function SideNav_HOC() {




    return (
        <div className=" p-3">
            <div className="bg-[#F4E8DF] h-[90%] fixed border border-r menu flex flex-col items-start justify-between gap-[150px] z-50 p-3 w-[50px]">
                <div>
                    <Link to="/dashboard" className="text-[10px] font-face-mr ">CBO</Link>
                </div>


                <div className="flex flex-col gap-4 2xl:gap-10 2xl:text-xl text-gray-400">
                    <Link to='/dashboard'>
                        <div className="menu-icon flex items-center gap-2">
                            <HomeIcon />
                            <p className="menu-text text-black font-semibold">Home</p>
                        </div>
                    </Link>
                    <Link to='/events'>
                        <div className="menu-icon flex items-center gap-2">
                            <MegaphoneIcon />
                            <p className="menu-text flex justify-between gap-1">
                                <span className="text-black font-semibold">Upcoming</span>
                                <span className="text-black font-semibold">Events</span>
                            </p>
                        </div>
                    </Link>
                    <Link to='/calendar'>
                        <div className=" menu-icon flex items-center gap-2">
                            <CalendarDaysIcon />
                            <p className="menu-text text-black font-semibold">Calender</p>
                        </div>
                    </Link>
                    <Link to='/payout'>
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
                            <p className="p-1 bg-black text-white rounded-full text-[10px]"><BiSolidDoorOpen /></p>
                            <p className="menu-text font-semibold">Logout</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideNav_HOC