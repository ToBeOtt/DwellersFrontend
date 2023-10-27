import { useEffect, useState } from 'react';
import ChatService from './ChatService';
import ChatComponent from './ChatComponent';
import MessageBox from './design/MessageBox';
import { formatDate } from '../../utils/FormatTime';
import FetchUserData from '../../utils/FetchUserData';



export default function ViewConversation() {
    const [messages, setMessages] = useState([]);
    const [conversationId, setConversationId] = useState('');
    const [currentUser, setCurrentUser] = useState('');

    const fetchUserData = async () => {
      try {
        const userData = await FetchUserData.getUserData();
        setCurrentUser(userData.user);
        console.log('User data in storage');
      } catch (error) {
        console.error('Error fetching userdata:', error);
      }
    };

    useEffect(() => {
      fetchUserData();
    }, []);
    

  const fetchAndUpdateConversationData = async () => {
    try {
      const data = await ChatService.getHouseholdConversation();
      const conversationHistory = data;
      setMessages(conversationHistory);
      setConversationId(data.conversationId);
      console.log('Message history in data storage');
    } catch (error) {
      console.error('Error fetching conversation data:', error);
    }
  };

  useEffect(() => {
    fetchAndUpdateConversationData();
  }, []);


        return (
          <>
        
              <ChatComponent
                    key={conversationId}
                    conversationId={conversationId}
                    fetchAndUpdateConversationData={fetchAndUpdateConversationData} 
              />


              {Array.isArray(messages.allMessages) &&
                messages.allMessages
                  .sort((b, a) => new Date(a.timestamp) - new Date(b.timestamp))
                  .map((message) => (
                    
                     
                    <div key={message.id} className="message flex justify-center">
        
                    <MessageBox
                         currentUser={currentUser.id}
                         messageSender={message.user.id}
                      >
                    
                    <section className="post-details my-1 mx-3">
                        <p className="font-titleFont text-stone-900 text-sm p-1">
                            {message.user.alias}
                        </p>
                        <p className="font-contentFont text-stone-700 text-xs">
                            {message.messageText}
                        </p>
                      </section>
                    
                      
                     <section className="post-details text-xs text-stone-400 flex justify-end mx-4">
                       
                            <p>
                                {formatDate(message.timestamp)} 
                            </p>
         
                     </section>
                     </MessageBox>
                    
                    </div>
                    
                  ))}
           
          </>
        );
}
