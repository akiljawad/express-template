import {Messages, StatusCode} from "../constants";
import {HttpError} from "./http-error";

class NotFoundError extends HttpError {
    constructor(message: string = Messages.NOT_FOUND_ERROR) {
        super(StatusCode.HTTP_404_NOT_FOUND, message);
    }
}