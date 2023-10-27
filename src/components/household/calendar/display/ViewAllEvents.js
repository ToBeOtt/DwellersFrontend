import { useState, useEffect } from 'react';
import CalendarModal from '../design/CalendarModal';
import CalendarService from '../CalendarServices';
import {formatDate} from '../../../utils/FormatTime';

export default function ViewAllEvents() {
  const [events, setEvents] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleModalOpen = (eventId) => {
    console.log(eventId);
    setSelectedEventId(eventId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    CalendarService.getAllEvents()
      .then((data) => {
        setEvents(data.allEvents); 
      });
  }, []);

  return (
    <>
      <div className="xl:grid grid-cols-3 xl:gap-5 mt-5">
         {Array.isArray(events) &&
        events.map((point, index) => (
            <>
            <div className="xl:col-span-1 pr-4 border-x-2 rounded border-hh bg-zinc-200 px-4 py-2 shadow-md mb-3">
              <div className="items-center">
                <div className="flex flex-row justify-start">
                  <button onClick={() => handleModalOpen(point.id)}>
                    <h3 className="text-black text-sm font-titleFont ml-2">
                        {point.title}
                    </h3>
                  </button>
                </div>
              </div>
    
          <section className="">
            <p className="text-xs text-stone-600 line-clamp-2 my-2">{point.description}</p>
          </section>

          <div className="col-span-1 flex flex-row justify-start">
              <p className="text-stone-700 text-xs">
                {formatDate(point.eventDate)}
              </p>
          </div>
        </div>
            
      </>
          ))}
        <CalendarModal
          eventId={selectedEventId}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      </div>
    </>
    );
  }
    
      


{/* <div className="grid gap-4 p-3">
      {Array.isArray(events) &&
        events.map((point, index) => (
          <div
            className="w-full h-auto bg-[#F6F4EE] border-b-1 border-black shadow-md rounded flex flex-col p-8"
            key={index}
          >
            <div className="grid grid-cols-2 items-center m-2">
              <div className="col-span-1 flex flex-row justify-start">
                <h3 className="text-black font-titleFont inline-block ml-5">
                  {point.title}
                </h3>
              </div>
              <div className="col-span-1 flex flex-row justify-end">
                <button onClick={() => handleModalOpen(point.id)}>
                  <p className="ml-2 text-xs">Öppna</p>
                </button>
              </div>
            </div>

            <div className="text-contentText font-contentFont">
              <p className="text-xs mr-6 ml-2">{point.description}</p>
              <div className="grid grid-cols-2 items-center m-2">
                <div className="col-span-1 flex flex-row justify-start text-xs">
                </div>
              </div>
            </div>
          </div>
        ))}
      <CalendarModal
        eventId={selectedEventId}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div> */}