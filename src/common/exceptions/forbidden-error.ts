import {Messages, StatusCode} from "../constants";
import {HttpError} from "./http-error";

export class ForbiddenError extends HttpError {
    constructor(message: string = Messages.NOT_FOUND_ERROR) {
        super(StatusCode.HTTP_404_NOT_FOUND, message);
    }
}