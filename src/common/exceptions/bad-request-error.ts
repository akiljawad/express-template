import {Messages, StatusCode} from "../constants";

class BadRequestError extends Error {
    public readonly status: number;

    constructor(message: string = Messages.BAD_REQUEST_ERROR) {
        super(message);
        this.name = 'BadRequestError';
        this.status = StatusCode.HTTP_400_BAD_REQUEST;
    }
}