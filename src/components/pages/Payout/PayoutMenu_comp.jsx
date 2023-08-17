import home from '../../../assets/icons/Home-icon.svg'
import { PlusIcon } from '../../../utils/icons'

function PayoutMenu_comp() {
    return (
        <div className="bg-white w-full h-full rounded-xl p-4">
            <div className="flex justify-center text-sm font-semibold">
                <p>Payout menu</p>
            </div>
            <div className="mt-5">
                <p className="text-sm font-medium">Saved payment options</p>


                <div className="flex flex-col gap-3 mt-5">
                    <div className="flex justify-between capitalize p-2 bg-gray-200 rounded-xl items-center text-[10px]">
                        <div className="flex-col flex gap-2">
                            <p>Jacob aubrey</p>
                            <p>Greenstone bank</p>
                        </div>

                        <div className="p-2 bg-black rounded-xl text-white">
                            <button>Details</button>
                        </div>
                    </div>

                    <div className="flex justify-between capitalize p-2 bg-gray-200 rounded-xl items-center text-[10px]">
                        <div className="flex-col flex gap-2">
                            <p>Jacob aubrey</p>
                            <p>Greenstone bank</p>
                        </div>

                        <div className="p-2 bg-black rounded-xl text-white">
                            <button>Details</button>
                        </div>
                    </div>

                    <div className="flex justify-between capitalize p-2 bg-gray-200 rounded-xl items-center text-[10px]">
                        <div className="flex-col flex gap-2">
                            <p>Jacob aubrey</p>
                            <p>Greenstone bank</p>
                        </div>

                        <div className="p-2 bg-black rounded-xl text-white">
                            <button>Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-8 flex-col gap-4 capitalize text-[12px] font-medium">
                <div className='flex gap-1 items-center border rounded-full p-3 cursor-pointer'>
                    <img src={home} alt="" className='w-5 h-5' />
                    <p>View registered banks</p>
                </div>


                <div className='flex gap-1 items-center border rounded-full p-3 cursor-pointer'>
                    <PlusIcon />
                    <p>add bank details</p>
                </div>

                <button className='bg-black text-white text-center w-full p-3 rounded-xl'>Withdraw funds</button>
            </div>
        </div>
    )
}

export default PayoutMenu_comp