import AppLayout_HOC from "../../components/layout/AppLayout_HOC"
import PaymentTable_comp from "../../components/pages/Payout/PaymentTable_comp"
import PayoutCounter_comp from "../../components/pages/Payout/PayoutCounter_comp"
import PayoutMenu_comp from "../../components/pages/Payout/PayoutMenu_comp"


function Payout_page() {
    return (
        <AppLayout_HOC>
            <div className="flex flex-col lg:flex-row w-full gap-5 lg:max-h-[85vh] xl:max-h-[90vh]">
                <div className="lg:w-[75%]">
                    <div>
                        <PayoutCounter_comp />
                    </div>
                    <div className="">
                        <PaymentTable_comp />
                    </div>
                </div>
                <div className="lg:w-[25%]">
                    <PayoutMenu_comp />
                </div>
            </div>
        </AppLayout_HOC>
    )
}

export default Payout_page