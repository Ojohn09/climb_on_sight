import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';


function PersonalInformation_comp() {
    const dispatch = useDispatch();

    return (
        <div>
            <div className='w-[100%]'>

                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phoneNumber: '',
                    }}

                >
                    {({ values, handleChange, handleBlur }) => (
                        <Form className='flex flex-col items-center gap-4 w-[80%] lg:max-w-[380px] xl:max-w-[440px] mx-auto text-xs'>
                            <div className='my-2 xl:my-[20px]'>
                                <h1 className='text-[18px] font-semibold'>Fill the forms below</h1>
                            </div>
                            <div className='w-full'>
                                <input
                                    type='text'
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='rounded-xl p-2 border-gray-300 border outline-none w-full'
                                    placeholder='Name'
                                    required
                                />
                                <ErrorMessage name='name' component='div' className='text-red-500' />
                            </div>

                            <div className='w-full'>
                                <input
                                    type='email'
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='rounded-xl p-2 border-gray-300 border outline-none w-full'
                                    placeholder='Email'
                                    required
                                />
                                <ErrorMessage name='email' component='div' className='text-red-500' />
                            </div>

                            <div className='w-full'>
                                <input
                                    type='number'
                                    name='phoneNumber'
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='rounded-xl p-2 border-gray-300 border outline-none w-full'
                                    placeholder='Phone Number'
                                    required
                                />
                                <ErrorMessage name='phoneNumber' component='div' className='text-red-500' />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default PersonalInformation_comp