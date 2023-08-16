import React from 'react'
import { payoutTableData } from '../../../utils/mockData'


function RecentPaymentTab_comp() {
    return (
        <div className=' overflow-y-scroll scrollbar-hide '>
            <div >
                {/* <table class="table-fixed border-0 border-separate border-spacing-y-4 overflow-y-scroll scrollbar-hide">
                    <thead>
                        <tr className=''>
                            <th className='w-1/4 text-start'>Name</th>
                            <th className='w-1/4 text-start'>Amount</th>
                            <th className='w-1/4 text-start'>Trip</th>
                            <th className='w-1/4 text-start'>Date</th>
                        </tr>
                    </thead>
                    <tbody className='gap-2'>
                        {payoutTableData.map((data) => (
                            <tr className='text-[12px] border bg-white rounded-2xl'>
                                <td className=' py-4 px-2  text-start capitalize flex items-center rounded-l-2xl'>
                                    <span>
                                        <img src="https://picsum.photos/200/300" alt="" className='w-4 h-4 rounded-full' />
                                    </span>
                                    <span>{data.name}</span>
                                </td>
                                <td className=' py-4 text-start capitalize'>{data.amount}</td>
                                <td className=' py-4 text-start capitalize'>{data.trip}</td>
                                <td className=' py-4 px-2 text-start capitalize'>{data.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}

                <div id="table" className="mt-4 overflow-x-scroll  text-[12px] ">
                    <div id="table-header" className=" ">
                        <ul className="w-full flex justify-between font-bold">
                            <li className=" basis-0 flex-1 p-2">Name</li>
                            <li className=" basis-0 flex-1 p-2 hidden md:block">Amount</li>
                            <li className=" basis-0 flex-1 p-2 hidden md:block">Trip</li>
                            <li className=" basis-0 flex-1 p-2">Date</li>
                        </ul>
                    </div>
                    <div id="table-body">
                        {
                            payoutTableData.map((data) => (
                                <ul key={data.id} className="w-full flex justify-between items-center py-1 bg-white mb-4 rounded-2xl text-[10px] font-semibold">
                                    <li className=" basis-0 flex-1 p-2 capitalize flex gap-0.5 items-center">
                                        <span>
                                            <img src="https://picsum.photos/200/300" alt="" className='w-5 h-5 rounded-full' />
                                        </span>
                                        <span>{data.name}</span>
                                    </li>
                                    <li className=" basis-0 flex-1 p-2 capitalize hidden md:block">{data.amount}</li>
                                    <li className=" basis-0 flex-1 p-2 capitalize hidden md:block">{data.trip}</li>
                                    <li className=" basis-0 flex-1 p-2 capitalize">{data.date}</li>
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