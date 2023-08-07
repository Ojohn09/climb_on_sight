import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { guidienceSchema } from '../../schema/signUpValidationSchema';

function Guidience_comp() {

    const dispatch = useDispatch();

    return (
        <div>
            <div className='w-[100%]'>

                <Formik
                    initialValues={{
                        guidingInsurance: '',
                        guidingCertificate: '',
                    }}
                    validationSchema={guidienceSchema}
                >
                    {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                        <Form className='flex flex-col items-center gap-5 max-w-[440px] mx-auto'>
                            <div className='my-[40px]'>
                                <h1 className='text-[24px] font-semibold'>Provide guidance proofs</h1>
                            </div>
                            <div className='w-full'>
                                <label htmlFor='' className='text-[14px] text-gray-400'>
                                    Mandatory
                                </label>
                                <input
                                    type='text'
                                    name='guidingInsurance'
                                    value={values.guidingInsurance}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                    placeholder='Proof of guiding insurance'
                                    required
                                />
                                <ErrorMessage name='guidingInsurance' component='div' className='text-red-500' />
                            </div>

                            <div className='w-full'>
                                <label htmlFor='' className='text-[14px] text-gray-400'>
                                    If applicable
                                </label>
                                <input
                                    type='text'
                                    name='guidingCertificate'
                                    value={values.guidingCertificate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                    placeholder='Proof of guiding certificate'
                                />
                                <ErrorMessage name='guidingCertificate' component='div' className='text-red-500' />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Guidience_comp