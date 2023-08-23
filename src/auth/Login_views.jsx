
import LoginField_comp from './login/LoginField_comp'
import back from '../assets/images/background.svg'


function Login_views() {
    return (
        <div className='bg-[#FFF1E7] w-full h-full items-center'>
            <div className='max-w-[2000px] h-full bg-[#FFF1E7] mx-auto'>
                <div className=' flex gap-4 p-4'>
                    <div className='lg:w-[35%]'>
                        <img src={back} alt="" className='rounded-xl h-full w-full' />
                    </div>
                    <div className='bg-white lg:w-[65%] rounded-xl flex flex-col items-center'>
                        <LoginField_comp />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login_views
