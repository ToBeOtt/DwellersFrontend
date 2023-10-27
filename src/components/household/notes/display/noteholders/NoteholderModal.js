import React, { useState, useEffect } from 'react';
import NoteService from '../../NoteService';
import { useNavigate } from 'react-router-dom';
import { EditIcon, DeleteIcon,  } from '../../../../layout/svg/FormIcons';
import Modal from 'react-bootstrap/Modal';
import AddNote from '../../add/AddNote';

const NoteholderModal = ({ noteholderId, isOpen, onClose, }) => {
    const [noteholder, setNoteholder] = useState(null);
    const navigate = useNavigate();
    const [hide, setHide] = useState(false);

    const fetchNoteholder = async () => {
      const data = await NoteService.getNoteholder(noteholderId);
      setNoteholder(data);
      if (data != null) {
        navigate('/NotesPage'); 
      }};

      const handleAddNote = async() => {
        setHide(true);
      }

      useEffect(() => {
        if (isOpen) {
          fetchNoteholder(); 
        }
      }, [isOpen]); 

      const handleRemoveNoteholder = async (noteId) => {
        try {
          const result = await NoteService.removeNote(noteId);
          if (result) {
            navigate('/NotePage');
          } else {
          }
        } catch (error) {
          navigate('/ErrorPage');
        }
      };

      const handleRemoveNote = async (noteId) => {
        try {
          const result = await NoteService.removeNote(noteId);
          if (result) {
            navigate('/NotePage');
          } else {
          }
        } catch (error) {
          navigate('/ErrorPage');
        }
      };

  return (
    isOpen && noteholder && (
    <Modal 
      show={isOpen} 
      size="lg"
      backdrop="static" 
      onHide={() => {
        onClose(); 
        setHide(false); 
      }}
      >
         {!hide && (
          <>
          <div className="grid grid-cols-2 items-center m-2">
            <div className="col-span-1 flex flex-row justify-start">
                <h1 className="text-black text-4xl font-titleFont inline-block ml-5">
                {noteholder.noteholder.name}
                </h1>
            </div>

            <div className="col-span-1 flex flex-row space-x-3 justify-end">
                <button>
                    <EditIcon />
                </button>
                <button
                   onClick={() => handleRemoveNoteholder(noteholder.noteholder.noteholderId)}>
                   <DeleteIcon/> 
               </button>           
            </div>
          </div>
          <hr></hr>

          <Modal.Body>
            {Array.isArray(noteholder.notes) &&
              noteholder.notes.map((point, index) => (
                <>
                <section  className={`${
                                    point.notePriority === 0 ? ' ' : ''
                                  }${
                                    point.notePriority === 1 ? 'bg-green-50 ' : ''
                                  }${
                                    point.notePriority === 2 ? 'bg-red-50 ' : ''
                                  }m-3 p-3 border-y-4 border-stone-100 rounded`}
                                >
                      <div className="grid grid-cols-2 items-center">
                        <div className="col-span-1 flex flex-row justify-start">
                            <h3 className="text-black text-2xl font-titleFont inline-block ml-2 mb-2">
                          {point.name}
                          </h3>
                      </div>
          
                      <div className="col-span-1 flex flex-row space-x-3 justify-end">
                          <button>
                              <EditIcon />
                          </button>
                          <button
                            onClick={() => handleRemoveNote(point.noteId)}>
                            <DeleteIcon/> 
                        </button>           
                      </div>
                    </div>
        
                  <p className="">{point.description}</p>
    
                  <div className="grid grid-cols-2 m-2">
                    <div className="col-span-1 flex flex-row items-center justify-start">
                        <p className="font-contentFont text-xs">#Möte, Höst</p>
                    </div>

                    <div className="col-span-1 flex flex-row text-xs space-x-3 items-center justify-end">
                    {point.noteStatus === 0 ? (
                            <p>Avvakta</p>
                        ) : point.noteStatus === 1 ? (
                            <p>Beror på</p>
                        ) : point.noteStatus === 2 ? (
                            <p className="text-yellow-500">Påbörjad</p>
                        ) : point.noteStatus === 3 ? (
                            <p className="text-green-500">Avslutad</p>
                        ): (
                            <p></p> 
                        )}
                        
                        {point.notePriority === 0 ? (
                            <p>Ej brådskande</p>
                        ) : point.noteStatus === 1 ? (
                            <p>Normal</p>
                        ) : point.noteStatus === 2 ? (
                            <p className="text-red-500">Akut</p>
                        ) : (
                            <p></p> 
                        )}      
                    </div>
                </div>
              </section>
                
            </>
            ))}
            
          </Modal.Body>

      <div className="grid grid-cols-2 items-center m-2">
            <div className="col-span-1 flex flex-row justify-start">
                <p className="font-contentFont text-xs">#Möte, Höst</p>
            </div>

            <div className="col-span-1 flex flex-row space-x-3 justify-end">
                 <button 
                    className="text-xs font-contentFont"
                    onClick={handleAddNote}>
                    + ny anteckning
                 </button>
            </div>
        </div>
        </>
         )} 
         {hide && (
          <div className="col-span-2 w-full">
            <AddNote noteholderIdTag={noteholderId} />    
          </div>
         )})
    </Modal>
  ));
};


export default NoteholderModal;

