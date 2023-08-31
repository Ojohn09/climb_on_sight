
import { closeMultiModal } from "../../redux/slices/features/multiModalSlice"
import { useDispatch } from "react-redux"
import { BiX } from "react-icons/bi";

function RegisteredBank({ id }) {

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeMultiModal(id));
    };

    const bankData = [
        { id: 0, name: 'Name on bank', details: 'Jacob audrey' },
        { id: 1, name: 'Account number', details: 'Greenstone bank' },
        { id: 2, name: 'Bank name', details: 'Jacob audrey' },
        { id: 3, name: 'Sort code', details: 'Greenstone bank' },
        { id: 4, name: 'Address', details: '32 Vivi Avene' },
    ]

    return (
        <div className="bg-white w-[300px] lg:w-[400px] 3xl:w-[640px] mx-auto rounded-3xl p-5">
            <div className="text-center w-full my-4 flex justify-between items-center">
                <p className="lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[32px]">Registered bank details</p>
                <p
                    onClick={handleClose}
                    className=' border border-black rounded-full cursor-pointer text-xl'>
                    <BiX />
                </p>
            </div>

            <div className="bg-gray-100 rounded-xl text-xs 3xl:text-xl flex flex-col gap-5 p-5 mb-4">
                {bankData.map((bank) => (
                    <div key={bank.id} className="flex justify-between items-center w-full">
                        <p>{bank.name}</p>
                        <p className="text-sm 3xl:text-2xl">{bank.details}</p>
                    </div>
                ))}
            </div>

            <div className="bg-gray-100 rounded-xl text-xs 3xl:text-xl flex flex-col gap-5 p-5 mb-4">
                {bankData.map((bank) => (
                    <div key={bank.id} className="flex justify-between items-center w-full">
                        <p>{bank.name}</p>
                        <p className="text-sm 3xl:text-2xl">{bank.details}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RegisteredBank