import {Messages, StatusCode} from "../constants";

export class ForbiddenError extends Error {
    public readonly status: number;

    constructor(message: string = Messages.NOT_FOUND_ERROR) {
        super(message);
        this.name = 'NotFoundError';
        this.status = StatusCode.HTTP_404_NOT_FOUND;
    }
}