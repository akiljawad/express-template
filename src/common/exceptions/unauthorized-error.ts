import {Messages, StatusCode} from "../constants";
import {HttpError} from "./http-error";

class UnauthorizedError extends HttpError {
    constructor(message: string = Messages.UNAUTHORIZED_ERROR) {
        super(StatusCode.HTTP_401_UNAUTHORIZED, message);
    }
}