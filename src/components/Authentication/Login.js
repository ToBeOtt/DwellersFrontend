import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../config/apiConfig'; 
import { AuthContext } from '../../App';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useContext(AuthContext);
  const [error, SetError] = useState(null);

  const handleSignIn = async () => {
    try {
      const response = await fetch(`${baseUrl}/auth/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      if (response.ok) {
        const user = await response.json();
        const jwtToken = user.token; 
        
        localStorage.setItem('token', jwtToken);
        setLoggedIn(true); 
        navigate('/DashboardPage');

      } if (response.status === 401) {
       navigate('RegisterPage');
      }
      if (response.status === 400) {
        navigate('/ErrorPage');
       }
      if (response.status === 500) {
        const errorData = await response.json();
        const errorMessages = errorData.message.split(/\r?\n/);
        SetError(errorMessages);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
    <div className="mx-auto w-full md:w-2/4 lg:w-2/4 xl:w-1/4">

{/* Login-form */}
      <article>
        <form class="bg-white border-t-8 border-[#E49A3C] shadow-xl shadow-md rounded p-6 m-10 xl:mt-5">
            <div class="mb-4">
              <label
                  className="block text-gray-700 text-xs font-bold mb-2" 
                  for="username">
                Username
              </label>
              <input 
                className="shadow appearance-none border rounded text-xs w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="username" 
                type="text" 
                placeholder="name@mail.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
              
            <div class="mb-6">
              <label 
                className="block text-gray-700 text-xs font-bold mb-2" 
                for="password">
                Password
              </label>
              <input 
                className="shadow appearance-none border border-red-500 rounded text-xs w-2/3  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                id="password" 
                type="password" 
                placeholder="******************" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              {error && (
                <div className="text-red-500 text-xs italic">
                  {error.map((errorMessage, index) => (
                    <p key={index}>{errorMessage}</p>
                  ))}
                </div>
              )}
             
                </div>
                  <div class="flex items-center justify-between">
                  <button
                      className="bg-[#E49A3C] border-1 border-black hover:bg-[#FC991A] text-xs text-black font-bold py-2 mr-3 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={handleSignIn}
                      >
                    Logga in
                  </button>
              <a className="flex justify-left font-bold text-xs text-dweller-gray hover:text-blue-800" href="www.google.com">
                Glömt lösenord?
              </a>
            </div>
          </form>
      </article>
    </div>
    </>
  );
}

