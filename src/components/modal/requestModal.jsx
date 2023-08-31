import { MdClose } from "react-icons/md";
import { closeMultiModal } from "../../redux/slices/features/multiModalSlice"
import { useDispatch } from "react-redux"
import { useState } from "react";
import { BiX } from "react-icons/bi";

function RequestModal({ id }) {

    const [accept, setAccept] = useState(false)
    const dispatch = useDispatch();

    const handleAccept = () => {
        // Perform withdrawal logic here
        // For demonstration purposes, let's just toggle the withdrawn state
        setAccept(!accept);
    };

    const handleClose = () => {
        dispatch(closeMultiModal(id));
    };


    return (
        <div className="bg-white min-w-[280px] 3xl:w-[400px] mx-auto rounded-3xl p-5 3xl:p-8 relative">
            <p
                onClick={handleClose}
                className='absolute right-6 top-8 border border-black rounded-full cursor-pointer text-[20px] 3xl:text-[32px]'><BiX />
            </p>
            <div className="text-center w-full mb-4">
                <p className="3xl:text-[32px]">Notifications</p>
            </div>
            <div className="flex flex-col items-center text-xs">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="" className="w-16 h-16 3xl:w-28 3xl:h-28 rounded-full object-cover object-center" />

                {accept ? (
                    <>
                        <div className="flex flex-col items-center text-center">
                            <p className="font-medium text-base w-[70%]">Sarah martins has been added to your climber list</p>
                            <button onClick={handleClose} className="w-[70%] p-3 rounded-xl bg-black text-white border mt-2">View profile</button>

                        </div>
                    </>
                ) : (
                    <>
                        <p className="font-medium my-1">Sara Martins</p>

                        <p className="text-gray-500">Ice climber</p>

                        <div className="flex gap-4 items-center mt-2 w-full 3xl:text-xl">
                            <button onClick={handleAccept} className="p-3 w-full rounded-xl text-white bg-black">Accept</button>
                            <button onClick={handleClose} className="p-3 w-full rounded-xl bg-white border ">Cancel</button>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default RequestModal