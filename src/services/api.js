import axios from 'axios';

const api = axios.create({
  baseURL: 'https://efd0-2804-37c4-82c3-cd44-70f4-e7aa-6f8b-c644.ngrok-free.app/api',
});

export const requestGetAll = async () => {
  try {
    const response = await api.get('/finances');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    throw error; 
  }
};

export const requestPost = async (request) => {
    try {
        const response = await api.post('/finances', request);
        return response.data;
      } catch (error) {
        console.error('Erro ao adicionar os dados:', error);
        throw error; 
      }
}