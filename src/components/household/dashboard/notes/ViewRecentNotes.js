import { useState, useEffect } from 'react';
import DashboardService from '../DashboardService';

export default function ViewRecentNotes(props) {
    const [latestNotes, setLatestNotes] = useState(null);

    useEffect(() => {
        DashboardService.getDashboardNotes()
          .then((data) => {
            const latestNotesData = data.notes;
            setLatestNotes(latestNotesData);
          });
    }, []); 
   
    return(
        <>
        {Array.isArray(latestNotes) &&
            latestNotes.map((point, index) => (
     
  
            <article className="flex flex-col items-start justify-between mb-4 pb-4 border">
                <div className="flex items-center gap-x-4 text-xs">
                    <time 
                        dateTime="2020-03-16" 
                        className="text-stone-500">
                    </time>
                </div>

   
                    <h3 className="mt-3 text-sm font-semibold font-titleFont leading-6 text-stone-900 group-hover:text-stone-600">
                        {point.name}
                    </h3>
                    <p className="mt-1 line-clamp-3 text-sm leading-6 text-stone-600 w-[80%]">
                        {point.description}
                    </p>
            

                <div className="relative mt-2 flex items-center gap-x-4">
                    
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a href="#">
                            <span className="absolute inset-0"></span>
                                {point.user.alias}
                            </a>
                        </p>
                        <p className="text-gray-600">
                            {/* {point.house.name} */}
                        </p>
                    </div>
                </div>
            </article>  
          ))}
        </>
    )
}