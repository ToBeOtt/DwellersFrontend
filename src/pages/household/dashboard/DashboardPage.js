import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import ViewUpcomingEvents from '../../../components/household/calendar/display/ViewUpcomingEvents';
import ViewRecentNotes from '../../../components/household/dashboard/notes/ViewRecentNotes';
import ItemRow from '../../../components/household/dashboard/dweller-items/ItemRow';
import AddItem from '../../../components/household/dashboard/dweller-items/AddItem';
import ServiceRow from '../../../components/household/dashboard/dweller-services/ServiceRow';
import AddService from '../../../components/household/dashboard/dweller-services/AddService';

export default function DashboardPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.getItem('token') === null && (
      navigate('/LoginPage')
    );
  })


  // Anrop som behöver skrivas:                 
    // AddService
    // GetHouseServices
   
  return (
    <>
        <main className="mx-auto max-w-7xl px-6 w-full
                        lg:px-8">

          {/* Dashboard-grid */}
          <section className="grid grid-cols-1 gap-x-10 gap-y-16  
                          lg:grid-cols-2 lg:mx-0 lg:max-w-none">

            {/* First column - Events*/}
            <article className="mt-5 gap-x-10 col-span-3 gap-y-16
                            lg:col-span-1 lg:mr-3 lg:max-w-none">
                <div className="mx-auto mb-3 pb-3 pl-4 inline-block opacity-50">
                    <h2 className="text-sm underline pl-3 font-titleFont tracking-wide text-hh">Uppkommande kalenderaktiviteter..</h2>
                </div>

                {/* Unique event-element */}
                <ViewUpcomingEvents />

            </article>

            {/* Second column - Notes */}
            <article className="mt-5 gap-x-10 col-span-3 gap-y-16
                            lg:col-span-1 lg:mr-3 lg:max-w-none">
                <div className="mx-auto mb-3 pb-3 pl-4 inline-block opacity-40">
                    <h2 className="text-sm underline pl-3 font-titleFont tracking-wide text-hh">Aktivitet på anslagstavlor..</h2>
                </div>
            
            {/* Unique note-element */}
                <ViewRecentNotes /> 
            </article>
          </section>
        </main>

        {/* Skills/Items - Grid */}
        <footer className="grid grid-cols-2 space-x-16 px-5 bg-gradient-to-r from-[#B77580] to-[#3B1319] 
                           lg:grid grid-cols-1"> 

            {/* Skill-container*/}
           <section className="w-full my-12 col-span-1
                                lg:w-[80%] lg:mr-3 ">
                <h2 className="ml-6 text-xl font-md font-logoText tracking-wide leading-7 text-zinc-800 
                                sm:truncate sm:text-xl">
                    byta tjänster
                </h2>
    
                <ServiceRow  ServiceName={'Beskära äpplen'} ServiceAvailable={'True'}  />
                <ServiceRow  ServiceName={'Kör lastbil'} ServiceAvailable={'False'}  />
                <AddService/>
            </section>

            {/* Item-container*/}
            <section className="col-span-1 w-full my-12 
                                lg:mr-3 lg:w-[80%]">
                <h2 className=" ml-6 text-xl font-md font-logoText tracking-wide leading-7 text-gray-300 
                                sm:truncate sm:text-xl">
                    föremål till utlån
                </h2>
                <ItemRow /> 
                <AddItem />                
            </section>

        </footer>
    </>
    );
}


