

function PayoutCounter_comp() {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-8 lg:gap-4 xl:gap-8 items-center w-full ">
                <div className="flex flex-col bg-indigo-100 rounded-xl p-4 gap-4 w-full md:w-[25%] shadow-sm">
                    <div className="flex flex-col lg:text-[10px] text-[12px] xl:text-[12px] text-start">
                        <p className="font-semibold">Current Balance</p>
                        <p>Today</p>
                    </div>
                    <div className="">
                        <p className="lg:text-lg text-xl xl:text-xl font-semibold">
                            $34,256
                        </p>
                    </div>
                </div>

                <div className="flex flex-col bg-[#FFEEE2] rounded-xl p-4 gap-4 w-full md:w-[25%] shadow-sm">
                    <div className="flex flex-col lg:text-[10px] text-[12px] xl:text-[12px] text-start">
                        <p className="font-semibold">Previous Payout</p>
                        <p>Today</p>
                    </div>
                    <div className=" flex gap-6 items-center">
                        <p className="lg:text-lg text-xl xl:text-xl font-semibold">
                            $23,444
                        </p>
                        <div className="text-green-400 flex items-center text-center text-[8px] p-1 bg-white rounded">
                            <p className="">
                                paid
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-green-50  rounded-xl p-4 gap-4 w-full md:w-[25%] shadow-sm">
                    <div className="flex flex-col lg:text-[10px] text-[12px] xl:text-[12px] text-start">
                        <p className="font-semibold">Previous Payout</p>
                        <p>Today</p>
                    </div>
                    <div className=" flex gap-3 items-center">
                        <p className="lg:text-lg text-xl xl:text-xl font-semibold">
                            $23,444
                        </p>
                        <div className="text-red-400 flex items-center text-center text-[6px] p-1 bg-white rounded">
                            <p className="">
                                In balance
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-green-50  rounded-xl p-4 gap-4 w-full md:w-[25%] shadow-sm">
                    <div className="flex flex-col lg:text-[10px] text-[12px] xl:text-[12px] text-start">
                        <p className="font-semibold">Earnings summary</p>
                        <p>23 May</p>
                    </div>
                    <div className=" flex gap-4 items-center">
                        <p className="lg:text-lg text-xl xl:text-xl font-semibold">
                            $23,444
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayoutCounter_comp