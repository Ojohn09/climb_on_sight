import AppHeader_HOC from "./AppHeader_HOC"
import SideNav_HOC from "./SideNav_HOC"


function AppLayout_HOC(props) {
    return (
        <div className="w-full bg-[#FBF7F4]">
            <div className="max-w-[1500px] mx-auto bg-[#FBF7F4]">
                <main className="flex items-start gap-2 px-4">
                    <aside className="p-5">
                        <SideNav_HOC />
                    </aside>
                    <section className="w-[97%] min-h-[98vh] ml-[30px] lg:ml-[40px]">
                        <header className="">
                            <AppHeader_HOC />
                        </header>
                        <section className="mt-24 sm:mt-16 ">{props.children}</section>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default AppLayout_HOC