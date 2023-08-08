import AppHeader_HOC from "./AppHeader_HOC"
import SideNav_HOC from "./SideNav_HOC"


function AppLayout_HOC(props) {
    return (
        <div>
            <div className="max-w-[1920px] mx-auto bg-[#FBF7F4]">
                <main className="flex items-start gap-2 p-4">
                    <aside className="">
                        <SideNav_HOC />
                    </aside>
                    <section className="w-full min-h-[98vh] ml-[80px]">
                        <header className="">
                            <AppHeader_HOC />
                        </header>
                        <section className="p-5 mt-4">{props.children}</section>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default AppLayout_HOC