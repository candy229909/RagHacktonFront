import { ReactChatbot } from "@vectara/react-chatbot";

export default function Chat() {

  
    return (
      <div className="App">
        <h1>Material Support</h1>
        <h2>Choose and design your own needle</h2>

      <ReactChatbot
        customerId="1866367850"
        corpusId="5"
        apiKey="zwt_bz6DahCpCW3mNHwmXpYDU2pwhfaHgYFB_tlPLg"
        title="Vectara Docs Chatbot"
        placeholder='Try "What is Vectara?" or "How does RAG work?"'
        inputSize="large"
        enableStreaming={true}
        
      />
      </div>    
    );
  }