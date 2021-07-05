import {ChatEngine} from "react-chat-engine"

import ChatFeed from "./components/ChatFeed"

import "./App.css"

const App=()=>{
    return(
        <ChatEngine
        height="100vh"
        projectID="5b7966ca-ef56-45d7-9fd4-afacd269ab66"
        userName="Ani"
        userSecret="12345"
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        
        />
    )
}

export default App;

// https://chatengine.io/projects/5b7966ca-ef56-45d7-9fd4-afacd269ab66