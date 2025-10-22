import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3400';

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
    api.post('/api/auth/login', credentials),
  
  logout: () => api.post('/api/auth/logout'),
  
  checkAuth: () => api.get('/api/auth/check'),
};

// Hero Video APIs
export const heroVideoAPI = {
  get: () => api.get('/api/hero-video'),
  
  update: (data: { videoUrl: string; title: string }) =>
    api.put('/api/hero-video', data),
};

// Films APIs
export const filmsAPI = {
  getAll: (category?: string) => 
    api.get('/api/films', { params: category ? { category } : {} }),
  
  getById: (id: string) => api.get(`/api/films/${id}`),
  
  getAllAdmin: () => api.get('/api/films/admin/all'),
  
  create: (data: any) => api.post('/api/films', data),
  
  update: (id: string, data: any) => api.put(`/api/films/${id}`, data),
  
  delete: (id: string) => api.delete(`/api/films/${id}`),
};

// Contact APIs
export const contactAPI = {
  submit: (data: {
    name: string;
    email: string;
    company?: string;
    message: string;
  }) => api.post('/api/contact', data),
  
  getAll: () => api.get('/api/contact'),
  
  markAsRead: (id: string) => api.put(`/api/contact/${id}/read`),
  
  delete: (id: string) => api.delete(`/api/contact/${id}`),
};

// Subscribe APIs
export const subscribeAPI = {
  subscribe: (email: string) => api.post('/api/subscribe', { email }),
  
  getAll: () => api.get('/api/subscribe'),
  
  toggle: (id: string) => api.put(`/api/subscribe/${id}/toggle`),
  
  delete: (id: string) => api.delete(`/api/subscribe/${id}`),
};

export default api;
