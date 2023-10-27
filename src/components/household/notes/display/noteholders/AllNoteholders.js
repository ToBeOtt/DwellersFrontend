import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteholderModal from './NoteholderModal.js';
import NoteService from '../../NoteService.js';

export default function AllNoteholders() {
    const [noteholders, setNoteholders] = useState([]);
    const navigate = useNavigate();

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
      NoteService.getNoteholders()
        .then(data => {
          const noteholderData = data.noteholders;
          setNoteholders(noteholderData);
        });
    }, []);


    return (
        <>
    
          {Array.isArray(noteholders) && noteholders.map((point, index) => (
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
