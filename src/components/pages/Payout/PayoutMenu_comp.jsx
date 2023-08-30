import home from '../../../assets/icons/Home-icon.svg'
import { openMultiModal } from '../../../redux/slices/features/multiModalSlice';
import { PlusIcon } from '../../../utils/icons'
import { useDispatch, useSelector } from 'react-redux';
import MultiModal from '../../modal/MultiModal';

function PayoutMenu_comp() {
    const dispatch = useDispatch()
    const modals = useSelector(state => state.multiModal.modals);

    const RegisteredBankModal = () => {
        dispatch(
            openMultiModal({
                id: 'registered-bank',
                title: 'Registered',
            })
        );
    };

    const WithdrawModal = () => {
        dispatch(
            openMultiModal({
                id: 'withdraw',
                title: 'Withdraw',
            })
        );
    };

    const AddBankModal = () => {
        dispatch(
            openMultiModal({
                id: 'add-bank',
                title: 'Addbank',
            })
        );
    };

    const BankDetail = () => {
        dispatch(
            openMultiModal({
                id: 'bank-detail',
                title: 'BankDetail',
            })
        );
    };

    return (
        <div className="bg-white w-full rounded-xl p-4 h-fit">
            <div className="flex justify-center text-sm font-semibold xl:text-lg 2xl:text-2xl 3xl:text-3xl mt-2 3xl:mt-8">
                <p>Payout menu</p>
            </div>
            <div className="mt-2 2xl:mt-6">
                <p className="text-sm font-medium xl:text-lg 2xl:text-2xl 3xl:text-3xl ">Saved payment options</p>


                <div className="flex flex-col gap-2 xl:gap-6 3xl:gap-10 mt-6">
                    <div className="flex justify-between capitalize p-2 bg-gray-100 rounded-xl items-center cursor-pointer text-[10px] xl:text-xs 2xl:text-sm 3xl:text-lg 4xl:text-xl">
                        <div className="flex-col flex gap-2">
                            <p>Jacob aubrey</p>
                            <p>Greenstone bank</p>
                        </div>

                        <div onClick={BankDetail} className="p-2 bg-black rounded-3xl text-white">
                            <button>Details</button>
                        </div>
                    </div>

                    <div className="flex justify-between capitalize p-2 bg-gray-100 rounded-xl items-center cursor-pointer text-[10px] xl:text-xs 2xl:text-sm 3xl:text-lg 4xl:text-xl">
                        <div className="flex-col flex gap-2">
                            <p>Jacob aubrey</p>
                            <p>Greenstone bank</p>
                        </div>

                        <div onClick={BankDetail} className="p-2 bg-black rounded-3xl text-white">
                            <button>Details</button>
                        </div>
                    </div>

                    <div className="flex justify-between capitalize p-2 bg-gray-100 rounded-xl items-center cursor-pointer text-[10px] xl:text-xs 2xl:text-sm 3xl:text-lg 4xl:text-xl">
                        <div className="flex-col flex gap-2">
                            <p>Jacob aubrey</p>
                            <p>Greenstone bank</p>
                        </div>

                        <div onClick={BankDetail} className="p-2 bg-black rounded-3xl text-white">
                            <button>Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-8 flex-col gap-4 3xl:gap-8 3xl:mt-12 capitalize text-[10px] xl:text-sm 2xl:text-lg 3xl:text-lg 4xl:text-xl font-medium">
                <div onClick={RegisteredBankModal} className='flex gap-1 items-center border rounded-full p-3 xl:p-4 cursor-pointer'>
                    <img src={home} alt="" className='w-4 h-4' />
                    <p>View registered banks</p>
                </div>


                <div onClick={AddBankModal} className='flex gap-1 items-center border rounded-full p-3 xl:p-4 cursor-pointer'>
                    <PlusIcon />
                    <p>add bank details</p>
                </div>

                <button onClick={WithdrawModal} className='bg-black text-white text-center w-full p-3 xl:p-4 rounded-xl xl:mt-4'>Withdraw funds</button>
            </div>

            {modals.map(modal => (
                <MultiModal
                    key={modal.id}
                    id={modal.id}
                    title={modal.title}
                />
            ))}
        </div>
    )
}

export default PayoutMenu_comp