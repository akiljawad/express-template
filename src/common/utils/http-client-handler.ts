import axios from "axios";

export type HttpConfig = {
    baseUrl: string;
    headers?: { Authorization?: string };
    timeout?: number;
}

export const httpClientHandler = (config: HttpConfig) => {
    return axios.create({
        baseURL: config.baseUrl,
        ...(('headers' in config) && {headers: config.headers}),
        ...(('timeout' in config) && {timeout: config.timeout}),
    })
};