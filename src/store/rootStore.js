import ChatStore from "./chat"
import ConversationStore from "./conversations"
import LoginStore from "./login"
import RegisterStore from "./register"

class RootStore {
    login = new LoginStore()
    register = new RegisterStore()
    conv = new ConversationStore()
    chat = new ChatStore()
}

export default RootStore