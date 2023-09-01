import ChatListItems from "./ChatListItems"
import { allChatUsers } from "../../../../utils/mockData"
import { useState } from "react";


function ChatList() {

    console.log(allChatUsers)
    const [allChats] = useState(allChatUsers);



    return (
        <div className="p-5 3xl:p-7 4xl:p-9 py-6">
            <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl 3xl:text-5xl 4xl:text-6xl py-1 4xl:py-2">Chats</h1>


            {/* search message */}
            <div className="flex flex-col">
                <div className="bg-gray-100 rounded-4xl flex gap-1 items-center p-2 rounded-md 4xl:text-xl 4xl:p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4" viewBox="0 0 18 16" fill="none">
                        <path d="M8.73472 14.3037C4.32316 14.3037 0.731445 11.0941 0.731445 7.15186C0.731445 3.20962 4.32316 0 8.73472 0C13.1463 0 16.738 3.20962 16.738 7.15186C16.738 11.0941 13.1463 14.3037 8.73472 14.3037ZM8.73472 1.04661C4.96342 1.04661 1.90266 3.78874 1.90266 7.15186C1.90266 10.515 4.96342 13.2571 8.73472 13.2571C12.506 13.2571 15.5668 10.515 15.5668 7.15186C15.5668 3.78874 12.506 1.04661 8.73472 1.04661Z" fill="currentColor" />
                        <path d="M16.9334 15.0029C16.785 15.0029 16.6366 14.954 16.5195 14.8494L14.9579 13.4539C14.7315 13.2515 14.7315 12.9166 14.9579 12.7143C15.1843 12.5119 15.5591 12.5119 15.7856 12.7143L17.3472 14.1097C17.5736 14.3121 17.5736 14.647 17.3472 14.8494C17.2301 14.954 17.0817 15.0029 16.9334 15.0029Z" fill="currentColor" />
                    </svg>
                    <input type="text" placeholder="Search messages" className="w-full bg-gray-100 px-2" />
                </div>

                <p className="font-medium text-gray-300 3xl:text-base lg:text-sm my-2">All messages</p>

                {/* chat list items */}
                <div className="lg:max-h-[50vh] xl:max-h-[60vh] 3xl:max-h-[65vh] 4xl:max-h-[70%] scrollbar-hide">
                    <div className="mt-30 overflow-auto flex-col flex gap-4">
                        {allChats.map((item, index) => (
                            <ChatListItems
                                name={item.name}
                                key={item.id}
                                animationDelay={index + 1}
                                active={item.active ? "active" : ""}
                                isOnline={item.isOnline ? "active" : ""}
                                image={item.image} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChatList