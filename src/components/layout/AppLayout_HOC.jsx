import AppHeader_HOC from "./AppHeader_HOC"
import SideNav_HOC from "./SideNav_HOC"


function AppLayout_HOC(props) {
    return (
        <div className="w-full bg-[#FBF7F4]">
            <div className="max-w-[1500px] mx-auto bg-[#FBF7F4]">
                <main className="flex items-start gap-2 p-4">
                    <aside className="">
                        <SideNav_HOC />
                    </aside>
                    <section className="w-[97%] min-h-[98vh] ml-[40px] lg:ml-[50px]">
                        <header className="">
                            <AppHeader_HOC />
                        </header>
                        <section className="p-5">{props.children}</section>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default AppLayout_HOC