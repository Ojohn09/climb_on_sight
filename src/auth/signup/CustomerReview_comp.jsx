import React from 'react';
import { LinkIcon } from '../../utils/icons';
import { Formik, Form, FieldArray } from 'formik';

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
                        links: [''], // Initial value with an empty link
                    }}
                >
                    {({ values }) => (
                        <Form className='flex flex-col items-center gap-4 lg:max-w-[380px] xl:max-w-[440px] mx-auto'>
                            <div className='my-2 xl:my-[20px]'>
                                <h1 className='text-[18px] font-semibold'>Links to reviews</h1>
                            </div>
                            <FieldArray name='links'>
                                {({ push, remove }) => (
                                    <div className='w-[440px] mx-auto mb-4'>
                                        {values.links.map((link, index) => (
                                            <div key={index} className='w-full flex  gap-4 mt-4 items-center'>
                                                <div className='lg:w-[440px]'>
                                                    <label htmlFor='' className='text-[14px] text-gray-400'>
                                                        {index === 0 ? 'Optional' : ' '}
                                                    </label>
                                                    <div className='border-gray-300 border p-2 rounded-xl items-center flex justify-between gap-4 lg:max-w-[380px] xl:max-w-[440px] mr-auto'>
                                                        <input
                                                            type='text'
                                                            name={`links.${index}`}
                                                            label={`link${index + 1}`}
                                                            margin='normal'
                                                            className=' outline-none w-full mb-2'
                                                            placeholder='Add link to customer reviews'
                                                            onPaste={(e) => handlePasteLinks(e, push)}
                                                        />
                                                        <LinkIcon />
                                                    </div>

                                                </div>


                                                {index !== 0 && (
                                                    <div className='w-fit border px-1 rounded-2xl border-black'>
                                                        <button type='button' onClick={() => remove(index)} className="text-center p-2`">
                                                            —
                                                        </button>
                                                    </div>
                                                )}


                                            </div>
                                        ))}
                                        <div className='w-full flex item-center justify-center mt-2'>
                                            <button type='button' onClick={() => push('')} className='text-center w-fit mt-2 py-1 rounded-full px-3 border border-black'>
                                                +
                                            </button>
                                        </div>
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
