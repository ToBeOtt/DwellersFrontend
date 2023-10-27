import React, { useState, useEffect } from 'react';
import NoteService from '../../NoteService';
import { useNavigate } from 'react-router-dom';
import { EditIcon, DeleteIcon } from '../../../../layout/svg/FormIcons';

import Modal from 'react-bootstrap/Modal';

const NoteModal = ({ noteId, isOpen, onClose, }) => {
    const [note, setNote] = useState(null);
    const navigate = useNavigate();

    const fetchNote = async () => {  
      const data = await NoteService.getNote(noteId);
      setNote(data);
      if (data != null) {
        navigate('/NotesPage'); 
      } 
    };

      useEffect(() => {
        if (isOpen) {
          fetchNote(); 
        }
      }, [isOpen]); 

      const handleRemoveNote = async (noteId) => {
        try {
          const result = await NoteService.removeNote(noteId);
          if (result) {
            navigate('/NotesPage');
          } else {
          }
        } catch (error) {
          navigate('/ErrorPage');
        }
      };

  return (
    isOpen && note && (
    <Modal show={isOpen} onHide={onClose}>

          <div className="grid grid-cols-2 items-center m-2">
            <div className="col-span-1 flex flex-row justify-start">
                <h3 className="text-black font-titleFont inline-block ml-5">
                {note.note.name}
                </h3>
            </div>

            <div className="col-span-1 flex flex-row space-x-3 justify-end">
                <button>
                    <EditIcon />
                </button>
                <button
                   onClick={() => handleRemoveNote(note.note.noteId)}>
                   <DeleteIcon/> 
               </button>           
            </div>
          </div>

      <Modal.Body className="text-contentText font-contentFont">
        <p className="">{note.note.description}</p>
      </Modal.Body>


      <div className="grid grid-cols-2 items-center m-2">
            <div className="col-span-1 flex flex-row justify-start">
                <p className="font-contentFont text-xs">#Möte, Höst</p>
            </div>

            <div className="col-span-1 flex flex-row space-x-3 justify-end">
            {note.note.noteStatus === 0 ? (
                    <p>Avvakta</p>
                ) : note.note.noteStatus === 1 ? (
                    <p>Beror på</p>
                ) : note.note.noteStatus === 2 ? (
                    <p className="text-yellow-500">Påbörjad</p>
                ) : note.note.noteStatus === 3 ? (
                    <p className="text-green-500">Avslutad</p>
                ): (
                    <p></p> 
                )}
                
                {note.note.notePriority === 0 ? (
                    <p>Ej brådskande</p>
                ) : note.note.noteStatus === 1 ? (
                    <p>Normal</p>
                ) : note.note.noteStatus === 2 ? (
                    <p className="text-red-500">Akut</p>
                ) : (
                    <p></p> 
                )}      
            </div>
        </div>

    </Modal>
  ));
};


export default NoteModal;

