import { useState } from 'react';
import baseUrl from '../../../../config/apiConfig';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AddNoteholder() { 

    const [name, setName] = useState('');
    const [category, setCategory] = useState(null);
    const [noteScope, setNoteScope] = useState(null);

    
    const location = useLocation();
    const noteholderExist = new URLSearchParams(location.search).get('noteholderId');
    const navigate = useNavigate();


    const HandleAddPoint = async () => {
        try {
          const response = await fetch(`${baseUrl}/notes/AddNoteholder`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({
                name,
                category
            }),
          });
      
          if (response.ok) {
            navigate('/notePage?added=true');
    
          } else if(response.status === 401) {
            navigate('/loginPage');
          }
          else {
              navigate('/ErrorPage');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };


    return (
    <>
    <div className="flex justify-center">
          <form className="rounded pb-8 mb-4 w-[40%]">
                <input 
                    className="mb-3 block shadow-sm appearance-none border rounded py-1 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline" 
                    id="title" 
                    type="text" 
                    placeholder="Titel" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
        

                <select
                    className="mb-2 shadow-sm appearance-none border rounded py-1 px-3 text-gray-400 text-sm leading-tight focus:outline-none focus:shadow-outline mb-3"
                    id="noteholderTag"
                    value={category === null ? "" : category}
                    placeholder="Titel"
                    onChange={(e) => setCategory(e.target.value || null)}
                    >
                      <option value="" disabled hidden>Kategori</option>
                      <option value={0}>Husmöten</option>
                      <option value={1}>Projekt</option>
                      <option value={2}>Att göra</option>
                      <option value={3}>Kalender</option>
                  </select>

                  <select
                    className="mb-3 mr-2 block shadow-sm appearance-none border rounded py-1 px-3 text-gray-400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                    value={noteScope === null ? "" : noteScope}
                    onChange={(e) => setNoteScope(e.target.value || null)}
                    >
                  <option value="" disabled hidden>Synlighet</option>
                  <option value={0}>Hushåll</option>
                  <option value={1}>Grannskap</option>
                  <option value={2}>Regionalt</option>
               </select>

            <div className="flex items-center justify-between">
                <button
                    className="bg-teal-900 hover:bg-teal-800 text-dweller-text text-sm font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={HandleAddPoint}
                    >
                    Skapa anteckningshållare
                </button>
            </div>

        </form>
      </div>
    </>
  );  
}