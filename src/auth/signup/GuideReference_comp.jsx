import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik';
import { guideReferenceSchema } from '../../schema/signUpValidationSchema';



function GuideReference_comp() {
    return (
        <div>
            <div className='w-[100%]'>

                <Formik
                    initialValues={{
                        referenceName: '',
                        referenceEmail: '',
                        referencePhoneNumber: '',
                    }}
                    validationSchema={guideReferenceSchema}
                >
                    {({ values, handleChange, handleBlur }) => (
                        <Form className='flex flex-col items-center gap-5 max-w-[440px] mx-auto'>
                            <div className='my-[40px]'>
                                <h1 className='text-[24px] font-semibold'>Guide Reference</h1>
                            </div>
                            <div className='w-full'>
                                <input
                                    type='text'
                                    name='referenceName'
                                    value={values.referenceName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                    placeholder="Referee's name"
                                />
                                <ErrorMessage name='referenceName' component='div' className='text-red-500' />
                            </div>

                            <div className='w-full'>
                                <input
                                    type='email'
                                    name='referenceEmail'
                                    value={values.referenceEmail}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                    placeholder='Email'
                                />
                                <ErrorMessage name='referenceEmail' component='div' className='text-red-500' />
                            </div>

                            <div className='w-full'>
                                <input
                                    type='number'
                                    name='referencePhoneNumber'
                                    value={values.referencePhoneNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                    placeholder='Phone Number'
                                />
                                <ErrorMessage name='referencePhoneNumber' component='div' className='text-red-500' />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default GuideReference_comp