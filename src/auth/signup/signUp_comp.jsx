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

const steps = [
    { icon: <UserIcon />, text: 'Personal Information' },
    { icon: <FingerPrintIcon />, text: 'Account Settings' },
    { icon: <DocumentIcon />, text: 'Proof of Guidience' },
    { icon: <StarIcon />, text: 'Customer Review' },
    { icon: <HashtagIcon />, text: 'Year Experience' },
    { icon: <UserGroupIcon />, text: 'Guidience Reference' },

]


function SignUpForm() {

    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = steps.length - 1;

    const handleNextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const handleFormSubmission = (values) => {
        console.log('Final Form Values:', values);

        // You can dispatch actions to update the Redux store with the final form values for each component
        dispatch(updatePersonalInfo(values.personalInformation));

        dispatch(updateGuidience(values.guidience));
        dispatch(updateCustomerReview(values.customerReview));
        dispatch(updateExperience(values.experience));
        dispatch(updateGuideReference(values.guideReference));

        // Perform any additional actions, such as submitting the entire form to the server.
        // ...
    };

    return (
        <div className='bg-white w-full h-full flex flex-col justify-center items-center py-10 lg:py-0'>
            <div className='font-semibold text-[14px] my-5 font-face-mr'>
                CLIMBONSIGHT
            </div>
            <FormStepper steps={steps} currentStep={currentStep} />
            <div className='w-full'>
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
                        onSubmit={(values) => {
                            // Handle the final form submission here
                            handleFormSubmission(values);
                        }}
                    >
                        {({ values }) => (
                            <Form>
                                {currentStep === 0 && <PersonalInformation_comp />}
                                {currentStep === 1 && <AccountSettings_comp />}
                                {currentStep === 2 && <Guidience_comp />}
                                {currentStep === 3 && <CustomerReview_comp />}
                                {currentStep === 4 && <Experience_comp />}
                                {currentStep === 5 && <GuideReference_comp />}

                                <div className='max-w-[440px] mx-auto mt-4'>
                                    {currentStep < totalSteps ? (
                                        <button
                                            onClick={handleNextStep}
                                            type="submit"
                                            className="bg-black text-white font-semibold py-3 px-4 rounded-xl w-full"
                                        >
                                            Continue
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="bg-black text-white font-semibold py-3 px-4 rounded-xl w-full"
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