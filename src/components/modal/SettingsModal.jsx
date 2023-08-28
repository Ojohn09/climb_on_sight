import React from 'react'

function SettingsModal() {
    return (
        <div>
            <div className='p-5 bg-white absolute top-16 right-[150px] rounded-xl'>
                <div className='flex justify-between py-1 items-center'>
                    <p className='mb-2'>Settings</p>
                    <p
                        onClick={() => dispatch(closeModal())}
                        className=' border border-black rounded-full cursor-pointer'><MdClose /></p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className='w-[200px] border rounded-lg p-2 flex items-center cursor-pointer justify-between text-xs bg-gray-100'>
                        <p>Edit profile</p>
                        <p><UserIcon /></p>
                    </div>

                    <div className='w-[200px] border rounded-lg p-2 flex items-center cursor-pointer justify-between text-xs bg-gray-100'>
                        <p>Password reset</p>
                        <img src={Lock} alt="" className='w-4 h-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal