
import * as Yup from 'yup';

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
    "application/pdf"
];

export const personalInformationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.number()
        .typeError('Phone number must be a number')
        .integer('Phone number must be an integer')
        .required('Phone number is required'),
});

export const accountSettingsSchema = Yup.object().shape({
    userName: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
});

export const guidienceSchema = Yup.object().shape({
    guidingInsurance: Yup.mixed()
        .required("A file is required")
        .test(
            "fileSize",
            "File too large",
            value => value && value.size <= FILE_SIZE
        )
        .test(
            "fileFormat",
            "Unsupported Format",
            value => value && SUPPORTED_FORMATS.includes(value.type)
        ),
    guidingCertificate: Yup.mixed()
        .required("A file is required")
        .test(
            "fileSize",
            "File too large",
            value => value && value.size <= FILE_SIZE
        )
        .test(
            "fileFormat",
            "Unsupported Format",
            value => value && SUPPORTED_FORMATS.includes(value.type)
        )
});

export const reviewSchema = Yup.object().shape({
    links: Yup.array()
        .of(Yup.string().url('Invalid URL').required('Review link is required'))
        .min(1, 'Please provide at least one review link'),
});

export const experienceSchema = Yup.object().shape({
    rockClimbingExperience: Yup.number()
        .typeError('Experience must be a number')
        .integer('Experience must be an integer')
        .required('Rock climbing experience is required'),
    iceClimbingExperience: Yup.number()
        .typeError('Experience must be a number')
        .integer('Experience must be an integer')
        .required('Ice climbing experience is required'),
});

export const guideReferenceSchema = Yup.object().shape({
    referenceName: Yup.string().required('Referee name is required'),
    referenceEmail: Yup.string().email('Invalid email').required('Referee email is required'),
    referencePhoneNumber: Yup.number()
        .typeError('Phone number must be a number')
        .integer('Phone number must be an integer')
        .required('Referee phone number is required'),
});



// Combine all the schemas into one comprehensive schema
export const signUpFormSchema = Yup.object().shape({
    personalInformation: personalInformationSchema,
    accountSettings: accountSettingsSchema,
    guidience: guidienceSchema,
    customerReview: reviewSchema,
    experience: experienceSchema,
    guideReference: guideReferenceSchema,

});
