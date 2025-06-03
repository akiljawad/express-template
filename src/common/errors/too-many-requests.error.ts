import {Messages, StatusCode} from "../constants";
import {HttpError} from "./http.error";

class TooManyRequestsError extends HttpError {
    constructor(message: string = Messages.TOO_MANY_REQUESTS_ERROR) {
        super(StatusCode.HTTP_429_TOO_MANY_REQUESTS, message);
    }
}