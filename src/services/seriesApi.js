import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Erro desconhecido na API';
    return Promise.reject(new Error(message));
  }
);

const SERIES_ENDPOINT = '/series';

export async function getSeries() {
  const { data } = await apiClient.get(SERIES_ENDPOINT);
  return data;
}

export async function createSerie(serie) {
  const { data } = await apiClient.post(SERIES_ENDPOINT, serie);
  return data;
}

export async function updateSerie(serie) {
  const { data } = await apiClient.put(SERIES_ENDPOINT, serie);
  return data;
}

export async function deleteSerie(id) {
  const { data } = await apiClient.delete(`${SERIES_ENDPOINT}/${id}`);
  return data;
}