import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AllNotes from '../../../components/household/notes/display/notes/AllNotes';
import ProjectNotes from '../../../components/household/notes/display/notes/ProjectNotes';
import TodoNotes from '../../../components/household/notes/display/notes/TodoNotes';
import MeetingNotes from '../../../components/household/notes/display/notes/MeetingNotes';
import AddNote from '../../../components/household/notes/add/AddNote';
import AddNoteholder from '../../../components/household/notes/add/AddNoteholder';
import SubMenu from '../../../components/layout/SubMenu';
import AddCalendarEvent from '../../../components/household/calendar/AddCalendarEvent';
import ViewAllEvents from '../../../components/household/calendar/display/ViewAllEvents';


export default function NotesPage(props) {
  //Navigation
  const [activeView, setActiveView] = useState('allNotes');
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.getItem('token') === null && (
      navigate('/LoginPage')
    );
  })

  const handleShowNotes = (view) => {
    setActiveView(view);
  };

 
return (
<>
<SubMenu> 
    <div className="text-xs font-titleFont text-stone-500 rounded border-x-2 border-stone-500 px-5">
        <h1 className="my-1 tracking-wider font-logoText text-stone-400 underline">kategorier</h1>

        <button
          className="block p-0.5"
          onClick={() => {
            handleShowNotes('AllNotes');
          }}
        >
          Alla
        </button>

        <button
            className="block p-0.5"
            onClick={() => {
              handleShowNotes('meetingNotes'); 
            }}                
            >
            Husmöten
        </button>
    
        <button
            className="block p-0.5"
            onClick={() => {
              handleShowNotes('calendarView'); 
            
              }}                        
            >
            Kalender
        </button>

        <button
            className="block p-0.5"
            onClick={() => {
              handleShowNotes('projectNotes'); 
 
              }}              
            >
            Projekt
        </button>
    
        <button
            className="block p-0.5"
            onClick={() => {
              handleShowNotes('newNote'); 
            
              }}                        
            >
            Att göra
        </button>
    </div>

    <div className="text-xs font-titleFont text-stone-500 py-2 rounded border-x-2 border-stone-500 px-3">
        <h1 className="my-1 tracking-wider font-logoText text-stone-400 underline">
            anteckningar
        </h1>

        
        <button
            className="block p-0.5"
            onClick={() => {
              handleShowNotes('newNote');  
        
              }}           
                >
            Ny anteckning
        </button>

        <button
            className="block p-0.5"
            onClick={() => {
              handleShowNotes('newCalendarEvent');
        
              }}           
                >
            Ny kalenderhändelse
        </button>

        <button
            className="block p-0.5" 
            onClick={() => {
              handleShowNotes('newNoteholder'); 
           
              }}         
            >
            Ny anteckningsbok
        </button>

    </div>

    <div  className="text-xs font-titleFont text-stone-500 px-3 py-2">        
            <input type="text" 
                className="pr-2 pl-2 text-sm rounded focus:shadow focus:outline-none 
                rounded border-x-2 border-stone-500 py-2 h-6" 
                placeholder="Sök.."/>
         </div>
</SubMenu>


 {/* Event description/greeting */} 

{/* Calendar-grid */}
<div className="border-b-4 border-stone-500">
<section className="grid grid-cols-1 gap-x-10 gap-y-16 px-5 py-8
                    lg:grid-cols-3 lg:mx-0 lg:max-w-none">
      {/* First column - Calendar*/} 
      <article className="mt-5 lg:col-span-1 lg:mr-8 lg:max-w-none">
         <AddCalendarEvent />
      </article> 
      
      

      <article className="w-[90%]
                          lg:col-span-2 lg:mr-3 lg:max-w-none">
          <ViewAllEvents />
      </article>
    
  </section>
  </div>

<div className="bg-gradient-to-r from-[#A2C3B8] to-[#134840]">
  <section className="grid grid-cols-1 gap-x-10 gap-y-16 px-5 py-8
                      lg:grid-cols-3 lg:mx-0 lg:max-w-none">   
      {/* Second section - Notes */}
      <article className="lg:col-span-2 lg:mx-3 lg:max-w-none">
          

          {/* Unique note-element */}
          {activeView === 'newNoteholder' ? (
                  <AddNoteholder />
          ): 
              activeView === 'allNotes' ? (
              <AllNotes />
          ):
              activeView === 'newNote' ? (
              <AddNote />
          ): 
              activeView === 'newCalendarEvent' ? (
                <AddCalendarEvent />
          ): 
              activeView === 'meetingNotes' ? (
              <MeetingNotes />
          ):  
              activeView === 'projectNotes' ? (
              <ProjectNotes />
          ): 
              activeView === 'todoNotes' ? (
              <TodoNotes />
          )
          : (
          <AllNotes />
          )}
      </article>
      
      <article className="mt-5 lg:col-span-1 lg:mx-8 lg:max-w-none">

     
          {/* Create / modify new note */}
          <AddNote />
      </article>

  </section>
</div>
</>

 
);
}


