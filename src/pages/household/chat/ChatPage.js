import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SubMenu from '../../../components/layout/SubMenu'
import ContentLayout from '../../../components/layout/ContentLayout'
import ViewConversation from '../../../components/household/chat/ViewConversation';

export default function ChatPage() { 
    const navigate = useNavigate();

    useEffect(() => {
      localStorage.getItem('token') === null && (
        navigate('/UnauthorizedPage')
      );
    })

  
return (
<>
<div className="bg-gradient-to-r from-[#F9F1DB] to-zinc-500">
  <SubMenu> 
    <div className="text-xs font-titleFont text-stone-600 rounded border-x-2 border-stone-500 px-3">
        <h1 className="my-1 tracking-wider font-logoText text-stone-400 underline">Konversationer</h1>

        <button
            to="/AddNotePage"
            className="block px-2"         
            >
            + ny konversation
        </button>
      </div>
  </SubMenu>
 
  <div className="h-auto mx-auto py-14 2xl:grid grid-cols-6 2xl:w-full 2xl:mt-5">
            <div className="col-span-1"></div>
            <div className="col-span-4">
              <ViewConversation />
            </div>
          
          <div className="col-span-1"></div>
      </div>
    </div>

      

   
    </>           
    );
}
