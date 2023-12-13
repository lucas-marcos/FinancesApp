import axios from 'axios';

const api = axios.create({
  baseURL: 'https://f0fb-2804-37c4-82c3-cd44-84b1-f8f-26f8-327e.ngrok-free.app/api',
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

export const getAllByMonthNumberAndTransactionType = async (monthNumber, transactionType) => {
  try {
    const response = await api.get(`/finances/month/${monthNumber}/transactionType/${transactionType}`);
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

export const deleteRequest = async (id) => {
  try {
      const response = await api.delete(`/finances/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar os dados:', error);
      throw error; 
    }
}