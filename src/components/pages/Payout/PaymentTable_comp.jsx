
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
        <div>
            <div>
                <div className="mt-4">
                    <p>Payments</p>
                </div>

                <div className='mt-4'>
                    <ul className='flex text-xs bg-white p-1 w-fit gap-0.5 rounded-xl'>
                        <li onClick={handleTab1} className={`p-1 cursor-pointer  ${activeTab === "tab1" ? "bg-black rounded-xl text-white" : ""}`}>Recent</li>
                        <li onClick={handleTab2} className={`p-1 cursor-pointer  ${activeTab === "tab2" ? "bg-black rounded-xl text-white px-2" : ""}`}>All</li>
                    </ul>
                </div>

                <div className='mt-4 xl:mt-6'>
                    {activeTab === "tab1" ? <RecentPaymentTab_comp /> : <AllPaymentTab_comp />}
                </div>
            </div>
        </div>
    )
}

export default PaymentTable_comp