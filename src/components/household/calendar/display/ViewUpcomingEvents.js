import { useState, useEffect } from 'react';
import CalendarModal from '../design/CalendarModal';
import CalendarService from '../CalendarServices';

export default function ViewUpcomingEvents() {
  const [events, setEvents] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  
  // Array-slice
  const maxLimit = 4;

  const handleModalOpen = (eventId) => {
    console.log(eventId);
    setSelectedEventId(eventId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    CalendarService.getUpcomingEvents()
      .then((data) => {
        setEvents(data.upcomingEvents); 
      });
  }, []);

  return (
    <div className="grid gap-2 p-3">
       {Array.isArray(events) &&
      events.slice(0, maxLimit).map((point, index) => (
          <>
          <div className="grid grid-cols-2 items-center mt-4">
            <div className="col-span-1 flex flex-row justify-start">
              <button onClick={() => handleModalOpen(point.id)}>
                <h3 className="text-black text-sm font-titleFont">
                    {point.title}
                </h3>
              </button>
            </div>

            <div className="col-span-1 flex flex-row justify-start">
                <p className="text-stone-400 text-sm font-titleFont">
                  {point.eventDate}
                </p>
            </div>
          </div>

      <section className="">
        <p className="text-xs text-stone-600 line-clamp-2">{point.description}</p>
      </section>
    </>
        ))}
      <CalendarModal
        eventId={selectedEventId}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}
    
{/* <div
className="w-full h-auto flex flex-col p-8"
key={index}
>
<div className="grid grid-cols-2 items-center m-2">
  <div className="col-span-1 flex flex-row justify-start">
  <button onClick={() => handleModalOpen(point.id)}>
    <h3 className="text-black font-titleFont inline-block">
      {point.title}
    </h3>
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
</div> */}