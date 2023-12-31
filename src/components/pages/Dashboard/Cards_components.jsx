import { BiTransferAlt } from "react-icons/bi"
import { ArrowUpRightIcon } from "../../../utils/icons"
import { BsArrowUpRight } from "react-icons/bs"
// import { generateDate } from "../../../utils/Calendar"


function Cards_components() {

    return (
        <div className="w-full 2xl:mb-10">
            <div className="flex flex-col md:flex-row gap-6 lg:gap-4 xl:gap-8 items-center w-full ">


                <div className="flex flex-col bg-violet-100 rounded-xl p-2 py-4 3xl:p-6 4xl:p-8 gap-1 w-full md:w-[25%] shadow-sm">

                    <div className="">
                        <p className="lg:text-xl text-xl xl:text-2xl 3xl:text-3xl 3xl:my-3 text-black  font-normal text-center  ">
                            $54,257
                        </p>
                    </div>

                    <div className="flex flex-col lg:text-[8px] xl:text-[10px] gap-0.5 3xl:text-base text-center">
                        <p className="font-semibold ">Cash Payout</p>
                        <p >23% increase from last week</p>
                    </div>

                </div>


                <div className="flex flex-col bg-green-50 rounded-xl p-2 py-4 3xl:p-6 4xl:p-8 gap-1 w-full md:w-[25%] shadow-sm">

                    <div className="">
                        <p className="lg:text-xl text-xl xl:text-2xl 3xl:text-3xl 3xl:my-3 text-black  font-normal text-center flex justify-center">
                            <span className="w-2/3 4xl:w-1/2 flex justify-end">672</span>
                            <span className="text-xs 2xl:text-xl w-1/3 4xl:w-1/2 flex justify-end">
                                <BsArrowUpRight />
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col lg:text-[8px] xl:text-[10px] gap-0.5 3xl:text-base  text-center">
                        <p className="font-semibold flex items-center justify-center gap-1">
                            <span>Number of trips listed in june</span>
                            <span className="text-[8px] 3xl:text-[12px] 4xl:text-sm bg-white"><BiTransferAlt /></span>
                        </p>
                        <p >23% increase from last month</p>
                    </div>

                </div>



                <div className="flex flex-col bg-sky-100 rounded-xl p-2 py-4 3xl:p-6 4xl:p-8 gap-1 w-full md:w-[25%] shadow-sm">

                    <div className="">
                        <p className="lg:text-xl text-xl xl:text-2xl 3xl:text-3xl 3xl:my-3 text-black  font-normal text-center flex justify-center">
                            <span className="w-2/3 4xl:w-1/2 flex justify-end">324</span>
                            <span className="text-xs 2xl:text-xl w-1/3 4xl:w-1/2 flex justify-end">
                                <BsArrowUpRight />
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col lg:text-[8px] xl:text-[10px] gap-0.5 3xl:text-base  text-center">
                        <p className="font-semibold flex items-center justify-center gap-1">
                            <span>Number of trips booked in june</span>
                            <span className="text-[8px] 3xl:text-[12px] 4xl:text-sm bg-white"><BiTransferAlt /></span>
                        </p>
                        <p >23% decrease from last month</p>
                    </div>

                </div>



                <div className="flex flex-col bg-rose-100 rounded-xl p-2 py-4 3xl:p-6 4xl:p-8 gap-1 w-full md:w-[25%] shadow-sm">

                    <div className="">
                        <p className="lg:text-xl text-xl xl:text-2xl 3xl:text-3xl 3xl:my-3 text-black  font-normal text-center flex justify-center">
                            <span className="w-2/3 4xl:w-1/2 4xl:ml-6 flex justify-end">4532</span>
                            <span className="text-xs 2xl:text-xl w-1/3 4xl:w-1/2 flex justify-end">
                                <BsArrowUpRight />
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col lg:text-[8px] xl:text-[10px] gap-0.5 3xl:text-base  text-center">
                        <p className="font-semibold ">Number of climbers booked</p>
                        <p >19% increase from last week</p>
                    </div>

                </div>











                {/* <div className="flex bg-green-50 rounded-xl p-4 xl:p-5 text-center w-full md:w-[25%] shadow-sm">
                    <div className=" flex flex-col gap-2 w-full text-center ">
                        <p className="text-lg xl:text-3xl p-1">672</p>
                        <p className="text-[8px]">Guides completed</p>
                        <p className="text-[8px] text-gray-500">10% increase from last week</p>
                    </div>
                    <div className="">
                        <ArrowUpRightIcon />
                    </div>
                </div>

                <div className="flex bg-cyan-200 rounded-xl p-4 xl:p-5 text-center w-full md:w-[25%] shadow-sm">
                    <div className=" flex flex-col gap-2 w-full text-center">
                        <p className="text-lg xl:text-3xl p-1">324</p>
                        <p className="text-[8px]">
                            <span>Total events for july</span>
                            <span></span>
                        </p>
                        <p className="text-[8px] text-gray-500">23% increase from last week</p>
                    </div>
                    <div className="">
                        <ArrowUpRightIcon />
                    </div>
                </div>


                <div className="flex bg-cyan-200 rounded-xl p-4 xl:p-5 text-center w-full md:w-[25%] shadow-sm">
                    <div className=" flex flex-col gap-2 w-full text-center">
                        <p className="text-lg xl:text-3xl p-1">324</p>
                        <p className="text-[8px]">
                            <span>Total events for july</span>
                            <span></span>
                        </p>
                        <p className="text-[8px] text-gray-500">23% increase from last week</p>
                    </div>
                    <div className="">
                        <ArrowUpRightIcon />
                    </div>
                </div>


                <div className="flex bg-rose-100 rounded-xl p-4 xl:p-5 text-center w-full md:w-[25%] shadow-sm">
                    <div className=" flex flex-col gap-2 w-full text-center">
                        <p className="text-lg xl:text-3xl p-1">4534</p>
                        <p className="text-[8px]">Climbers registered</p>
                        <p className="text-[8px] text-gray-500">19% increase from last week</p>
                    </div>
                    <div className="">
                        <ArrowUpRightIcon />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Cards_components