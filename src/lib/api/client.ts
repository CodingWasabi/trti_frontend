import axios from 'axios';
import Cookies from 'universal-cookie';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const cookies = new Cookies();
const token = cookies.get('token');

const client = axios.create();

client.defaults.baseURL = SERVER_URL;
client.defaults.headers.common['X-AUTH-TOKEN'] = token;

export default client;
