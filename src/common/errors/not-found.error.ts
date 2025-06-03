import {Messages, StatusCode} from "@common/constants";
import {HttpError} from "@common/errors/http.error";

class NotFoundError extends HttpError {
    constructor(message: string = Messages.NOT_FOUND_ERROR) {
        super(StatusCode.HTTP_404_NOT_FOUND, message);
    }
}