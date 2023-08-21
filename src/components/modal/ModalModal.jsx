import { closeModal } from '../../redux/slices/features/modalSlice'
import { useDispatch, useSelector } from 'react-redux'




function ModalModal(props) {
    const dispatch = useDispatch();
    const modalOpen = useSelector((state) => state.modal.isOpen)

    return (
        <div

            className={`modal fixed w-screen mx-auto h-screen bg-gray-900 bg-opacity-20 inset-0 z-20 flex items-center justify-center ${modalOpen ? 'visible' : 'invisible'}`}
        >
            {props.children}
        </div>
    )
}

export default ModalModal