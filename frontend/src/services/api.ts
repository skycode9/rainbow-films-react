import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Create axios instance with credentials
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth APIs
export const authAPI = {
  login: (credentials: { username: string; password: string }) =>
    api.post('/auth/login', credentials),
  
  logout: () => api.post('/auth/logout'),
  
  checkAuth: () => api.get('/auth/check'),
};

// Hero Video APIs
export const heroVideoAPI = {
  get: () => api.get('/hero-video'),
  
  update: (data: { videoUrl: string; title: string }) =>
    api.put('/hero-video', data),
};

// Films APIs
export const filmsAPI = {
  getAll: (category?: string) => 
    api.get('/films', { params: category ? { category } : {} }),
  
  getById: (id: string) => api.get(`/films/${id}`),
  
  getAllAdmin: () => api.get('/films/admin/all'),
  
  create: (data: any) => api.post('/films', data),
  
  update: (id: string, data: any) => api.put(`/films/${id}`, data),
  
  delete: (id: string) => api.delete(`/films/${id}`),
};

// Contact APIs
export const contactAPI = {
  submit: (data: {
    name: string;
    email: string;
    company?: string;
    message: string;
  }) => api.post('/contact', data),
  
  getAll: () => api.get('/contact'),
  
  markAsRead: (id: string) => api.put(`/contact/${id}/read`),
  
  delete: (id: string) => api.delete(`/contact/${id}`),
};

// Subscribe APIs
export const subscribeAPI = {
  subscribe: (email: string) => api.post('/subscribe', { email }),
  
  getAll: () => api.get('/subscribe'),
  
  toggle: (id: string) => api.put(`/subscribe/${id}/toggle`),
  
  delete: (id: string) => api.delete(`/subscribe/${id}`),
};

export default api;
