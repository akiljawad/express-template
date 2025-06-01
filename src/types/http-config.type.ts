export type HttpConfig = {
    baseUrl: string;
    headers?: { Authorization?: string };
    timeout?: number;
}