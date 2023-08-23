import AppLayout_HOC from '../../components/layout/AppLayout_HOC'
import AddEventCalender_comp from '../../components/pages/Calender/AddEventCalender_comp'
import CalenderEvents_comp from '../../components/pages/Calender/CalenderEvents_comp'

function Calender_page() {
    return (
        <AppLayout_HOC>
            <div className='flex h-full flex-col lg:flex-row bg-white gap-5 px-2 pt-2 rounded-t-xl'>


                <div className="lg:w-[25%] h-full">
                    <AddEventCalender_comp />
                </div>
                <div className="lg:w-[75%]">
                    <CalenderEvents_comp />
                </div>
            </div>
        </AppLayout_HOC>
    )
}

export default Calender_page