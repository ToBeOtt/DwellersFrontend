import { useState, useEffect } from 'react';
import NoteholderModal from './NoteholderModal.js';
import NoteService from '../../NoteService.js';

export default function MeetingNoteholders() {
    const [meetingNoteholders, setMeetingNoteholders] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNoteholderId, setSelectedNoteholderId] = useState(null);

    const handleModalOpen = (noteholderId) => {
        console.log(noteholderId)
        setSelectedNoteholderId(noteholderId);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    
    useEffect(() => {
      NoteService.getNoteholders(0)
        .then(data => {
          const noteholderData = data.noteholders;
          setMeetingNoteholders(noteholderData);
        });
    }, []);


    return (
        <>
    
          {Array.isArray(meetingNoteholders) && meetingNoteholders.map((point, index) => (
            <div className="text-xs text-stone-500 font-bold py-2 px-2 rounded"
            type="button" 
                onClick={() => handleModalOpen(point.noteholderId)}
            >
              <p className="ml-2">{point.name}</p>
            </div>
          ))}
    
          <NoteholderModal
            noteholderId={selectedNoteholderId} 
            isOpen={isModalOpen}
            onClose={handleModalClose}
          />
        </>
      );
    }
