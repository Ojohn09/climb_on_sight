

const FormStepper = ({ steps, currentStep }) => {

    return (
        <div className="flex space-x-4 w-[70%] mx-auto">
            {steps.map((steps, index) => (
                <div
                    key={index}
                    className={`${index === currentStep ? '' : 'text-gray-400'
                        } px-4 py-2 rounded-lg cursor-pointer`}
                >
                    <div className='flex flex-col items-center'>
                        <p className={`${index === currentStep ? 'bg-black text-white' : 'text-black'} p-2 rounded-full`}>{steps.icon}</p>
                        < p className='w-[100%] text-[12px] text-center'>{steps.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FormStepper;