import baseUrl from "../../config/apiConfig";

const FetchUserData = {
    getUserData: async () => {
        try {
        const response = await fetch(`${baseUrl}/household/GetUserDetails`, {
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
            throw new Error('Error fetching conversation');
        }
        } catch (error) {
        console.error('Error:', error);
        throw error;
        }
    },
};
export default FetchUserData;