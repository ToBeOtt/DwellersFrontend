import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import App from './App';
import { NoteProvider } from './contexts/NoteContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <NoteProvider>
        <App />
      </NoteProvider>
  </React.StrictMode>
);

