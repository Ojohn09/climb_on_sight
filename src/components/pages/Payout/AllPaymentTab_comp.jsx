import React from 'react'
import { payoutTableData } from '../../../utils/mockData'


function AllPaymentTab_comp() {
    return (
        <div>
            <div className=''>
                <div >
                    <div id="table" className=" w-full mt-4 overflow-x-hidden  text-[12px] scrollbar-hide p-2">
                        <div id="table-header" className=" ">
                            <ul className="w-full flex justify-between font-bold">
                                <li className=" basis-0 flex-1 p-2">Name</li>
                                <li className=" basis-0 flex-1 p-2 hidden md:block">Amount</li>
                                <li className=" basis-0 flex-1 p-2 hidden md:block">Trip</li>
                                <li className=" basis-0 flex-1 p-2">Date</li>
                            </ul>
                        </div>
                        <div id="table-body" className='paytable overflow-x-hidden scrollbar-hide'>
                            {
                                payoutTableData.map((data) => (
                                    <ul key={data.id} className=" flex justify-between items-center py-1 bg-white mb-4 rounded-full text-[10px] font-semibold">
                                        <li className=" basis-0 flex-1 p-1 capitalize flex gap-0.5 items-center">
                                            <span>
                                                <img src="https://picsum.photos/200/300" alt="" className='w-6 h-6 rounded-full' />
                                            </span>
                                            <span>{data.name}</span>
                                        </li>
                                        <li className=" basis-0 flex-1 p-1 capitalize hidden md:block">{data.amount}</li>
                                        <li className=" basis-0 flex-1 p-1 capitalize hidden md:block">{data.trip}</li>
                                        <li className=" basis-0 flex-1 p-1 capitalize">{data.date}</li>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllPaymentTab_comp