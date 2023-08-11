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
        <div className='bg-white lg:h-[100vh] xl:h-full rounded-xl p-4 flex flex-col gap-7'>
            <div className='flex items-center justify-between'>
                <div className='text-xs'>
                    <p className='font-semibold'>Todays events</p>
                    <p>{formattedDate}</p>
                </div>

                <div className='text-lg p-1 bg-black text-white rounded-full'>
                    <p><BiPlus /> </p>
                </div>
            </div>

            <div className='w-[60%] xl:w-[50%] lg:text-[13px] xl:text-lg font-bold'>
                <p>
                    All booked trips coming up this week
                </p>
            </div>

            <div className=''>
                <div className='flex items-center justify-between'>
                    <div className="w-28 h-11 relative mt-1">
                        <img className="w-8 h-8 left-0 top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                        <img className="w-8 h-8 left-[20px] top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                        <img className="w-8 h-8 left-[40px] top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                        <img className="w-8 h-8 left-[60px] top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                        <img className="w-8 h-8 left-[80px] top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                    </div>

                    <div className='text-[8px] sm:text-[10px] xl:text-xs border-l pl-2'>
                        <p className='font-bold'>All climbers registered</p>
                        <p className='text-gray-700
                        '>432</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='py-1 flex justify-between text-[8px] sm:text-[12px] lg:text-[10px] xl:text-[14px] items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:h-14 xl:w-14 bg-gray-300 rounded-full '>

                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Sarah martins</p>
                            <p>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className='font-bold'>June 20th</p>
                        <p>02:00pm</p>
                    </div>
                </div>

                <div className='py-1 flex justify-between text-[8px] sm:text-[12px] lg:text-[10px] xl:text-[14px] items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:h-14 xl:w-14 bg-gray-300 rounded-full '>

                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Sarah martins</p>
                            <p>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className='font-bold'>June 20th</p>
                        <p>02:00pm</p>
                    </div>
                </div>

                <div className='py-1 flex justify-between text-[8px] sm:text-[12px] lg:text-[10px] xl:text-[14px] items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:h-14 xl:w-14 bg-gray-300 rounded-full '>

                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Sarah martins</p>
                            <p>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className='font-bold'>June 20th</p>
                        <p>02:00pm</p>
                    </div>
                </div>

                <div className='py-1 flex justify-between text-[8px] sm:text-[12px] lg:text-[10px] xl:text-[14px] items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:h-14 xl:w-14 bg-gray-300 rounded-full '>

                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Sarah martins</p>
                            <p>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className='font-bold'>June 20th</p>
                        <p>02:00pm</p>
                    </div>
                </div>

                <div className='py-1 flex justify-between text-[8px] sm:text-[12px] lg:text-[10px] xl:text-[14px] items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:h-14 xl:w-14 bg-gray-300 rounded-full '>

                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Sarah martins</p>
                            <p>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className='font-bold'>June 20th</p>
                        <p>02:00pm</p>
                    </div>
                </div>

                <div className='py-1 flex justify-between text-[8px] sm:text-[12px] lg:text-[10px] xl:text-[14px] items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:h-14 xl:w-14 bg-gray-300 rounded-full '>

                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Sarah martins</p>
                            <p>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className='font-bold'>June 20th</p>
                        <p>02:00pm</p>
                    </div>
                </div>
            </div>

            <div>
                <button className='bg-black w-full text-white p-3 rounded-3xl'>
                    Show all
                </button>
            </div>
        </div>
    )
}

export default TodayEvent_comp