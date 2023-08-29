import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai';
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

                <div className='flex items-center'>
                    <p className='text-xs 2xl:text-lg 3xl:text-2xl'>Add trips</p>
                    <Link to='/calendar' className='text-2xl 3xl:text-5xl cursor-pointer'>
                        <AiFillPlusCircle />
                    </Link>

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


            <div className='flex flex-col gap-2 2xl:gap-6 2xl:mt-4'>
                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[9px] xl:text-[12px] 3xl:text-base items-center'>
                    <div className='flex gap-2 items-center'>

                        <img src="https://picsum.photos/200/300" alt="" className='w-8 h-8 sm:w-14 sm:h-14 lg:w-8 lg:h-8 2xl:w-12 2xl:h-13 3xl:w-15 3xl:h-15 4xl:w-20 4xl:h-20 rounded-full ' />

                        <div className='flex flex-col xl:gap-1 3xl:gap-2'>
                            <p className=''>Sarah martins</p>
                            <p className='text-gray-400'>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className=''>June 20th</p>
                        <p>02:00pm</p>
                    </div>
                </div>

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[9px] xl:text-[12px] 3xl:text-base items-center'>
                    <div className='flex gap-2 items-center'>

                        <img src="https://picsum.photos/200/300" alt="" className='w-8 h-8 sm:w-14 sm:h-14 lg:w-8 lg:h-8 2xl:w-12 2xl:h-13 3xl:w-15 3xl:h-15 4xl:w-20 4xl:h-20 rounded-full ' />

                        <div className='flex flex-col xl:gap-1 3xl:gap-2'>
                            <p className=''>Sarah martins</p>
                            <p className='text-gray-400'>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className=''>June 20th</p>
                        <p>02:00pm</p>
                    </div>
                </div>

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[9px] xl:text-[12px] 3xl:text-base items-center'>
                    <div className='flex gap-2 items-center'>

                        <img src="https://picsum.photos/200/300" alt="" className='w-8 h-8 sm:w-14 sm:h-14 lg:w-8 lg:h-8 2xl:w-12 2xl:h-13 3xl:w-15 3xl:h-15 4xl:w-20 4xl:h-20 rounded-full ' />

                        <div className='flex flex-col xl:gap-1 3xl:gap-2'>
                            <p className=''>Sarah martins</p>
                            <p className='text-gray-400'>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className=''>June 20th</p>
                        <p>02:00pm</p>
                    </div>
                </div>

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[9px] xl:text-[12px] 3xl:text-base items-center'>
                    <div className='flex gap-2 items-center'>

                        <img src="https://picsum.photos/200/300" alt="" className='w-8 h-8 sm:w-14 sm:h-14 lg:w-8 lg:h-8 2xl:w-12 2xl:h-13 3xl:w-15 3xl:h-15 4xl:w-20 4xl:h-20 rounded-full ' />

                        <div className='flex flex-col xl:gap-1 3xl:gap-2'>
                            <p className=''>Sarah martins</p>
                            <p className='text-gray-400'>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className=''>June 20th</p>
                        <p>02:00pm</p>
                    </div>
                </div>

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[9px] xl:text-[12px] 3xl:text-base items-center'>
                    <div className='flex gap-2 items-center'>

                        <img src="https://picsum.photos/200/300" alt="" className='w-8 h-8 sm:w-14 sm:h-14 lg:w-8 lg:h-8 2xl:w-12 2xl:h-13 3xl:w-15 3xl:h-15 4xl:w-20 4xl:h-20 rounded-full ' />

                        <div className='flex flex-col xl:gap-1 3xl:gap-2'>
                            <p className=''>Sarah martins</p>
                            <p className='text-gray-400'>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className=''>June 20th</p>
                        <p>02:00pm</p>
                    </div>
                </div>

                <div className=' flex justify-between text-[8px] sm:text-[12px] lg:text-[9px] xl:text-[12px] 3xl:text-base items-center'>
                    <div className='flex gap-2 items-center'>

                        <img src="https://picsum.photos/200/300" alt="" className='w-8 h-8 sm:w-14 sm:h-14 lg:w-8 lg:h-8 2xl:w-12 2xl:h-13 3xl:w-15 3xl:h-15 4xl:w-20 4xl:h-20 rounded-full ' />

                        <div className='flex flex-col xl:gap-1 3xl:gap-2'>
                            <p className=''>Sarah martins</p>
                            <p className='text-gray-400'>Ice climbing</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-end'>
                        <p className=''>June 20th</p>
                        <p>02:00pm</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center w-full mt-2'>
                <Link to='/events' className='bg-black w-full text-center text-white p-3 3xl:p-5 rounded-3xl 3xl:text-2xl '>
                    Show all
                </Link>
            </div>
        </div>
    )
}

export default TodayEvent_comp