import {Messages, StatusCode} from "../constants";

class UnauthorizedError extends Error {
    public readonly status: number;

    constructor(message: string = Messages.UNAUTHORIZED_ERROR) {
        super(message);
        this.name = 'UnauthorizedError';
        this.status = StatusCode.HTTP_401_UNAUTHORIZED;
    }
}