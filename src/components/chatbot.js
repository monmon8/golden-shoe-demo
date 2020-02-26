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
      trigger: "Asking what is your query"
    },
    {
      id: "Asking what is your query",
      message:
        "Hi {previousValue}, Please click on one of the following options",
      trigger: "Displaying options to help"
    },
    {
      id: "Displaying options to help",
      options: [
        {
          value: "return process",
          label: "Return process",
          trigger: "Show return process"
        },
        {
          value: "delivery dates and time",
          label: "Delivery dates and time",
          trigger: "Show delivery date and time process"
        },
        {
          value: "anything else",
          label: "Anything else",
          trigger: "Show anything else"
        }
      ]
    },
    {
      id: "Show return process",
      message:
        "You have 30 days from the shipping date of your order to return your purchase from Goldenshoe free of charge.",
      end: true
    },
    {
      id: "Show delivery date and time process",
      message: `Home delivery:

        Standard delivery - 4.95 £ / FREE (Orders over 50 £)
        
        The estimated delivery period is 2-4 business days, depending on the delivery address.
        
        On the same day of the purchase - 9.95 £
        
        The estimated delivery period is 1-2 business days.`,
      end: true
    },
    {
      id: "Show anything else",
      message:
        "You can call our customer service helpline on 09001919192 from 9am to 5pm",
      end: true
    }
  ];
  return <ChatBot steps={steps} {...config} />;
}
export default Chatbot;
