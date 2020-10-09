import axios from 'axios';

const URL = 'https://crudcrud.com/api/387e75a78520459fbbf40fe603b88fe5/unicorns';

export const getUnicorns = () => {
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return axios.get(`${URL}`, params);
}

export const editUnicorns = (params: { id: string; name: string; age: string, color: string }) => {
  return axios.put(`${URL}/${params.id}`, {
    name: params.name,
    age: parseInt(params.age, 10),
    colour: params.color
  });
}