import {Messages, StatusCode} from "../constants";
import {HttpError} from "./http.error";

export class UnprocessableError extends HttpError {
    constructor(message: string = Messages.UNPROCESSABLE_ERROR) {
        super(StatusCode.HTTP_422_UNPROCESSABLE_ENTITY, message);
    }
}