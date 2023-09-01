import AppLayout_HOC from "../../components/layout/AppLayout_HOC"
import ChatContent from "../../components/pages/Chat/chatContent/ChatContent"
import ChatList from "../../components/pages/Chat/chatList/ChatList"
import ChatUserProfile from "../../components/pages/Chat/chatBody/ChatUserProfile"


function Chat_page() {


    return (
        <AppLayout_HOC>
            <div className="pt-5 px-5 h-full">
                <div className="bg-white h-full w-full px-6 flex rounded-t-[40px]">
                    <div className="w-[25%] border-r">
                        <ChatList />
                    </div>


                    <div className="w-[40%]">
                        <ChatContent />
                    </div>


                    <div className="w-[30%]">
                        <ChatUserProfile />
                    </div>
                </div>
            </div>
        </AppLayout_HOC>
    )
}

export default Chat_page