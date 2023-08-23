
const FormStepper = ({ steps, currentStep }) => {

    return (
        <div className="lg:w-[75%] h-fit mx-auto">
            <div className="flex items-center justify-center">
                {steps.map((steps, index) => (
                    <div
                        key={index}
                        className={`${index <= currentStep ? '' : 'text-gray-400'
                            } rounded-lg cursor-pointer`}
                    >
                        <div className='flex flex-col items-center w-[90%]'>
                            <p className={`${index <= currentStep ? 'bg-black text-white' : 'text-black'} p-2 rounded-full text-12px`}>{steps.icon}</p>
                            < p className='text-[7px] sm:text-[10px] text-center w-fit'>{steps.text}</p>
                        </div>
                    </div>
                ))}

                {/* <div className="flex justify-between">

                    {
                        steps?.map((steps, i) => (
                            <div key={i} className={`${index <= currentStep ? '' : ''} step-item cursor-pointer`}>
                                <p>{steps.icon}</p>
                                <p>{steps.text}</p>
                            </div>
                        ))
                    }

                </div> */}

            </div>
        </div>
    );
};

export default FormStepper;