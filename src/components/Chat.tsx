import Image from "next/image";
import React, { useState } from "react";
import { FaComments } from "react-icons/fa";

const ContactIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ text: string; sender: string }>>([]);
  const [predefinedMessages, setPredefinedMessages] = useState<string[]>([
    "What are your qualifications?",
    "Tell me about your experience.",
    "I want to talk over a call"
  ]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = (message: string) => {
    if (message.trim() !== "") {
      // Determine the type of input message and generate a response accordingly
      let response = "";
      switch (message.toLowerCase()) {
        case "what are your qualifications?":
          response = "I have a Bachelor's degree in Accountancy Honours.";
          break;
        case "tell me about your experience.":
          response = "I have worked on various web and mobile development projects using React, Node.js, nextjs etc allover I have expereriene over 1 years.";
          break;
        case "i want to talk over a call":
          response = "Sure, I'd be happy to discuss things over a call. Please provide your contact information.";
          break;
        default:
          response = "I'm sorry, I didn't quite catch that. How can I help you?";
          break;
      }

      setTimeout(() => {
        // Send the user's message and generate a response
        const newChatMessages = [
          ...chatMessages,
          { text: message, sender: "user" },
          { text: response, sender: "bot" }, // Add bot response
        ];
        setChatMessages(newChatMessages);
        setMessage("");
      }, 500);
    }
  };

  const handleQuickMsg = (msg: string) => {
    const newChatMessages = [
      ...chatMessages,
      { text: msg, sender: "user" },
    ];
    setChatMessages(newChatMessages);
    handleSendMessage(msg); // Send the predefined message
  };

  return (
    <div>
      {isChatOpen ? (
        <div className="relative ms-10">
          <div className="chat-box text-slate-600 bg-white shadow-lg rounded-lg sm:right-0 mx-4 w-4/5  sm:w-4/5 md:w-2/3  lg:w-1/3 xl:w-1/4 h-2/3 fixed bottom-8 right-8 p-4">
            <div className="chat-header flex justify-between items-center border-b pb-2 mb-2">
              <h2 className="text-lg font-semibold">Chat with me</h2>
              <button
                onClick={toggleChat}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <div className="h-4/5 overflow-hidden">
              <div className="chat-messages w-full h-full overflow-y-auto">
                {chatMessages[0] ?  chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`message w-max max-w-full  ${
                      msg.sender === "user" ? "bg-green-200 ms-auto" : "bg-violet-200 me-auto"
                    } p-2 rounded mb-2`}
                  >
                    {msg.text}
                  </div>
                )): 
                (
                <div className="w-full">
                  <div className="h-20 w-20 mx-auto rounded-full m-2 overflow-hidden">
                  <Image
                    src="/assets/profile-img.png"
                    alt="VPN Illustrasi"
                    quality={100}
                    width={612}
                    height={383}
                    layout="responsive"
                  />
                  </div>
                  <p className="">Hi, Im a bot from Rajshekhar, I have some predefined answers for some relevant questions. lets talk !</p>
                </div>
                )}
              </div>
            </div>
            <div className="chat-input fixed bottom-8 right-8 sm:right-0 mx-4 w-4/5  sm:w-4/5 md:w-2/3  lg:w-1/3 xl:w-1/4 p-2">
              <div className="w-full">
              {predefinedMessages
                .filter((msg) => !chatMessages.some((chatMsg) => chatMsg.text.includes(msg)))
                .map((msg, index) => (
                  <div
                    key={index}
                    className="me-2 w-max bg-purple-200 me-auto p-2 rounded mb-2 hover:bg-purple-300"
                    onClick={() => handleQuickMsg(msg)}
                  >
                    {msg}
                  </div>
                ))
              }
              </div>
              <div className="flex w-full">
                <textarea
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-grow h-12 border p-2 rounded-l focus:outline-none"
                />
                <button
                  onClick={() => handleSendMessage(message)}
                  className="bg-violet-500 text-white p-2 w-20 rounded-r hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="contact-icon h-20 w-20 bg-violet-800 fixed bottom-8 right-8 p-6 rounded-full hover:bg-violet-700 hover:bottom-10"
          onClick={toggleChat}
        >
          <FaComments size={32} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default ContactIcon;
