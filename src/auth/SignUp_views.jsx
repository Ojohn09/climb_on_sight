
import back from '../assets/images/background.svg'
import SignUpForm from './signup/signUp_comp'


function SignUp_views() {



    return (
        <div className='max-w-[1920px] bg-[#FFF1E7] mx-auto h-full'>
            <div className=' lg:flex gap-4 lg:p-9'>
                <div className='lg:w-[35%]'>
                    <img src={back} alt="" className='rounded-xl' />
                </div>
                <div className='bg-white lg:w-[65%] min-h-[70vh] p-2 rounded-xl flex flex-col items-center'>
                    <SignUpForm />
                </div>

            </div>
        </div>
    )
}

export default SignUp_views