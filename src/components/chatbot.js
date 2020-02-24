import React from "react";
import ChatBot from "react-simple-chatbot";

function Chatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to Golden Shoe shop",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "Please type your name?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Displaying options for help"
    },
    {
      id: "Displaying options for help",
      message: "Hi {previousValue}, How Can I help you",
      trigger: "Done"
    },

    {
      id: "Done",
      message: "Have a great day !!",
      end: true
    }
  ];
  return <ChatBot steps={steps} {...config} />;
}
export default Chatbot;
