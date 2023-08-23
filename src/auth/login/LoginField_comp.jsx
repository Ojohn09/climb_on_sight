import { Formik, Form, ErrorMessage, Field } from "formik"
import { loginUser } from "../../features/auth/authActions";
import { useDispatch, useSelector } from "react-redux"
import { validationSchema } from "../../schema/loginValidationSchema"
import { Link, useNavigate } from 'react-router-dom';
import { openModal } from "../../redux/slices/features/modalSlice";
import Modal from "../../components/modal/Modal";


function LoginField_comp() {

    const dispatch = useDispatch();//dispatching the action
    const isOpen = useSelector((state) => state.modal.isOpen)//getting the modalstate from the store

    const handleModalOpen = () => {
        dispatch(openModal())
    }

    const navigate = useNavigate();//using the navigate hook to redirect to dashboard
    const initialValues = {
        email: "",
        password: "",
    };//initial values for the form

    const handleSubmit = (values, { setSubmitting }) => {
        // Simulate API call delay

        setTimeout(() => {
            dispatch(loginUser(values));//dispatching the action
            console.log(values)
            setSubmitting(false);//setting the loader to false
            navigate('/dashboard');//redirecting to dashboard
        }, 1000);
    };

    return (
        <div className="bg-white rounded-xl flex w-full h-full">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                className=''>
                <Form className='flex flex-col items-center justify-center gap-4 w-[40%] mx-auto'>
                    <div className='lg:mt-10 xl:mt-16 xl:mb-8 xl:text-base text-[12px]  font-face-mr'>
                        CLIMB ONSIGHT
                    </div>

                    <div className='my-[20px] text-center'>
                        <h1 className='xl:text-[50px] lg:text-[30px] mb-4 font-bold '>Welcome</h1>
                        <h1 className='xl:text-[24px] font-semibold'>Log in to climb on sight</h1>
                    </div>
                    <div className="w-full flex flex-col gap-4 xl:gap-8">
                        <div className='w-full'>
                            <Field
                                type='email'
                                name="email"
                                label="email"
                                margin="normal"
                                className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                placeholder='Email'
                                required
                            />
                            <ErrorMessage name="email" component="div" className="text-[10px] text-red-700" />
                        </div>

                        <div className='w-full'>
                            <Field type='password'
                                name="password"
                                label="password"
                                margin="normal"
                                className='rounded-xl p-3 border-gray-300 border outline-none w-full'
                                placeholder='Password'
                                required
                            />
                            <ErrorMessage name="password" component="div" className="text-[10px] text-red-700" />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-black text-white font-semibold py-3 px-4 xl:mb-4 rounded-xl w-full"
                    >
                        Continue
                    </button>

                    <div>
                        <p
                            onClick={handleModalOpen}
                            className='hover:underline cursor-pointer'>Don't have an account?</p>
                    </div>
                    <Modal>
                        <div className="w-[70%] mx-auto flex flex-col items-center">
                            <div className="text-black text-xs font-bold">CLIMBONSIGHT</div>
                            <div className=" text-center text-black my-4 font-normal">Great!!! We are looking foward to have you join our team, Click on the button below to get started</div>
                            <Link to='/signup' className="self-stretch bg-black rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                <div className="text-stone-50 p-3 font-normal">Get started</div>
                            </Link>
                        </div>
                    </Modal>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginField_comp