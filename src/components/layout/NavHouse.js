import { Link } from 'react-router-dom';
import { ChatIcon, HouseholdIcon, NeighbourhoodIcon } from './svg/NavbarIcons';
import {NoteIcon} from './svg/FormIcons';

export default function NavHouse({ children }) {

  return (
         <>
          <div>
              <Link 
                to="/DashboardPage"
                className="flex justify-center text-hh hover:text-hover-hh no-underline mr-6">
                  <HouseholdIcon />
               </Link>
          </div>

          <div>
              
              <Link 
                to="/ChatPage"
                className="flex justify-center text-hh hover:text-hover-hh no-underline mr-6">
                  <ChatIcon />
               </Link>

          </div>

          <div>
              
              <Link 
                to="/NotesPage"
                className="flex justify-center text-hh hover:text-hover-hh no-underline mr-6">
                  <NoteIcon />
               </Link>

          </div>

          <div>
              

              <Link 
                  to="/MapPage" 
                  className="flex justify-center text-hh hover:text-hover-hh no-underline mr-6">
                    <NeighbourhoodIcon />
               </Link>

          </div>
          </>
  );
}
