import AppLayout_HOC from "../../components/layout/AppLayout_HOC"
import PaymentTable_comp from "../../components/pages/Payout/PaymentTable_comp"
import PayoutCounter_comp from "../../components/pages/Payout/PayoutCounter_comp"


function Payout_page() {
    return (
        <AppLayout_HOC>
            <div className="flex w-full gap-5 lg:max-h-[85vh] xl:max-h-[90vh]">
                <div className="w-[70%]">
                    <div>
                        <PayoutCounter_comp />
                    </div>
                    <div className="">
                        <PaymentTable_comp />
                    </div>
                </div>
            </div>
        </AppLayout_HOC>
    )
}

export default Payout_page