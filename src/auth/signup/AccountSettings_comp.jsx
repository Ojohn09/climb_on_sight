import { Formik, Form, ErrorMessage } from 'formik';


function AccountSettings_comp() {
    return (
        <div>
            <div className='w-[100%]'>

                <Formik
                    initialValues={{
                        userName: '',
                        password: '',
                        confirmPassword: '',
                    }}
                >
                    {({ values, handleChange, handleBlur }) => (
                        <Form className='flex flex-col items-center gap-4 lg:max-w-[380px] xl:max-w-[440px] mx-auto text-xs'>
                            <div className='my-2 xl:my-[20px]'>
                                <h1 className='text-[18px] font-semibold'>Account Settings</h1>
                            </div>
                            <div className='w-full'>
                                <input
                                    type='text'
                                    name='userName'
                                    value={values.userName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                    placeholder='Username'
                                    required
                                />
                                <ErrorMessage name='userName' component='div' className='text-red-500 text-[12px]' />
                            </div>

                            <div className='w-full'>
                                <input
                                    type='password'
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                    placeholder='Password'
                                    required
                                />
                                <ErrorMessage name='password' component='div' className='text-red-500 text-[12px]' />
                            </div>

                            <div className='w-full'>
                                <input
                                    type='password'
                                    name='confirmPassword'
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                    placeholder='Confirm password'
                                    required
                                />
                                <ErrorMessage name='confirmPassword' component='div' className='text-red-500 text-[12px]' />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default AccountSettings_comp