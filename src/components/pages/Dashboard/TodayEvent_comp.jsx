import React from 'react'
import { BiPlus } from 'react-icons/bi';

function TodayEvent_comp() {
    const today = new Date();
    // Options for formatting the date
    const options = { day: 'numeric', month: 'long', year: 'numeric', };
    const formattedDate = today.toLocaleDateString(undefined, options);

    // const eventData = [
    //     { name: }
    // ]

    return (
        <div className='bg-white h-[80vh] rounded-xl'>
            <div className='flex items-center justify-between p-4'>
                <div className='text-xs'>
                    <p className='font-semibold'>Todays events</p>
                    <p>{formattedDate}</p>
                </div>

                <div className='text-lg p-1 bg-black text-white rounded-full'>
                    <p><BiPlus /> </p>
                </div>
            </div>

            <div className='p-4'>
                <div className='flex items-center justify-between'>
                    <div className="w-28 h-11 relative mt-1">
                        <img className="w-6 h-8 left-0 top-0 absolute rounded-full border border-white" src="https://via.placeholder.com/45x45" />
                        <img className="w-6 h-8 left-[20px] top-0 absolute rounded-full border border-white" src="https://via.placeholder.com/45x45" />
                        <img className="w-6 h-8 left-[40px] top-0 absolute rounded-full border border-white" src="https://via.placeholder.com/45x45" />
                        <img className="w-6 h-8 left-[60px] top-0 absolute rounded-full border border-white" src="https://via.placeholder.com/45x45" />
                        <img className="w-6 h-8 left-[80px] top-0 absolute rounded-full border border-white" src="https://via.placeholder.com/45x45" />
                    </div>

                    <div className='text-[10px]'>
                        <p className='font-bold'>All climbers registered</p>
                        <p className='text-gray-700
                        '>432</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodayEvent_comp