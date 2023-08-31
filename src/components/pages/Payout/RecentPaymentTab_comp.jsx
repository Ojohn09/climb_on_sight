import React from 'react'
import { payoutTableData } from '../../../utils/mockData'


function RecentPaymentTab_comp() {
    return (
        <div className='h-full'>
            <div className='overflow-x-scroll md:overflow-x-hidden h-full'>
                <div id="table" className=" w-full text-[10px] xl:text-xs 2xl:text-sm 3xl:text-base scrollbar-hide p-2 h-full">
                    <div id="table-header" className=" ">
                        <ul className="w-full flex justify-between font-medium">
                            <li className=" basis-0 flex-1 p-2">Name</li>
                            <li className=" basis-0 flex-1 p-2">Amount</li>
                            <li className=" basis-0 flex-1 p-2">Trip</li>
                            <li className=" basis-0 flex-1 p-2">Date</li>
                        </ul>
                    </div>
                    <div id="table-body" className='paytable scrollbar-hide'>
                        {
                            payoutTableData.map((data) => (
                                <ul key={data.id} className=" flex justify-between items-center p-2 font-bold  bg-white mb-5 rounded-full ">
                                    <li className=" basis-0 flex-1 p-1 capitalize flex gap-[10px] items-center">
                                        <span>
                                            <img src="https://picsum.photos/200/300" alt="" className='w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 rounded-full' />
                                        </span>
                                        <span>{data.name}</span>
                                    </li>
                                    <li className=" basis-0 flex-1 p-1 capitalize">{data.amount}</li>
                                    <li className=" basis-0 flex-1 p-1 capitalize">{data.trip}</li>
                                    <li className=" basis-0 flex-1 p-1 capitalize">{data.date}</li>
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RecentPaymentTab_comp