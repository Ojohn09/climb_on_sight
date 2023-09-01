import ChatAvatar from "./ChatAvatar";


function ChatListItems(props) {
    const selectChat = (e) => {
        const children = Array.from(e.currentTarget.parentNode.children);
        children.forEach((child) => {
            child.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    };

    return (
        <div
            style={{ animationDelay: `0.${props.animationDelay}s` }}
            onClick={selectChat}
            className={`flex p-3 items-center border rounded-3xl gap-1 cursor-pointer transition-transform duration-300 chatlist__item ${props.active ? props.active : ""}`}
        >
            <ChatAvatar
                image={props.image ? props.image : "http://placehold.it/80x80"}
                isOnline={props.isOnline}
            />

            <div className="m-0 p-0 text-black font-semibold text-[8px] xl:text-xs 2xl:text-sm 3xl:text-base w-full">
                <div className="flex justify-between items-center">
                    <p>{props.name}</p>
                    <span className="m-0 p-0 text-gray-500 text-[8px] xl:text-[10px] 2xl:text-xs 3xl:text-xs block">11:21pm</span>
                </div>
                <div className="flex justify-between items-center h-auto mt-1">
                    <div>
                        <p className="text-gray-400 text-[6px] xl:text-[8px] 2xl:text-[10px] 3xl:text-xs block">How are you?</p>
                    </div>
                    <div className="h-fit">
                        <button className="bg-black rounded-full text-[8px] 2xl:text-[10px] 3xl:text-xs px-1.5 h-fit text-white">3</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ChatListItems