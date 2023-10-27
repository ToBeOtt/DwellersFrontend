import { useState, useEffect } from 'react';
import NoteModal from './NoteModal';
import NoteService from '../../NoteService';

export default function MeetingNotes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [meetingNotes, setMeetingNotes] = useState(null);


  const handleModalOpen = (noteId) => {
    console.log(noteId);
    setSelectedNoteId(noteId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    NoteService.getNotes(0)
      .then((data) => {
        const notesData = data.notes;
        setMeetingNotes(notesData);
        console.log('MeetingNotes fetched');
      });
      }, []);


  return (
    <div className="grid gap-4 p-3">
      {Array.isArray(meetingNotes) &&
        meetingNotes.map((point, index) => (
          <div
            className="w-full h-auto bg-[#F6F4EE] border-b-1 border-black shadow-md rounded flex flex-col p-8"
            key={index}
          >
            <div className="grid grid-cols-2 items-center m-2">
              <div className="col-span-1 flex flex-row justify-start">
                <h3 className="text-black font-titleFont inline-block ml-5">
                  {point.name}
                </h3>
              </div>
                <div className="col-span-1 flex flex-row justify-end">
                  <button onClick={() => handleModalOpen(point.noteId)}>
                  <p className="ml-2 text-xs">Öppna</p>
                </button>
              </div>
            </div>

            <div className="text-contentText font-contentFont">
              <p className="text-xs mr-6 ml-2">{point.description}</p>
              <div className="grid grid-cols-2 items-center m-2">
                <div className="col-span-1 flex flex-row justify-start">
                  <p className="font-contentFont text-xs">#Möte, Höst</p>
                </div>

                <div className="col-span-1 flex flex-row space-x-3 justify-end text-xs">
                  {point.noteStatus === 0 ? (
                    <p>Avvakta</p>
                  ) : point.noteStatus === 1 ? (
                    <p>Beror på</p>
                  ) : point.noteStatus === 2 ? (
                    <p className="text-yellow-500">Påbörjad</p>
                  ) : point.noteStatus === 3 ? (
                    <p className="text-green-500">Avslutad</p>
                  ) : (
                    <p></p>
                  )}

                  {point.notePriority === 0 ? (
                    <p>Ej brådskande</p>
                  ) : point.notePriority === 1 ? (
                    <p>Normal</p>
                  ) : point.notePriority === 2 ? (
                    <p className="text-red-500">Akut</p>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      <NoteModal
        noteId={selectedNoteId}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}
