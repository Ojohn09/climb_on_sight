import AppHeader_HOC from "./AppHeader_HOC"
import SideNav_HOC from "./SideNav_HOC"


function AppLayout_HOC(props) {
    return (
        <main className="h-screen w-full flex items-start gap-12 px-4 py-2 bg-[#FBF7F4]">
            <aside className="">
                <SideNav_HOC />
            </aside>

            <div className="h-full w-full ml-[20px]">

                <header className="h-[10%] w-full">
                    <AppHeader_HOC />
                </header>

                <div className='h-[90%] w-full'>
                    {props.children}
                </div>
            </div>
        </main>

    )
}

export default AppLayout_HOC