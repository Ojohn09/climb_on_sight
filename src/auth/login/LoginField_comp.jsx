import { Formik, Form } from "formik"

function LoginField_comp() {
    return (
        <div className="w-full">
            <Formik className=''>
                <Form className='flex flex-col items-center gap-4 max-w-[320px] mx-auto'>
                    <div className='font-bold lg:mt-10 xl:mt-16 xl:mb-8 xl:text-base text-[12px]'>
                        CLIMBONSIGHT
                    </div>

                    <div className='my-[20px] text-center'>

                        <h1 className='xl:text-[50px] lg:text-[30px] mb-4 font-bold '>Welcome</h1>
                        <h1 className='xl:text-[24px] font-semibold '>Log in to climb on sight</h1>

                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className='w-full'>
                            <input
                                type='email'
                                name="email"
                                label="Email"
                                margin="normal"
                                className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                placeholder='Email'
                            />
                        </div>

                        <div className='w-full'>
                            <input type='password'
                                name="password"
                                label="password"
                                margin="normal"
                                className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                placeholder='Password'
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-black text-white font-semibold py-3 px-4 xl:mb-4 rounded-xl w-full"
                    >
                        Continue
                    </button>

                    <div>
                        <p className='hover:underline cursor-pointer'>Don't have an account?</p>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginField_comp