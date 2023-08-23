
import back from '../assets/images/background.svg'
import SignUpForm from './signup/signUp_comp'


function SignUp_views() {



    return (
        <div className='max-w-[1920px] bg-[#FFF1E7] mx-auto h-[100vh]'>
            <div className=' lg:flex gap-4 p-2 md:p-4'>
                <div className='hidden lg:block lg:w-[35%]'>
                    <img src={back} alt="" className='rounded-xl' />
                </div>
                <div className='p-4 md:p-2 bg-white lg:w-[65%] flex justify-center lg:max-h-[90vh] rounded-xl items-center'>
                    <SignUpForm />
                </div>

            </div>
        </div>
    )
}

export default SignUp_views