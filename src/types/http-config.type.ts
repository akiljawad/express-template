export interface HttpConfig {
    baseUrl: string;
    headers?: { Authorization?: string };
    timeout?: number;
}