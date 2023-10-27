import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteModal from './NoteModal';
import NoteService from '../../NoteService';
import { useNoteContext } from '../../../../../contexts/NoteContext';

export default function AllNotes() {
  const { notes, setNotes } = useNoteContext();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handleModalOpen = (noteId) => {
    console.log(noteId);
    setSelectedNoteId(noteId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    NoteService.getNotes()
      .then((data) => {
        const notesData = data.notes;
        setNotes(notesData);
        console.log('Data in local storage');
      });
    }, []);

    return (
      <>
        <div className="xl:grid grid-cols-3 xl:gap-5 mt-5">
           {Array.isArray(notes) &&
          notes.map((point, index) => (
              <>
              <div className="xl:col-span-1 pr-4 border-x-2 rounded border-hh bg-zinc-200 px-4 py-2 shadow-md mb-3">
                <div className="items-center">
                  <div className="flex flex-row justify-start">
                    <button onClick={() => handleModalOpen(point.id)}>
                      <h3 className="text-black text-sm font-titleFont ml-2">
                          {point.name}
                      </h3>
                    </button>
                  </div>
                </div>
      
            <section className="">
              <p className="text-xs text-stone-600 line-clamp-2 my-2">{point.description}</p>
            </section>
  
            <div className="col-span-1 flex flex-row justify-start">
                <p className="text-stone-700 text-xs">
                 
                </p>
            </div>
          </div>
              
        </>
            ))}
          <NoteModal
            eventId={selectedNoteId}
            isOpen={isModalOpen}
            onClose={handleModalClose}
          />
        </div>
      </>
      );
    }