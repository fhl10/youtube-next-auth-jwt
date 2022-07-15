import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { 'nextauth.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'mongodb+srv://fernando:<15f16h17lA>@cluster0.5bqsu.mongodb.net/?retryWrites=true&w=majority'
  })

  api.interceptors.request.use(config => {
    console.log(config);

    return config;
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}