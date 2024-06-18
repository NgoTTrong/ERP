import { HttpStatusCode } from "axios";

type ResponseAPI<T> = {
    statusCode: HttpStatusCode;
    message?: string;
    data: T | null;
};
