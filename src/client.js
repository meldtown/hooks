import axios from 'axios';

const apiUrl = 'http://localhost:3003';

export const fetchTodos = () => axios.get(`${apiUrl}/todos`);
