import AppLayout_HOC from "../../components/layout/AppLayout_HOC"
import Cards_components from "../../components/pages/Dashboard/Cards_components"
import DateAndNotification_comp from "../../components/pages/Dashboard/DateAndNotification_comp"
import NewMessages_comp from "../../components/pages/Dashboard/NewMessages_comp"
import TodayEvent_comp from "../../components/pages/Dashboard/TodayEvent_comp"


function Dashboard_page() {
    return (
        <AppLayout_HOC>
            <div className="h-full w-full items-start gap-6 lg:flex">
                <div className="h-full lg:w-[70%]">
                    <Cards_components />
                    <DateAndNotification_comp />
                    <NewMessages_comp />
                </div>
                <div className="h-full lg:w-[30%]">
                    <TodayEvent_comp />
                </div>
            </div>
        </AppLayout_HOC>
    )
}

export default Dashboard_page