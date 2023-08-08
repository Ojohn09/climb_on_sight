import { IoSettings } from 'react-icons/io5'
import { BsBellFill } from 'react-icons/bs'

function AppHeader_HOC() {
    return (
        <div className='p-5 z-0'>
            <div className="flex justify-between items-center">
                <div className="max-w-[500px] xl:w-[300px]">
                    <div class='w-full'>
                        <div class="relative flex items-center w-full h-8 rounded-2xl shadow-sm bg-white overflow-hidden">
                            <div class="grid place-items-center h-full w-12 text-gray-300">
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

                <div>
                    <div className="flex items-center gap-4">
                        <div>
                            <IoSettings />
                        </div>
                        <div>
                            <BsBellFill />
                        </div>
                        <div className=''>
                            <img src="https://picsum.photos/200/300" alt="" className='w-6 h-6 rounded-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeader_HOC