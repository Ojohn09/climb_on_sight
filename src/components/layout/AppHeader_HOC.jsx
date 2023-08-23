import { IoSettings } from 'react-icons/io5'
import { BsBellFill } from 'react-icons/bs'
import ModalModal from '../modal/ModalModal'
import { openModal } from '../../redux/slices/features/modalSlice'
import { closeModal } from '../../redux/slices/features/modalSlice';
import { useDispatch, useSelector } from 'react-redux'
import { UserIcon } from '../../utils/icons'
import Lock from '../../assets/icons/Lock.svg'
import { MdClose } from 'react-icons/md'


function AppHeader_HOC() {

    const dispatch = useDispatch()

    return (

        <div className=" h-full flex flex-col gap-4 md:flex-row justify-between items-center bg-[#FBF7F4]">
            <div className=" md:w-[50%]">
                <div className='w-full'>
                    <div className="relative flex items-center w-full h-8 rounded-2xl shadow-sm bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Search something.." />
                    </div>
                </div>
            </div>

            <div className='w-full flex items-end'>
                <div className="flex items-center justify-end w-full gap-4">
                    <div className='relative'>
                        <div onClick={() => dispatch(openModal())} className={`p-2 bg-white rounded-full text-gray-700 cursor-pointer`}>
                            <IoSettings />
                        </div>
                        <ModalModal>
                            <div className='p-5 bg-white absolute top-16 right-[150px] rounded-xl'>
                                <div className='flex justify-between py-1 items-center'>
                                    <p className='mb-2'>Settings</p>
                                    <p
                                        onClick={() => dispatch(closeModal())}
                                        className=' border border-black rounded-full cursor-pointer'><MdClose /></p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className='w-[200px] border rounded-lg p-2 flex items-center justify-between text-xs bg-gray-100'>
                                        <p>Edit profile</p>
                                        <p><UserIcon /></p>
                                    </div>

                                    <div className='w-[200px] border rounded-lg p-2 flex items-center justify-between text-xs bg-gray-100'>
                                        <p>Password reset</p>
                                        <img src={Lock} alt="" className='w-4 h-4' />
                                    </div>
                                </div>
                            </div>
                        </ModalModal>

                    </div>
                    <div className='relative'>
                        <div className='p-2 bg-white rounded-full text- text-gray-700'>
                            <BsBellFill />
                        </div>
                        <div className='absolute'>

                        </div>
                    </div>
                    <div className=''>
                        <img src="https://picsum.photos/200/300" alt="" className='w-10 h-10 rounded-full' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AppHeader_HOC