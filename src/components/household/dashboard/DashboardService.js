import baseUrl from "../../../config/apiConfig";

const DashboardService = {

  addDwellerItem: async (formData) => {
    try {
      const response = await fetch(`${baseUrl}/providing/AddDwellerItem`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else if (response.status === 401) {
        throw new Error('Unauthorized');
      } else {
        throw new Error('Error adding item');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  removeDwellerItem: async (itemId) => {
    try {
      const response = await fetch(`${baseUrl}/providing/RemoveDwellerItem`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          itemId }),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else if (response.status === 401) {
        throw new Error('Unauthorized');
      } else {
        throw new Error('Error removing item');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  getDwellerItem: async (itemId) => {
    try {
        const response = await fetch(`${baseUrl}/providing/GetDwellerItem?itemId=${itemId}`, {
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
        throw new Error('Error fetching item');
    }
    } catch (error) {
    console.error('Error:', error);
    throw error;
    }
},

getAllDwellerItems: async () => {
    try {

        const response = await fetch(`${baseUrl}/providing/GetAllDwellerItems`, {
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
        throw new Error('Error fetching items');
    }
    } catch (error) {
    console.error('Error:', error);
    throw error;
    }
},

  getDashboardNotes: async () => {
    try {
      const response = await fetch(`${baseUrl}/dashboard/GetDashboardNotes`, {
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

  getUpcomingEvents: async () => {
    try {
      const response = await fetch(`${baseUrl}/events/GetUpcomingEvents`, {
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


}

export default DashboardService;
