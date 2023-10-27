import baseUrl from "../../../config/apiConfig";

const NoteService = {

  getNotes: async (noteCategory) => {
    try {

      let apiUrl = `${baseUrl}/notes/GetNotes`;

    if (noteCategory !== null) {
      apiUrl += `?noteCategory=${noteCategory}`;
    }

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else if (response.status === 401) {
        throw new Error('Unauthorized');
      } else {
        throw new Error('Error fetching notes');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  getNote: async (noteId) => {
    try {
      const response = await fetch(`${baseUrl}/notes/GetNote?noteId=${noteId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Note Received:', data);
        return data;
      } else if (response.status === 401) {
        throw new Error('Unauthorized');
      } else {
        throw new Error('Error fetching notes');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  getNoteholders: async (noteCategory) => {
    try {
      const response = await fetch(`${baseUrl}/notes/GetNoteholders?noteCategory=${noteCategory}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else if (response.status === 401) {
        throw new Error('Unauthorized');
      } else {
        throw new Error('Error fetching noteholders');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  getNoteholder: async (noteholderId) => {
    try {
      const response = await fetch(`${baseUrl}/notes/GetNoteholder?noteholderId=${noteholderId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Noteholder Received:', data);
        return data;
      } else if (response.status === 401) {
        throw new Error('Unauthorized');
      } else {
        throw new Error('Error fetching notes');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

    removeNote: async (noteId) => {
      try {
        const response = await fetch(`${baseUrl}/notes/RemoveNote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            noteId }),
        });
  
        if (response.ok) {
          const data = await response.json();
          return data;
        } else if (response.status === 401) {
          throw new Error('Unauthorized');
        } else {
          throw new Error('Error deleting note');
        }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },

    removeNoteholders: async (noteholderId) => {
        try {
          const response = await fetch(`${baseUrl}/notes/RemoveNoteholders`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
              noteholderId }),
          });
    
          if (response.ok) {
            const data = await response.json();
            return data;
          } else if (response.status === 401) {
            throw new Error('Unauthorized');
          } else {
            throw new Error('Error deleting note');
          }
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      }
  };

    export default NoteService;
 