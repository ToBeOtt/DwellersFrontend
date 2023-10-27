import { createContext, useContext, useState } from 'react';

const NoteContext = createContext();

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState([]);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {children}
    </NoteContext.Provider>
  );
}

export function useNoteContext() {
  return useContext(NoteContext);
}