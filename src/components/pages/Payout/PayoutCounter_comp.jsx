import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


function PayoutCounter_comp() {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-8 lg:gap-4 xl:gap-8 items-center w-full mt-4">
                <div className="flex flex-col bg-indigo-100 rounded-xl p-4 gap-4 w-full md:w-[25%] shadow-sm py-6">
                    <div className="flex flex-col lg:text-[8px] text-[12px] xl:text-[12px] 3xl:text-xl text-start">
                        <p className="font-semibold">Current Balance</p>
                        <p>Today</p>
                    </div>
                    <div className="">
                        <p className="lg:text-sm text-xl xl:text-xl 3xl:text-4xl py-1 font-semibold">
                            $23,256.23
                        </p>
                    </div>
                </div>

                <div className="flex flex-col bg-[#FFEEE2] rounded-xl p-4 gap-4 w-full md:w-[25%] shadow-sm py-6">
                    <div className="flex flex-col lg:text-[8px] text-[12px] xl:text-[12px] 3xl:text-xl text-start">
                        <p className="font-semibold">Previous Payout</p>
                        <p>Today</p>
                    </div>
                    <div className=" flex gap-6 items-center">
                        <p className="lg:text-sm text-xl xl:text-xl 3xl:text-4xl py-1 font-semibold">
                            $4,536.76
                        </p>
                        <div className="text-green-400 flex items-center text-center text-[6px] xl:text-[8px] 3xl:text-[14px] p-1 px-2 bg-white rounded">
                            <p className="">
                                paid
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-green-50  rounded-xl p-4 gap-4 w-full md:w-[25%] shadow-sm py-6">
                    <div className="flex flex-col lg:text-[8px] text-[12px] xl:text-[12px] 3xl:text-xl text-start">
                        <p className="font-semibold">Amount to be paid this month</p>
                        <p>29 July</p>
                    </div>
                    <div className=" flex gap-3 items-center">
                        <p className="lg:text-sm text-xl xl:text-xl 3xl:text-4xl py-1 font-semibold">
                            $7,765.12
                        </p>
                        <div className="text-red-400 flex items-center text-center text-[6px] xl:text-[8px] 3xl:text-[14px] p-1 px-2 bg-white rounded">
                            <p className="">
                                In balance
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-green-50  rounded-xl p-4 w-full md:w-[25%] shadow-sm py-6">
                    <div className="flex flex-col lg:text-[8px] text-[12px] xl:text-[12px] 3xl:text-xl text-start">
                        <p className="font-semibold">Earnings summary</p>
                        <p>23 May</p>
                    </div>
                    <div className=" flex flex-col mt-2 xl:mt-0">
                        <p className="lg:text-sm text-xl xl:text-xl 3xl:text-4xl py-1 font-semibold">
                            $7,765.12
                        </p>
                        <p className="text-[6px] xl:text-[10px] 3xl:text-sm gap-2 text-emerald-400 flex items-center hover:underline">
                            <span>View transactions</span>
                            <span><HiOutlineArrowNarrowRight /></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayoutCounter_comp