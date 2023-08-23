import React from 'react'
import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function TodayEvent_comp() {
    const today = new Date();
    // Options for formatting the date
    const options = { day: 'numeric', month: 'long', year: 'numeric', };
    const formattedDate = today.toLocaleDateString(undefined, options);

    // const eventData = [
    //     { name: }
    // ]

    return (
        <div className='bg-white h-full   rounded-xl p-4 xl:p-8 flex flex-col gap-3'>
            <div className='flex items-center justify-between'>
                <div className='text-xs 2xl:text-lg 3xl:text-2xl'>
                    <p className='font-semibold'>Todays events</p>
                    <p>{formattedDate}</p>
                </div>

                <div className='text-lg 3xl:text-2xl p-1 bg-black text-white rounded-full cursor-pointer'>
                    <Link to='/calendar'><BiPlus /> </Link>
                </div>
            </div>

            <div className='w-[60%] xl:w-[50%] 2xl:w-[70%] lg:text-[11px] xl:mt-0 xl:text-sm 3xl:text-3xl 3xl:mt-4 font-bold'>
                <p>
                    All booked trips coming up this week
                </p>
            </div>


            <div className='flex items-center justify-between'>
                <div className="w-full h-9 sm:h-11 3xl:h-20 relative xl:mt-2">
                    <img className=" sm:w-8 sm:h-8 w-6 h-6 2xl:w-10 2xl:h-10 3xl:w-14 3xl:h-14 left-0 sm:left-0 top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                    <img className=" sm:w-8 sm:h-8 w-6 h-6 2xl:w-10 2xl:h-10 3xl:w-14 3xl:h-14 left-[10px] sm:left-[20px] 3xl:text-[40px] top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                    <img className=" sm:w-8 sm:h-8 w-6 h-6 2xl:w-10 2xl:h-10 3xl:w-14 3xl:h-14 left-[20px] sm:left-[40px] 3xl:text-[80px] top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                    <img className=" sm:w-8 sm:h-8 w-6 h-6 2xl:w-10 2xl:h-10 3xl:w-14 3xl:h-14 left-[30px] sm:left-[60px] 3xl:text-[120px] top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                    <img className=" sm:w-8 sm:h-8 w-6 h-6 2xl:w-10 2xl:h-10 3xl:w-14 3xl:h-14 left-[40px] sm:left-[80px] 3xl:text-[160px] top-0 absolute rounded-full border border-white" src="https://picsum.photos/200/300" />
                </div>

                <div className='text-[8px] sm:text-[10px] xl:text-xs 3xl:text-lg border-l pl-2'>
                    <p className='font-bold'>All climbers registered</p>
                    <p className='text-gray-700
                        '>432</p>
                </div>
            </div>


            <div className='flex flex-col gap-1 2xl:gap-5 2xl:mt-4 3xl:gap-10'>
                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[12px] xl:text-[12px] 3xl:text-3xl items-center'>
                    <div className='flex gap-2 items-center'>

                        <img src="https://picsum.photos/200/300" alt="" className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 2xl:w-14 2xl:h-14 3xl:w-28 3xl:h-28 rounded-full ' />

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

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[12px] xl:text-[12px] 3xl:text-3xl items-center'>
                    <div className='flex gap-2 items-center'>

                        <img src="https://picsum.photos/200/300" alt="" className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 2xl:w-14 2xl:h-14 3xl:w-28 3xl:h-28 rounded-full ' />

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

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[12px] xl:text-[12px] 3xl:text-3xl items-center'>
                    <div className='flex gap-2 items-center'>

                        <img src="https://picsum.photos/200/300" alt="" className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 2xl:w-14 2xl:h-14 3xl:w-28 3xl:h-28 rounded-full ' />

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

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[12px] xl:text-[12px] 3xl:text-3xl items-center'>
                    <div className='flex gap-2 items-center'>

                        <img src="https://picsum.photos/200/300" alt="" className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 2xl:w-14 2xl:h-14 3xl:w-28 3xl:h-28 rounded-full ' />

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

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[12px] xl:text-[12px] 3xl:text-3xl items-center'>
                    <div className='flex gap-2 items-center'>

                        <img src="https://picsum.photos/200/300" alt="" className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 2xl:w-14 2xl:h-14 3xl:w-28 3xl:h-28 rounded-full ' />

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

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[12px] xl:text-[12px] 3xl:text-3xl items-center'>
                    <div className='flex gap-2 items-center'>

                        <img src="https://picsum.photos/200/300" alt="" className='w-8 h-8 sm:w-14 sm:h-14 lg:w-10 lg:h-10 2xl:w-14 2xl:h-14 3xl:w-28 3xl:h-28 rounded-full ' />

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

            <div className='flex justify-center items-center w-full'>
                <Link to='/events' className='bg-black w-full text-center text-white p-3 rounded-3xl 3xl:text-2xl '>
                    Show all
                </Link>
            </div>
        </div>
    )
}

export default TodayEvent_comp