import { useState } from 'react'
import { closeMultiModal } from '../../redux/slices/features/multiModalSlice';
import { MdClose } from 'react-icons/md';
import { UserIcon } from '../../utils/icons';
import { useDispatch } from 'react-redux';
import Lock from '../../assets/icons/Lock.svg';

function SettingsModal({ id }) {

    const dispatch = useDispatch();
    const [passwordReset, setPasswordReset] = useState(false)

    const handleClose = () => {
        dispatch(closeMultiModal(id));
    };

    const togglePasswordReset = () => {
        setPasswordReset(!passwordReset);
    };


    return (
        <div>
            <div className='min-w-[250px] p-5 bg-white absolute top-16 3xl:top-32 right-[150px] rounded-xl text-xs 2xl:text-sm 4xl:text-lg'>
                <div className='flex justify-between py-1 items-center mb-4'>
                    <p className=''>Settings</p>
                    <p
                        onClick={handleClose}
                        className=' border border-black rounded-full cursor-pointer'><MdClose /></p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    {passwordReset ? (
                        <div className=' rounded-lg flex flex-col items-center cursor-pointer justify-between gap-3'>
                            <input type="password" placeholder='Old password' className='p-2 rounded-lg outline-none border w-full' />
                            <input type="password" placeholder='New password' className='p-2 rounded-lg outline-none border w-full' />
                            <button className='bg-black text-white p-2 rounded-lg w-full text-center'>Update</button>
                        </div>
                    ) : (
                        <>
                            <div className=' border rounded-lg p-2 flex items-center cursor-pointer justify-between  bg-gray-100'>
                                <p>Edit profile</p>
                                <p><UserIcon /></p>
                            </div>

                            <div onClick={togglePasswordReset} className=' border rounded-lg p-2 flex items-center cursor-pointer justify-between  bg-gray-100'>
                                <p >Password reset</p>
                                <img src={Lock} alt="" className='w-4 h-4' />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SettingsModal