import axios from 'axios';

const useListApi = axios.create({
  baseURL: 'https://reqres.in/api/users',
});

export default useListApi;
