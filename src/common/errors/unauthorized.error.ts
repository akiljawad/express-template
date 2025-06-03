import {Messages, StatusCode} from "@common/constants";
import {HttpError} from "@common/errors/http.error";

class UnauthorizedError extends HttpError {
    constructor(message: string = Messages.UNAUTHORIZED_ERROR) {
        super(StatusCode.HTTP_401_UNAUTHORIZED, message);
    }
}