import ChatAvatar from "../chatList/ChatAvatar"


function ChatContentItems(props) {
    return (
        <div>
            <div
                style={{ animationDelay: `1s` }}
                className={`chat__item ${props.user ? props.user : ""}`}
            >
                <div className="chat__item__content">
                    <div className="chat__msg">{props.msg}</div>
                    <div className="chat__meta">
                        <span>16 mins ago</span>
                        <span>Seen 1.03PM</span>
                    </div>
                </div>
                <ChatAvatar isOnline="active" image={props.image} />
            </div>
        </div>
    )
}

export default ChatContentItems