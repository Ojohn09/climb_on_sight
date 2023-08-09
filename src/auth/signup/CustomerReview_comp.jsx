import React from 'react';
import { LinkIcon } from '../../utils/icons';
import { Formik, Form, FieldArray, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { updateCustomerReview } from '../../redux/slices/auth/signUpFormSlice';
import { reviewSchema } from '../../schema/signUpValidationSchema';

function CustomerReview_comp() {

    const handlePasteLinks = (event, push) => {
        const pastedLinks = event.clipboardData.getData('text').split('\n');
        push(...pastedLinks);
    };

    return (
        <div>
            <div className='w-[100%]'>
                <Formik
                    initialValues={{
                        links: [],
                    }}
                >
                    {({ values }) => (
                        <Form className='flex flex-col items-center gap-4 lg:max-w-[380px] xl:max-w-[440px] mx-auto'>
                            <div className='my-[20px]'>
                                <h1 className='text-[18px] font-semibold'>Links to reviews</h1>
                            </div>
                            <FieldArray name='links'>
                                {({ push, remove }) => (
                                    <div className='lg:max-w-[380px] xl:max-w-[440px] mx-auto'>
                                        <label htmlFor='' className='text-[14px] text-gray-400'>
                                            if applicable
                                        </label>
                                        <div className='border w-[380px] xl:w-[440px] p-2 flex justify-between items-center rounded-xl'>

                                            <input
                                                type='text'
                                                name={`links`}
                                                label={`link`}
                                                margin='normal'
                                                className=' outline-none w-full mb-2'
                                                placeholder='Add links to customer reviews'
                                            />
                                            <LinkIcon />
                                        </div>
                                        {values.links.map((links, index) => (
                                            <div key={index} className='w-full'>
                                                <label htmlFor='' className='text-[14px] text-gray-400'>
                                                    {index === 0 ? 'If applicable' : ' '}
                                                </label>
                                                <div className='border-gray-300 border p-3 rounded-xl flex justify-between gap-4 lg:max-w-[380px] xl:max-w-[440px] mx-auto'>
                                                    <input
                                                        type='text'
                                                        name={`links.${index + 1}`}
                                                        label={`link${index + 1}`}
                                                        margin='normal'
                                                        className=' outline-none w-full mb-2'
                                                        placeholder=''
                                                        onPaste={(e) => handlePasteLinks(e, push)}
                                                    />
                                                    <LinkIcon />
                                                </div>

                                                {index !== 0 && (
                                                    <button type='button' onClick={() => remove(index)} className="text-center w-full">
                                                        Remove
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                        <button type='button' onClick={() => push('')} className='text-center w-full'>
                                            Add Link
                                        </button>
                                    </div>
                                )}
                            </FieldArray>
                        </Form>
                    )}
                </Formik>
            </div >
        </div >
    );
}

export default CustomerReview_comp;
