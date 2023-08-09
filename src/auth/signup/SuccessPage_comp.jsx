import { Link } from "react-router-dom"

function SuccessPage_comp() {
    return (
        <div className='w-screen h-screen bg-orange-100 flex items-center justify-center'>

            <div className='max-w-[400px] mx-auto flex items-center justify-center p-4 bg-white rounded-xl'>
                <div className="w-[70%] mx-auto flex flex-col items-center py-4">
                    <div className="text-black text-xs font-bold">CLIMBONSIGHT</div>
                    <div className="py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="153" height="138" viewBox="0 0 153 138" fill="none">
                            <path d="M144.428 32.1641C148.629 32.1641 152.04 35.5752 152.04 39.7765C152.04 43.9778 148.629 47.3889 144.428 47.3889C140.227 47.3889 136.815 43.9778 136.815 39.7765C136.815 35.5752 140.227 32.1641 144.428 32.1641Z" fill="#B58563" />
                            <path d="M12.5977 110.301C14.961 110.301 16.8799 112.22 16.8799 114.583C16.8799 116.946 14.961 118.865 12.5977 118.865C10.2343 118.865 8.31543 116.946 8.31543 114.583C8.31543 112.22 10.2343 110.301 12.5977 110.301Z" fill="#B58563" />
                            <path d="M7.7891 36.8477C11.5403 36.8477 14.586 39.8934 14.586 43.6446C14.586 47.3958 11.5403 50.4415 7.7891 50.4415C4.03788 50.4415 0.992188 47.3958 0.992188 43.6446C0.992188 39.8934 4.03788 36.8477 7.7891 36.8477Z" fill="#B58563" />
                            <path d="M129.177 123.824C132.823 123.824 135.783 126.785 135.783 130.431C135.783 134.077 132.823 137.037 129.177 137.037C125.531 137.037 122.57 134.077 122.57 130.431C122.57 126.785 125.531 123.824 129.177 123.824Z" fill="#B58563" />
                            <path d="M79.6458 0.152344C81.4773 0.152344 82.9644 1.63942 82.9644 3.47096C82.9644 5.30251 81.4773 6.78958 79.6458 6.78958C77.8142 6.78958 76.3271 5.30251 76.3271 3.47096C76.3271 1.63942 77.8142 0.152344 79.6458 0.152344Z" fill="#B58563" />
                            <path d="M124.459 67.284C124.396 92.7703 104.037 113.767 78.5444 113.767H77.9674C63.0336 113.767 49.4967 106.702 40.915 95.6279C34.8349 87.792 31.2822 77.8982 31.2822 67.3394C31.2822 41.8467 52.2745 20.9257 77.712 21.0671H78.2889C103.76 21.2109 124.516 41.8264 124.459 67.284Z" fill="#B58563" />
                            <path d="M66.7158 66.6199L76.5243 79.3132L91.2369 50.4648" stroke="white" strokeWidth="6.9236" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className=" text-center text-black my-4 font-semibold">Great!!! You’ve successfully created a guide account we are gld to have you click on the buton below to go home</div>
                    <Link to='/dashboard' className="self-stretch bg-black rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                        <div className="text-stone-50 p-3 font-normal">Go Home</div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default SuccessPage_comp
