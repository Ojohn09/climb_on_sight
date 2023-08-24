import home from '../../../assets/icons/Home-icon.svg'
import { PlusIcon } from '../../../utils/icons'

function PayoutMenu_comp() {
    return (
        <div className="bg-white w-full rounded-xl p-4 h-fit">
            <div className="flex justify-center text-sm font-semibold xl:text-lg 2xl:text-2xl 3xl:text-3xl mt-4 3xl:mt-8">
                <p>Payout menu</p>
            </div>
            <div className="mt-5 2xl:mt-6">
                <p className="text-sm font-medium xl:text-lg 2xl:text-2xl 3xl:text-3xl ">Saved payment options</p>


                <div className="flex flex-col gap-2 xl:gap-6 3xl:gap-10 mt-6">
                    <div className="flex justify-between capitalize p-2 bg-gray-100 rounded-xl items-center text-[10px] xl:text-base 2xl:text-xl 3xl:text-[22px]">
                        <div className="flex-col flex gap-2">
                            <p>Jacob aubrey</p>
                            <p>Greenstone bank</p>
                        </div>

                        <div className="p-2 bg-black rounded-3xl text-white">
                            <button>Details</button>
                        </div>
                    </div>

                    <div className="flex justify-between capitalize p-2 bg-gray-100 rounded-xl items-center text-[10px] xl:text-base 2xl:text-xl 3xl:text-[22px]">
                        <div className="flex-col flex gap-2">
                            <p>Jacob aubrey</p>
                            <p>Greenstone bank</p>
                        </div>

                        <div className="p-2 bg-black rounded-3xl text-white">
                            <button>Details</button>
                        </div>
                    </div>

                    <div className="flex justify-between capitalize p-2 bg-gray-100 rounded-xl items-center text-[10px] xl:text-base 2xl:text-xl 3xl:text-[22px]">
                        <div className="flex-col flex gap-2">
                            <p>Jacob aubrey</p>
                            <p>Greenstone bank</p>
                        </div>

                        <div className="p-2 bg-black rounded-3xl text-white">
                            <button>Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-8 flex-col gap-4 xl:gap-6 3xl:gap-12 3xl:mt-12 capitalize text-[12px] xl:text-base 2xl:text-lg 3xl:text-2xl font-medium">
                <div className='flex gap-1 items-center border rounded-full p-3 xl:p-4 cursor-pointer'>
                    <img src={home} alt="" className='w-5 h-5' />
                    <p>View registered banks</p>
                </div>


                <div className='flex gap-1 items-center border rounded-full p-3 xl:p-4 cursor-pointer'>
                    <PlusIcon />
                    <p>add bank details</p>
                </div>

                <button className='bg-black text-white text-center w-full p-3 xl:p-4 rounded-xl xl:mt-4'>Withdraw funds</button>
            </div>
        </div>
    )
}

export default PayoutMenu_comp