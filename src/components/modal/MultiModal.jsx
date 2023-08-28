
import { useDispatch, useSelector } from 'react-redux';


const MultiModal = ({ id, title, content }) => {
    const dispatch = useDispatch();
    const modalOpen = useSelector((state) => state.multiModal.modals)

    return (
        <div

            className={`modal fixed w-screen mx-auto h-screen bg-gray-900 bg-opacity-20 inset-0 z-20 flex items-center justify-center ${modalOpen ? 'visible' : 'invisible'}`}
        >
            <div className="bg-white p-8 rounded shadow-lg">
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                <div className="mb-4">{content}</div>
            </div>
        </div>
    );
};

export default MultiModal;
