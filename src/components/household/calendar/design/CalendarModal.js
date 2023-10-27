import React, { useState, useEffect } from 'react';
import CalendarService from '../CalendarServices';
import { useNavigate } from 'react-router-dom';
import { EditIcon, DeleteIcon } from '../../../layout/svg/FormIcons';

import Modal from 'react-bootstrap/Modal';

const CalendarModal = ({ eventId, isOpen, onClose, }) => {
    const [event, setEvent] = useState(null);
    const navigate = useNavigate();

    const fetchEvent = async () => {  
      const data = await CalendarService.getEvent(eventId);
      setEvent(data);
    };

      useEffect(() => {
        if (isOpen) {
          fetchEvent(); 
        }
      }, [isOpen]); 

      const handleRemoveNote = async (eventId) => {
        try {
          const result = await CalendarService.removeNote(eventId);
          if (result) {
            navigate('/NotesPage');
          } else {
          }
        } catch (error) {
          navigate('/ErrorPage');
        }
      };

  return (
    isOpen && event && (
    <Modal show={isOpen} onHide={onClose}>

          <div className="grid grid-cols-2 items-center m-2">
            <div className="col-span-1 flex flex-row justify-start">
                <h3 className="text-black font-titleFont inline-block ml-5">
                {event.event.eventDate}
                </h3>
            </div>

            <div className="col-span-1 flex flex-row space-x-3 justify-end">
                <button>
                    <EditIcon />
                </button>
                <button
                   onClick={() => handleRemoveNote(event.event.eventId)}>
                   <DeleteIcon/> 
               </button>           
            </div>
          </div>

      <Modal.Body className="text-contentText font-contentFont m-3">
  
        <h3 className="text-black font-titleFont mb-2">
            {event.event.title}
        </h3>

        <p className="text-xs">{event.event.description}</p>
      </Modal.Body>


      <div className="grid grid-cols-2 items-center m-2">
        <div className="col-span-1 flex flex-row justify-start">
            <p className="font-contentFont text-xs">Taggar</p>
        </div>

        <div className="col-span-1 flex flex-row justify-end">
            <p className="font-contentFont text-xs">{event.eventScope}</p>
        </div>
    </div>

    </Modal>
  ));
};


export default CalendarModal;

