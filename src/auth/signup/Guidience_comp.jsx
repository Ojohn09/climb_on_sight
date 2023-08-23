import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { guidienceSchema } from '../../schema/signUpValidationSchema';

function Guidience_comp() {

    const dispatch = useDispatch();

    return (

        <Formik
            className='w-[100%]'
            initialValues={{
                guidingInsurance: null,
                guidingCertificate: null,
            }}
        >
            {({ values, handleChange, handleBlur }) => (
                <Form className='flex flex-col items-center gap-4 w-[80%] lg:max-w-[380px] xl:max-w-[440px] mx-auto text-xs'>
                    <div className='my-2 xl:my-[20px]'>
                        <h1 className='text-[18px] font-semibold'>Provide guidance proofs</h1>
                    </div>
                    <div className='w-full'>
                        <label htmlFor='' className='text-[14px] text-gray-400'>
                            Mandatory
                        </label>
                        <input
                            type='file'
                            name='guidingInsurance'
                            value={values.guidingInsurance}
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
                            type='file'
                            name='guidingCertificate'
                            value={values.guidingCertificate}
                            onBlur={handleBlur}
                            className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                            placeholder='Proof of guiding certificate'
                        />
                        <ErrorMessage name='guidingCertificate' component='div' className='text-red-500' />
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Guidience_comp