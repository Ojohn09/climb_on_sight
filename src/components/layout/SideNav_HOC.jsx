import { Link } from "react-router-dom"
import { CalendarDaysIcon, ChatBubbleLeftIcon, HomeIcon, MegaphoneIcon, WalletIcon } from "../../utils/icons"
import { BiSolidDoorOpen } from "react-icons/bi"
import { logout } from "../../redux/slices/auth/loginSlice"


function SideNav_HOC() {




    return (
        <div className=" p-4">
            <div className="bg-[#F4E8DF] h-[90%] fixed border border-r menu flex flex-col items-start justify-between z-40 p-3 w-[50px] 3xl:w-[70px] 3xl:px-5">
                <div>
                    <Link to="/dashboard" className="text-[10px] font-face-mr ">CO</Link>
                </div>


                <div className="flex flex-col gap-7 2xl:gap-10 2xl:text-xl text-gray-300">
                    <Link to='/dashboard'>
                        <div className="menu-icon flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 3xl:h-7" viewBox="0 0 23 23" fill="none">
                                <g opacity="">
                                    <path d="M0.694231 18.3483C-0.27637 13.9128 -0.0139369 9.97208 0.209001 8.49172C0.368209 7.43455 5.99379 3.11189 9.19706 0.726917C10.4937 -0.238451 12.2568 -0.242816 13.5575 0.716966C16.7877 3.10048 22.4684 7.43531 22.5383 8.49172C22.5405 8.52504 22.5428 8.55962 22.5452 8.59543C22.6486 10.147 22.9061 14.0129 22.0526 18.3483C21.5675 20.8124 20.1295 21.9248 17.1984 22.2909C16.9894 22.317 16.7809 22.3417 16.5729 22.3651C16.295 22.3963 16.0533 22.1773 16.0533 21.8971V15.2167C16.0533 13.6487 14.785 12.3776 13.2204 12.3776L9.44313 12.3776C7.87854 12.3776 6.61019 13.6487 6.61019 15.2167L6.61019 21.8891C6.61019 22.1699 6.36756 22.3891 6.08923 22.3568C5.90917 22.3359 5.72889 22.3139 5.54836 22.2909C2.61826 21.9172 1.22959 20.7948 0.694231 18.3483Z" fill="currentColor" />
                                    <path d="M8.49881 22.1291C8.49881 22.3789 8.69246 22.5859 8.9413 22.5992C10.5314 22.6844 12.1174 22.685 13.7215 22.6009C13.9706 22.5879 14.1647 22.3807 14.1647 22.1307V15.2167C14.1647 14.694 13.7419 14.2703 13.2204 14.2703L9.44313 14.2703C8.9216 14.2703 8.49881 14.694 8.49881 15.2167L8.49881 22.1291Z" fill="currentColor" />
                                </g>
                            </svg>
                            <p className="menu-text text-black font-semibold">Home</p>
                        </div>
                    </Link>
                    <Link to='/events'>
                        <div className="menu-icon flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 3xl:h-7 " viewBox="0 0 20 19" fill="none">
                                <g opacity="">
                                    <path d="M3.56791 4.59094C1.59741 4.59094 0 6.22312 0 8.23653C0 10.1275 1.40898 11.6821 3.21274 11.8643L5.11754 17.9647C5.30933 18.5789 5.87987 18.9974 6.52549 18.9974C7.33984 18.9974 8 18.3396 8 17.5282V12.1497C9.79764 12.5974 11.5004 13.5389 13.1446 14.4479C13.7227 14.7676 14.2937 15.0833 14.8589 15.372C18.0311 16.9926 18.8863 13.7838 19.1161 11.0131C19.4231 10.9919 19.6215 10.9366 19.7657 10.7929C20 10.5595 20 10.1837 20 9.43218V7.04087C20 6.28936 20 5.9136 19.7657 5.68014C19.6215 5.53644 19.4231 5.48119 19.1161 5.45994C18.8863 2.68923 18.0311 -0.519591 14.8589 1.10104C14.2937 1.3898 13.7228 1.70545 13.1446 2.02511C11.4655 2.95351 9.7252 3.91572 7.88519 4.35124C7.12485 4.5312 6.74468 4.62118 6.57234 4.83847C6.4 5.05575 6.4 5.39541 6.4 6.07474V7.04088C6.4 7.48111 6.04183 7.83798 5.6 7.83798C5.15817 7.83798 4.8 7.48111 4.8 7.04088V5.81857C4.8 5.41712 4.8 5.21639 4.72909 5.05996C4.64893 4.88311 4.50677 4.74146 4.32928 4.66159C4.17227 4.59094 3.97082 4.59094 3.56791 4.59094Z" fill="currentColor" />
                                </g>
                            </svg>
                            <p className="menu-text flex justify-between gap-1">
                                <span className="text-black font-semibold">Upcoming</span>
                                <span className="text-black font-semibold">Events</span>
                            </p>
                        </div>
                    </Link>
                    <Link to='/calendar'>
                        <div className=" menu-icon flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 3xl:h-7" viewBox="0 0 23 25" fill="none">
                                <g opacity="">
                                    <path d="M14.1647 0.944313C14.1647 0.422784 14.5875 0 15.109 0C15.6305 0 16.0533 0.422784 16.0533 0.944313V4.72157C16.0533 5.2431 15.6305 5.66588 15.109 5.66588C14.5875 5.66588 14.1647 5.2431 14.1647 4.72157V0.944313Z" fill="currentColor" />
                                    <path d="M13.2204 1.92115C12.6269 1.89882 11.998 1.88863 11.3318 1.88863C10.6655 1.88863 10.0366 1.89882 9.44313 1.92115V4.72157C9.44313 5.76463 8.59757 6.61019 7.55451 6.61019C6.51145 6.61019 5.66588 5.76463 5.66588 4.72157V2.33779C2.35351 3.06214 0.85691 4.78958 0.290906 8.40527C0.204405 8.95785 0.64442 9.44313 1.20373 9.44313H21.4598C22.0191 9.44313 22.4591 8.95785 22.3726 8.40527C21.8066 4.78958 20.31 3.06214 16.9976 2.33779V4.72157C16.9976 5.76463 16.1521 6.61019 15.109 6.61019C14.066 6.61019 13.2204 5.76463 13.2204 4.72157V1.92115Z" fill="currentColor" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3318 24.5521C2.00006 24.5521 0 22.5521 0 13.2204C0 12.8845 0.00259191 12.558 0.00802447 12.2408C0.0167192 11.7332 0.434262 11.3318 0.941975 11.3318H21.7215C22.2293 11.3318 22.6468 11.7332 22.6555 12.2408C22.6609 12.558 22.6635 12.8845 22.6635 13.2204C22.6635 22.5521 20.6635 24.5521 11.3318 24.5521ZM4.72157 15.109C4.72157 14.5875 5.14435 14.1647 5.66588 14.1647H8.49882C9.02035 14.1647 9.44313 14.5875 9.44313 15.109C9.44313 15.6305 9.02035 16.0533 8.49882 16.0533H5.66588C5.14435 16.0533 4.72157 15.6305 4.72157 15.109ZM5.66588 17.942C5.14435 17.942 4.72157 18.3647 4.72157 18.8863C4.72157 19.4078 5.14435 19.8306 5.66588 19.8306H8.49882C9.02035 19.8306 9.44313 19.4078 9.44313 18.8863C9.44313 18.3647 9.02035 17.942 8.49882 17.942H5.66588ZM13.2204 15.109C13.2204 14.5875 13.6432 14.1647 14.1647 14.1647H16.9976C17.5192 14.1647 17.942 14.5875 17.942 15.109C17.942 15.6305 17.5192 16.0533 16.9976 16.0533H14.1647C13.6432 16.0533 13.2204 15.6305 13.2204 15.109ZM14.1647 17.942C13.6432 17.942 13.2204 18.3647 13.2204 18.8863C13.2204 19.4078 13.6432 19.8306 14.1647 19.8306H16.9976C17.5192 19.8306 17.942 19.4078 17.942 18.8863C17.942 18.3647 17.5192 17.942 16.9976 17.942H14.1647Z" fill="currentColor" />
                                    <path d="M6.61019 0.944313C6.61019 0.422784 7.03298 0 7.55451 0C8.07604 0 8.49882 0.422784 8.49882 0.944313V4.72157C8.49882 5.2431 8.07604 5.66588 7.55451 5.66588C7.03298 5.66588 6.61019 5.2431 6.61019 4.72157V0.944313Z" fill="currentColor" />
                                </g>
                            </svg>
                            <p className="menu-text text-black font-semibold">Calender</p>
                        </div>
                    </Link>
                    <Link to='/payout'>
                        <div className="menu-icon flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 3xl:h-7" viewBox="0 0 23 24" fill="none">
                                <g opacity="">
                                    <path d="M0 11.8825C0 21.2142 2.00006 23.2143 11.3318 23.2143C18.6602 23.2143 21.4669 21.9808 22.3343 16.9315C22.3636 16.7607 22.2311 16.6041 22.0578 16.6041H16.0533C15.4333 16.6041 14.8193 16.482 14.2465 16.2447C13.6736 16.0074 13.1531 15.6596 12.7147 15.2212C12.2762 14.7827 11.9285 14.2622 11.6912 13.6894C11.4539 13.1165 11.3318 12.5026 11.3318 11.8825C11.3318 11.2625 11.4539 10.6485 11.6912 10.0757C11.9285 9.50285 12.2762 8.98234 12.7147 8.5439C13.1531 8.10546 13.6736 7.75768 14.2465 7.52039C14.8193 7.28311 15.4333 7.16097 16.0533 7.16097H22.0578C22.2311 7.16097 22.3636 7.00441 22.3343 6.83363C21.4669 1.78429 18.6602 0.550781 11.3318 0.550781C2.00006 0.550781 0 2.55084 0 11.8825Z" fill="currentColor" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22.6635 11.8825C22.6635 12.8091 22.6438 13.6634 22.5991 14.4506C22.5907 14.5997 22.4669 14.7155 22.3176 14.7155H16.0533C15.6813 14.7155 15.3129 14.6422 14.9692 14.4999C14.6255 14.3574 14.3132 14.1488 14.0501 13.8857C13.7871 13.6227 13.5784 13.3104 13.436 12.9667C13.2936 12.6229 13.2204 12.2546 13.2204 11.8825C13.2204 11.5105 13.2936 11.1421 13.436 10.7984C13.5784 10.4547 13.7871 10.1424 14.0501 9.87933C14.3132 9.61628 14.6255 9.40764 14.9692 9.26522C15.3129 9.12286 15.6813 9.0496 16.0533 9.0496H22.3176C22.4669 9.0496 22.5907 9.16542 22.5991 9.31448C22.6438 10.1017 22.6635 10.956 22.6635 11.8825ZM16.9976 10.9382C16.4761 10.9382 16.0533 11.361 16.0533 11.8825C16.0533 12.4041 16.4761 12.8269 16.9976 12.8269H18.8863C19.4078 12.8269 19.8306 12.4041 19.8306 11.8825C19.8306 11.361 19.4078 10.9382 18.8863 10.9382H16.9976Z" fill="currentColor" />
                                </g>
                            </svg>
                            <p className="menu-text text-black font-semibold">Payout</p> </div>
                    </Link>
                    <Link to='/chat'>
                        <div className="menu-icon flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 3xl:h-7" viewBox="0 0 23 23" fill="none">
                                <g opacity="">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22.6635 10.2836C22.6635 1.88975 20.6635 0.210938 11.3318 0.210938C2.00006 0.210938 0 1.98877 0 10.2836C0 15.6323 0.944544 19.0972 5.19395 19.0972C7.46489 19.0972 8.14044 20.176 8.76949 21.1805C9.31753 22.0556 9.83029 22.8744 11.332 22.8745C12.8338 22.8745 13.3465 22.0557 13.8946 21.1805C14.5236 20.176 15.1991 19.0972 17.47 19.0972C21.7194 19.0972 22.6635 15.7397 22.6635 10.2836ZM7.55451 11.5427C8.07604 11.5427 8.49882 11.1199 8.49882 10.5984C8.49882 10.0769 8.07604 9.65407 7.55451 9.65407C7.03298 9.65407 6.61019 10.0769 6.61019 10.5984C6.61019 11.1199 7.03298 11.5427 7.55451 11.5427ZM12.2761 10.5984C12.2761 11.1199 11.8533 11.5427 11.3318 11.5427C10.8102 11.5427 10.3874 11.1199 10.3874 10.5984C10.3874 10.0769 10.8102 9.65407 11.3318 9.65407C11.8533 9.65407 12.2761 10.0769 12.2761 10.5984ZM15.109 11.5427C15.6305 11.5427 16.0533 11.1199 16.0533 10.5984C16.0533 10.0769 15.6305 9.65407 15.109 9.65407C14.5875 9.65407 14.1647 10.0769 14.1647 10.5984C14.1647 11.1199 14.5875 11.5427 15.109 11.5427Z" fill="currentColor" />
                                </g>
                            </svg>
                            <p className="menu-text text-black font-semibold">Chat</p> </div>
                    </Link>
                </div>

                <div>
                    <Link to=''>
                        <div className="menu-icon flex items-center gap-2 text-base ">
                            <p className="p-1 bg-black text-white rounded-full text-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 3xl:h-7" viewBox="0 0 17 19" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.168945 9.46688C0.168945 16.0939 0.80205 16.2861 5.61945 17.7483C5.95501 17.8501 6.31122 17.9582 6.68859 18.075C9.86595 19.0583 11.519 18.5066 12.3641 16.6393C13.2584 16.6314 14.0165 16.5756 14.6313 16.3948C15.3453 16.1848 15.89 15.7986 16.2447 15.1508C16.5713 14.5541 16.7026 13.7929 16.7662 12.9032C16.8303 12.0075 16.8303 10.8774 16.8303 9.48906V9.4346C16.8303 8.04629 16.8303 6.91679 16.7662 6.02205C16.7025 5.13333 16.5713 4.37293 16.2443 3.77721C15.8891 3.13017 15.3438 2.74579 14.6302 2.53711C14.0158 2.35743 13.258 2.3023 12.3641 2.29447C11.519 0.427161 9.86594 -0.124469 6.68859 0.858756C6.31115 0.975555 5.95521 1.08359 5.61959 1.18545C0.802062 2.64762 0.168945 2.83978 0.168945 9.46688ZM14.2187 15.0195C13.8829 15.1183 13.4341 15.1732 12.8172 15.1948C13.1297 13.7268 13.2082 11.8016 13.2082 9.46688C13.2082 7.13208 13.1296 5.20691 12.8172 3.73891C13.4345 3.76029 13.8836 3.81473 14.2198 3.91305C14.6268 4.03206 14.8285 4.20218 14.9714 4.4624C15.1424 4.77394 15.2601 5.27356 15.321 6.12353C15.381 6.96163 15.3814 8.04065 15.3814 9.46184C15.3814 10.883 15.381 11.9627 15.321 12.8018C15.2601 13.6527 15.1424 14.154 14.971 14.4671C14.8276 14.729 14.6253 14.8999 14.2187 15.0195ZM9.58621 10.1842C9.18613 10.1842 8.8618 9.86307 8.8618 9.46689C8.8618 9.07071 9.18613 8.74955 9.58621 8.74955C9.98629 8.74955 10.3106 9.07071 10.3106 9.46689C10.3106 9.86307 9.98629 10.1842 9.58621 10.1842Z" fill="white" />
                                </svg>
                            </p>
                            <p className="menu-text font-semibold">Logout</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideNav_HOC