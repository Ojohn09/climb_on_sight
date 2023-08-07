import { Formik, Form } from "formik"

function LoginField_comp() {
    return (
        <div className="w-full">
            <Formik className=''>
                <Form className='flex flex-col items-center gap-5 max-w-[440px] mx-auto'>
                    <div className='font-bold mt-16 mb-8'>
                        CLIMBONSIGHT
                    </div>

                    <div className='my-[40px] text-center'>
                        <h1 className='text-[50px] mb-4 font-bold '>Welcome</h1>
                        <h1 className='text-[24px] font-semibold '>Log in to climb on sight</h1>
                    </div>
                    <div className='w-full'>
                        <input
                            type='email'
                            name="email"
                            label="Email"
                            margin="normal"
                            className='rounded-xl p-4 border-gray-300 border outline-none w-full'
                            placeholder='Email'
                        />
                    </div>

                    <div className='w-full'>
                        <input type='password'
                            name="password"
                            label="password"
                            margin="normal"
                            className='rounded-xl p-4 border-gray-300 border outline-none w-full'
                            placeholder='Password'
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-black text-white font-semibold py-4 px-4 rounded-xl w-full"
                    >
                        Continue
                    </button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginField_comp