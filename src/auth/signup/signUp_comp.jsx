import { useState } from 'react'
import PersonalInformation_comp from './PersonalInformation_comp';
import Experience_comp from './Experience_comp';
import GuideReference_comp from './GuideReference_comp';
import Guidience_comp from './Guidience_comp';
import CustomerReview_comp from './CustomerReview_comp';
import FormStepper from './FormStepper_comp';
import { DocumentIcon, FingerPrintIcon, HashtagIcon, StarIcon, UserGroupIcon, UserIcon } from '../../utils/icons';
import AccountSettings_comp from './AccountSettings_comp';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    updateAccountSettings,
    updateCustomerReview,
    updateExperience,
    updateGuideReference,
    updateGuidience,
    updatePersonalInfo
} from '../../redux/slices/auth/signUpFormSlice';

import {
    personalInformationSchema,
    accountSettingsSchema,
    experienceSchema,
    guideReferenceSchema,
    guidienceSchema,
    reviewSchema
} from '../../schema/signUpValidationSchema';

const steps = [
    { icon: <UserIcon />, text: 'Personal Information' },
    { icon: <FingerPrintIcon />, text: 'Account Settings' },
    { icon: <DocumentIcon />, text: 'Proof of Guidience' },
    { icon: <StarIcon />, text: 'Customer Review' },
    { icon: <HashtagIcon />, text: 'Year Experience' },
    { icon: <UserGroupIcon />, text: 'Guidience Reference' },

]


function SignUpForm() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = steps.length - 1;

    const handleNextStep = (isValid) => {
        if (isValid && currentStep < totalSteps) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const handleFormSubmission = (values) => {
        console.log('Final Form Values:', values);

        dispatch(updatePersonalInfo(values.personalInformation));
        dispatch(updateAccountSettings(values.accountSettings));
        dispatch(updateGuidience(values.guidience));
        dispatch(updateCustomerReview(values.customerReview));
        dispatch(updateExperience(values.experience));
        dispatch(updateGuideReference(values.guideReference));

        // Perform any additional actions, such as submitting the entire form to the server.

        navigate('/success-page')
        // ...

    };

    return (
        <div className='flex flex-col items-center w-full py-10 lg:py-0'>
            <div className='font-bold text-[14px] my-5'>
                CLIMBONSIGHT
            </div>
            <div className='w-full'>
                <FormStepper steps={steps} currentStep={currentStep} />
            </div>
            <div className='w-full mt-10'>
                <div className='w-full'>
                    <Formik
                        initialValues={{
                            personalInformation: {
                                name: '',
                                email: '',
                                phoneNumber: '',
                            },
                            accountSettings: {
                                userName: '',
                                password: '',
                                confirmPassword: '',
                            },
                            guidience: {
                                guidingInsurance: '',
                                guidingCertificate: '',
                            },
                            customerReview: {
                                links: [],
                            },
                            experience: {
                                rockClimbingExperience: '',
                                iceClimbingExperience: '',
                            },
                            guideReference: {
                                referenceName: '',
                                referenceEmail: '',
                                referencePhoneNumber: '',
                            },
                        }}
                        // validationSchema={ }
                        onSubmit={(values, { setSubmitting }) => {
                            if (currentStep === totalSteps) {
                                handleFormSubmission(values);
                                setSubmitting(false);
                            } else {
                                handleNextStep(true);
                                setSubmitting(false);
                            }
                        }}

                        validationSchema={
                            currentStep === 0 ? personalInformationSchema :
                                currentStep === 1 ? accountSettingsSchema :
                                    currentStep === 2 ? guidienceSchema :
                                        currentStep === 3 ? reviewSchema :
                                            currentStep === 4 ? experienceSchema :
                                                guideReferenceSchema
                        }

                    >
                        {({ isSubmitting, isValid }) => (
                            <Form>
                                {currentStep === 0 && <PersonalInformation_comp />}
                                {currentStep === 1 && <AccountSettings_comp />}
                                {currentStep === 2 && <Guidience_comp />}
                                {currentStep === 3 && <CustomerReview_comp />}
                                {currentStep === 4 && <Experience_comp />}
                                {currentStep === 5 && <GuideReference_comp />}

                                <div className='w-[80%] lg:max-w-[380px] xl:max-w-[440px] mx-auto mt-4'>
                                    {currentStep < totalSteps ? (
                                        <button
                                            onClick={() => handleNextStep(isValid)}
                                            type="submit"
                                            className="bg-black text-white font-semibold py-3 px-4 rounded-xl w-full"
                                            disabled={isSubmitting}
                                        >
                                            Continue
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="bg-black text-white font-semibold py-3 px-4 rounded-xl w-full"
                                            disabled={isSubmitting}
                                        >
                                            Finish up
                                        </button>)}
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm