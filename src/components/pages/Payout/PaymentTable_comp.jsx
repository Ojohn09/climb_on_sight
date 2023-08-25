
import React, { useState } from 'react'
import RecentPaymentTab_comp from './RecentPaymentTab_comp';
import AllPaymentTab_comp from './AllPaymentTab_comp';

function PaymentTable_comp() {
    const [activeTab, setActiveTab] = useState('tab1')

    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };

    return (
        <div className='mt-4 xl:mt-8 h-full'>
            <div className=" h-full xl:text-lg 2xl:text-2xl">
                <p >Payments</p>
            </div>

            <div className=' h-full mt-4'>
                <ul className='flex text-xs xl:text-sm 2xl:text-xl 3xl:text-2xl  bg-white p-2 w-fit gap-1 rounded-3xl'>
                    <li onClick={handleTab1} className={`p-1 cursor-pointer  ${activeTab === "tab1" ? "bg-black rounded-3xl text-white px-4" : ""}`}>Recent</li>
                    <li onClick={handleTab2} className={`p-1 cursor-pointer  ${activeTab === "tab2" ? "bg-black rounded-3xl text-white px-4" : ""}`}>All</li>
                </ul>
            </div>

            <div className='h-full xl:mt-6'>
                {activeTab === "tab1" ? <RecentPaymentTab_comp /> : <AllPaymentTab_comp />}
            </div>
        </div>

    )
}

export default PaymentTable_comp