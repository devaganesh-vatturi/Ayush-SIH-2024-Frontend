// import { useState } from 'react';
// // import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
// import Header from './Header';
// import Footer from './Dashboard comps/Footer';
// import '../components/styles/AiChatBot.module.css';
// const systemMessage = {
//   role: 'system',
//   content: "Explain things like you're talking to a software professional with 2 years of experience."
// };

// function AiChatBot() {
//   const [messages, setMessages] = useState([
//     {
//       message: "Hello, I'm an Aayush 2.0 AI chat-model (powered by Gemini AI)! Ask me anything. I am from India.",
//       sentTime: 'just now',
//       sender: 'Gemini AI',
//     },
//   ]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [showLogo, setShowLogo] = useState(true); // For showing/hiding the logo initially

//   const handleSend = async (message) => {
//     const newMessage = {
//       message,
//       direction: 'outgoing',
//       sender: 'user',
//     };

//     const newMessages = [...messages, newMessage];
//     setMessages(newMessages);
//     setIsTyping(true);

//     await processMessageToBackend(newMessages);
//     setShowLogo(false); // Hide the logo after the first message
//   };

//   async function processMessageToBackend(chatMessages) {
//     const apiMessages = chatMessages.map((messageObject) => ({
//       role: messageObject.sender === 'Assistant' ? 'assistant' : 'user',
//       content: messageObject.message,
//     }));

//     try {
//       const response = await fetch('http://localhost:5002/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           messagesreq: apiMessages,
//         }),
//       });

//       const data = await response.json();

//       setMessages([...chatMessages, {
//         message: data.data,
//         sender: 'Assistant',
//       }]);
//     } catch (error) {
//       console.error('Error communicating with the server:', error);
//     } finally {
//       setIsTyping(false);
//     }
//   }

  
//   return (
//     <div className="Appjsl">
//       <Header/>

//       <div style={{ paddingTop:'50px', position: 'relative', height: '95vh', width: '99vw' }}>
    
//       <MainContainer>
//           <ChatContainer>
//             <MessageList
//               scrollBehavior="smooth"
//               typingIndicator={isTyping ? <TypingIndicator content="Aayush Chatbot is typing" /> : null}
//             >
//               {messages.map((message, i) => (
//                 <Message key={i} model={message} />
//               ))}
//             </MessageList>
//             <MessageInput placeholder="Type message here" onSend={handleSend} />
//           </ChatContainer>
//         </MainContainer>
//        </div>
//        <Footer/>
//        </div>

//   );
// }

// export default AiChatBot;





import { useState } from 'react';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import Header from './Header';
import Footer from './Dashboard comps/Footer';
import  './styles/AiChatBot.css'; // Import the CSS module

const systemMessage = {
  role: 'system',
  content: "Explain things like you're talking to a software professional with 2 years of experience."
};

function AiChatBot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm an Aayush 2.0 AI chat-model (powered by Gemini AI)! Ask me anything. I am from India.",
      sentTime: 'just now',
      sender: 'Gemini AI',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showLogo, setShowLogo] = useState(true); // For showing/hiding the logo initially

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);

    await processMessageToBackend(newMessages);
    setShowLogo(false); // Hide the logo after the first message
  };

  async function processMessageToBackend(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => ({
      role: messageObject.sender === 'Assistant' ? 'assistant' : 'user',
      content: messageObject.message,
    }));

    try {
      const response = await fetch('http://localhost:5002/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messagesreq: apiMessages,
        }),
      });

      const data = await response.json();

      setMessages([...chatMessages, {
        message: data.data,
        sender: 'Assistant',
      }]);
    } catch (error) {
      console.error('Error communicating with the server:', error);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className="AppContainer">
      <Header />
      <div className="ChatArea">
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="Aayush Chatbot is typing" /> : null}
            >
              {messages.map((message, i) => (
                <Message id="chat-message" key={i} model={message} />
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
      <Footer />
    </div>
  );
}

export default AiChatBot;

