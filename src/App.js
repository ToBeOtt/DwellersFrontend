import './App.css';
import { createContext, useState } from 'react';
import HeaderNav from './components/layout/HeaderNav.js';
import FooterPage from './components/layout/FooterPage.js';
import MainLayout from './components/layout/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/authentication/LoginPage';
import RegisterPage from './pages/authentication/RegisterPage';
import RegisterHousePage from './pages/authentication/RegisterHousePage';
import RegisterHouseMemberPage from './pages/authentication/RegisterHouseMemberPage';
import EditProfilePage from './pages/EditProfilePage';
import NotesPage from './pages/household/notes/NotesPage';
import Dashboard from './pages/household/dashboard/DashboardPage';
import ChatPage from './pages/household/chat/ChatPage';
import MapPage from './pages/neighbourhood/map/MapPage';
import ErrorPage from './pages/errorhandling/ErrorPage';
import UnauthorizedPage from './pages/errorhandling/UnauthorizedPage';

export const AuthContext = createContext();
function App() {
    
    const [loggedIn, setLoggedIn] = useState(
    localStorage.token ? true : false
    );

    function changeLoggedIn(value) {
      setLoggedIn(value);
      if (value === false) {
          localStorage.clear();
      }
    }

  return (
    <AuthContext.Provider value={[loggedIn, changeLoggedIn]}>
      <BrowserRouter>
      <HeaderNav /> 
      <MainLayout>
          <Routes>
              <Route path='/LoginPage' element={<LoginPage/>} />

              <Route path='/RegisterPage' element={<RegisterPage/>} />

              <Route path='/RegisterHousePage' element={<RegisterHousePage/>}/>

              <Route path='/RegisterHouseMemberPage' element={ <RegisterHouseMemberPage />} />

              <Route path='/EditProfilePage' element={<EditProfilePage/>} />

              <Route path='/DashboardPage' element={<Dashboard/>} />

              <Route path='/NotesPage' element={ <NotesPage /> } />

              <Route path='/ChatPage' element={<ChatPage /> } />
              
              <Route path='/MapPage' element={<MapPage /> } />

              <Route path='/ErrorPage' element={<ErrorPage/>}/>
              <Route path='/UnauthorizedPage' element={<UnauthorizedPage/>}/>
          </Routes>
      </MainLayout>
      <FooterPage/>
      {/* <Footer/> */}
      </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;

