import {Messages, StatusCode} from "../constants";

class TooManyRequestsError extends Error {
    public readonly status: number;

    constructor(message: string = Messages.TOO_MANY_REQUESTS_ERROR) {
        super(message);
        this.name = 'TooManyRequestsError';
        this.status = StatusCode.HTTP_429_TOO_MANY_REQUESTS;
    }
}