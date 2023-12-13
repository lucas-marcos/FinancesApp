import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5e57-2804-37c4-82c3-cd44-84b1-f8f-26f8-327e.ngrok-free.app/api',
});

export const requestGetAllByMonthNumber = async (monthNumber) => {
  try {
    const response = await api.get(`/finances/month/${monthNumber}`);
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