import {Messages, StatusCode} from "../constants";
import {HttpError} from "./http-error";

class BadRequestError extends HttpError {
    constructor(message: string = Messages.BAD_REQUEST_ERROR) {
        super(StatusCode.HTTP_400_BAD_REQUEST, message);
    }
}