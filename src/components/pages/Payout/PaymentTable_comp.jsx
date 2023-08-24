
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
        <div className=' mt-8 h-full'>
            <div className=" h-full xl:text-lg 2xl:text-2xl 3xl:text-3xl">
                <p >Payments</p>
            </div>

            <div className=' h-full mt-6'>
                <ul className='flex text-xs xl:text-sm 2xl:text-xl 3xl:text-2xl  bg-white p-1 w-fit gap-0.5 rounded-2xl'>
                    <li onClick={handleTab1} className={`p-1 cursor-pointer  ${activeTab === "tab1" ? "bg-black rounded-2xl text-white px-2" : ""}`}>Recent</li>
                    <li onClick={handleTab2} className={`p-1 cursor-pointer  ${activeTab === "tab2" ? "bg-black rounded-2xl text-white px-2" : ""}`}>All</li>
                </ul>
            </div>

            <div className='h-full xl:mt-6'>
                {activeTab === "tab1" ? <RecentPaymentTab_comp /> : <AllPaymentTab_comp />}
            </div>
        </div>

    )
}

export default PaymentTable_comp