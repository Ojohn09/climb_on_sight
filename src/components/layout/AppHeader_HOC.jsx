import { IoSettings } from 'react-icons/io5'
import { BsBellFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { openMultiModal } from '../../redux/slices/features/multiModalSlice'
import MultiModal from '../modal/MultiModal'


function AppHeader_HOC() {

    const dispatch = useDispatch()
    const modals = useSelector(state => state.multiModal.modals);

    const openSettingsModal = () => {
        dispatch(
            openMultiModal({
                id: 'settings-modal',
                title: 'Settings',
            })
        );
    };

    const openProfileModal = () => {
        dispatch(
            openMultiModal({
                id: 'profile-modal',
                title: 'Profile',
            })
        );
    };

    const openNotificationModal = () => {
        dispatch(
            openMultiModal({
                id: 'notification-modal',
                title: 'Notification',
            })
        );
    };

    return (

        <div className=" h-full flex flex-col gap-4 md:flex-row justify-between items-center bg-[#FBF7F4]">
            <div className=" md:w-[50%]">
                <div className='w-full'>
                    <div className="relative flex items-center w-full p-2 xl:p-3 2xl:p-4 2xl:text-lg 4xl:text-2xl rounded-2xl 2xl:rounded-full shadow-sm bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 22 21" fill="none">
                                <circle cx="9" cy="9" r="8.5" stroke="black" />
                                <circle cx="19.5" cy="18.5" r="2" stroke="black" />
                            </svg>
                        </div>

                        <input
                            className="peer h-full w-full outline-none text-sm 2xl:text-lg 4xl:text-2xl text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Search something.." />
                    </div>
                </div>
            </div>

            <div className='w-full flex items-end'>
                <div className="flex items-center justify-end w-full gap-4">
                    <div className='relative' onClick={openSettingsModal}>
                        <div className={`p-2 bg-white rounded-full text-gray-700 cursor-pointer`}>
                            <IoSettings />
                        </div>

                    </div>
                    <div className='relative' onClick={openNotificationModal}>
                        <div className='p-2 bg-white rounded-full text- text-gray-700 cursor-pointer'>
                            <BsBellFill />
                        </div>
                        <div className='absolute'>

                        </div>
                    </div>
                    <div className='' onClick={openProfileModal}>
                        <img src="https://picsum.photos/200/300" alt="" className='w-10 h-10 rounded-full cursor-pointer' />
                    </div>
                </div>
                {modals.map(modal => (
                    <MultiModal
                        key={modal.id}
                        id={modal.id}
                        title={modal.title}
                    />
                ))}
            </div>
        </div>

    )
}

export default AppHeader_HOC