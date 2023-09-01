

function ChatAvatar(props) {
    return (
        <div className="">
            <div className="h-full w-full overflow-hidden relative">
                <img src={props.image} alt="#" className="lg:w-10 3xl:w-14 h-auto object-cover object-center rounded-full" />
            </div>
            <span className={`isOnline ${props.isOnline}`}></span>
        </div>
    )
}

export default ChatAvatar