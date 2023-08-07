
import LoginField_comp from './login/LoginField_comp'
import back from '../assets/images/background.svg'


function Login_views() {
    return (
        <div className='max-w-[1920px] h-screen bg-[#FFF1E7] mx-auto'>
            <div className=' flex gap-4 p-9'>
                <div className='lg:w-[35%]'>
                    <img src={back} alt="" className='rounded-xl' />
                </div>
                <div className='bg-white lg:w-[65%] p-2 rounded-xl flex flex-col items-center'>
                    <LoginField_comp />
                    <div>
                        <p className='hover:underline cursor-pointer'>Don't have an account?</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Login_views