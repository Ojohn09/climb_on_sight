import { Formik, Form, ErrorMessage } from 'formik';
import { accountSettingsSchema } from '../../schema/signUpValidationSchema';


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
                    validationSchema={accountSettingsSchema}
                >
                    {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                        <Form className='flex flex-col items-center gap-5 max-w-[440px] mx-auto'>
                            <div className='my-[40px]'>
                                <h1 className='text-[24px] font-semibold'>Account Settings</h1>
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