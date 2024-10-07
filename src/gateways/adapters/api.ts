import axios, { AxiosError, AxiosResponse, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

export class Result {
  constructor(
    readonly status?: number,
    readonly code?: string,
    readonly data?: unknown,
    readonly error?: unknown,
  ) {}
}

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    // TODO: do some thing
    return response
  },
  async (error: AxiosError) => {
    // TODO: do some thing
    return new Result(error.status, error.code, null, error.message);
  }
)


instance.interceptors.request.use( async (config: InternalAxiosRequestConfig) => {
  // TODO: do some thing
  // config.headers.Authorization = `Beare YOUR_TOKEN if need`
  return config
})

export class BackendApi {
  public static async get(url: string, config: AxiosRequestConfig = {}): Promise<Result> {
    return await instance.get(url, config)
  }

  public static async post(url: string, data: unknown, config: AxiosRequestConfig = {}): Promise<Result> {
    return await instance.post(url, data, config)
  }

  public static async put(url: string, data: unknown, config: AxiosRequestConfig = {}): Promise<Result> {
    return await instance.put(url, data, config)
  }

  public static async patch(url: string, data: unknown, config: AxiosRequestConfig = {}): Promise<Result> {
    return await instance.patch(url, data, config)
  }

  public static async delete(url: string, config: AxiosRequestConfig = {}): Promise<Result> {
    return await instance.delete(url, config)
  }
}