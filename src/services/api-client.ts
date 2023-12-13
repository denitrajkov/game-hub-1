import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d0b4e8e5d80349448373ff85e3a92457",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint
    }
    getAll = (config: AxiosRequestConfig) => {
      return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
    }
  
}

export default APIClient;