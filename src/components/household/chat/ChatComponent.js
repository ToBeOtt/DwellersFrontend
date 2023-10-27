import React, { useState, useEffect } from 'react';
import signalRService from '../../../config/SignalRService';
import ChatService from './ChatService';
import { ArrowIcon } from '../../layout/svg/NavbarIcons'

export default function ChatComponent(props) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    signalRService.startConnection();
    signalRService.connection.invoke("JoinConversationGroup", props.conversationId);

    signalRService.connection.on("ReceiveMessage", (message) => {
    });

    return () => {
      signalRService.connection.off("ReceiveMessage");
      signalRService.connection.invoke("LeaveConversationGroup", props.conversationId);
    };
  }, [props.conversationId]);

 
  const handleSendMessage = async () => {
    if (message.trim() !== "") {
      const conversationId = props.conversationId;
      signalRService.sendMessage(message, conversationId);

      await ChatService.persistMessage(message, conversationId);
      console.log('Message persisted');

      setMessage("");

      if (props.fetchAndUpdateConversationData) {
        props.fetchAndUpdateConversationData();
      }
    }
  };



  return (
  <>
    <div className="flex justify-center mt-4 mb-2">
      <textarea
        className="border-x-4 border-hh rounded w-full xl:w-[40%] py-1 px-3 text-gray-700 
                  mb-3 focus:outline-none shadow-sm"
        rows="3"
        placeholder="Nytt meddelande.."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
      <span>
        <div className="p-3">
            <button 
              onClick={handleSendMessage}
              > 
             <span> <ArrowIcon/></span>
            </button>
        </div>
      </span>
    </div>


   
  </>
  );
}