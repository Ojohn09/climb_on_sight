
import back from '../assets/images/background.svg'
import SignUpForm from './signup/signUp_comp'


function SignUp_views() {



    return (
        <div className='bg-[#FFF1E7] w-screen h-screen items-center flex gap-5 p-5'>
            <div className='lg:w-[40%] h-full bg-cover bg-center bg-no-repeat rounded-xl' style={{ backgroundImage: `url(${back})` }}>
                {/* <img src={back} alt="" className='rounded-xl h-full w-full' /> */}
            </div>
            <SignUpForm />
        </div>
    )
}

export default SignUp_views