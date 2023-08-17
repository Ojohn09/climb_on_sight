import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { experienceSchema } from '../../schema/signUpValidationSchema';


function Experience_comp() {

    const dispatch = useDispatch();

    return (
        <div>
            <div className='w-[100%]'>

                <Formik
                    initialValues={{
                        rockClimbingExperience: '',
                        iceClimbingExperience: '',
                    }}
                >
                    {({ values, handleChange, handleBlur }) => (
                        <Form className='flex flex-col items-center gap-5 lg:max-w-[380px] xl:max-w-[440px] mx-auto text-xs'>
                            <div className='my-2 xl:my-[20px]'>
                                <h1 className='text-18px] font-semibold'>Your Experiences</h1>
                            </div>
                            <div className='w-full'>
                                <input
                                    type='text'
                                    name='rockClimbingExperience'
                                    value={values.rockClimbingExperience}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                    placeholder='Number of years of experience guiding rock climbing'
                                />
                                <ErrorMessage name='rockClimbingExperience' component='div' className='text-red-500' />
                            </div>

                            <div className='w-full'>
                                <input
                                    type='text'
                                    name='iceClimbingExperience'
                                    value={values.iceClimbingExperience}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                    placeholder='Number of years of experience guiding ice climbing'
                                />
                                <ErrorMessage name='iceClimbingExperience' component='div' className='text-red-500' />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Experience_comp