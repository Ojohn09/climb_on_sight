
import LoginField_comp from './login/LoginField_comp'
import back from '../assets/images/background.svg'


function Login_views() {
    return (
<<<<<<< Updated upstream
        <div className='max-w-[1920px] h-screen bg-[#FFF1E7] mx-auto'>
 feature/login_signup
            <div className=' flex gap-4 p-4'>
                <div className='lg:w-[35%]'>
                    <img src={back} alt="" className='rounded-xl' />
                </div>
                <div className='bg-white lg:w-[65%] rounded-xl flex flex-col items-center'>

                    <LoginField_comp />
                </div>


=======
        <div className='bg-[#FFF1E7] w-screen h-screen items-center flex gap-5 p-5'>
            <div className='lg:w-[40%] h-full bg-cover bg-center bg-no-repeat rounded-xl' style={{ backgroundImage: `url(${back})` }}>
                {/* <img src={back} alt="" className='rounded-xl h-full w-full' /> */}
>>>>>>> Stashed changes
            </div>
            {/* <div className='bg-white lg:w-[60%] rounded-xl flex flex-col items-center h-full'> */}
                <LoginField_comp />
            {/* </div> */}
        </div>
    )
}

export default Login_views