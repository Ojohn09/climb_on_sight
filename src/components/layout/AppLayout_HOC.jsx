import AppHeader_HOC from "./AppHeader_HOC"
import SideNav_HOC from "./SideNav_HOC"


function AppLayout_HOC(props) {
    return (
        <div className="w-full bg-[#FBF7F4]">
            <div className="w-[95%] mx-auto bg-[#FBF7F4]">
                <main className="flex items-start gap-4 px-4">
                    <aside className="p-2">
                        <SideNav_HOC />
                    </aside>
                    <section className="bg-[#FBF7F4] w-[97%] h-[100vh] ml-[30px] lg:ml-[40px] p-2">
                        <header className="h-[10%]">
                            <AppHeader_HOC />
                        </header>
                        <section className=''>{props.children}</section>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default AppLayout_HOC