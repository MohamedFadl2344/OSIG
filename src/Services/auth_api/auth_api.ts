import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
    baseURL: `${API_URL}/api/auth`,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const authAPI = {
    // Sign Up
    signUp: async (data: any) => {
        const response = await api.post('/signup', data);
        return response.data;
    },

    // Sign In
    signIn: async (data: any) => {
        const response = await api.post('/signin', data);
        return response.data;
    },

    // Sign Out
    signOut: async () => {
        localStorage.removeItem('token');
        return { success: true };
    },

    // Get Current User
    getCurrentUser: async () => {
        try {
            const response = await api.get('/user');
            return response.data;
        } catch (error) {
            return { success: false };
        }
    },

    // Update Profile (Placeholder)
    updateProfile: async (_data: any) => {
        // Implement backend route for this
        return { success: true };
    },

    // Update Password (Placeholder)
    updatePassword: async (_data: any) => {
        // Implement backend route for this
        return { success: true };
    },

    // Request Password Reset (Placeholder)
    requestPasswordReset: async (_email: string) => {
        return { success: true };
    }
};
