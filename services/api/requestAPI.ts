import axios, { AxiosRequestConfig } from "axios";
import { ResponseAPI } from "./type";
import { message } from "antd";

export default class RequestAPI {
    static call = async <T>(
        url: string,
        { method = "GET", ...config }: AxiosRequestConfig = { method: "GET" }
    ): Promise<ResponseAPI<T>> => {
        try {
            const token = JSON.parse(
                localStorage.getItem("_app_token") ?? "{}"
            );

            const response = await axios({
                method,
                baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
                url,
                ...config,
                headers: {
                    ...config.headers,
                    "Content-Type": "application/json; charset=utf-8",
                    Authorization: "Bearer " + token,
                },
            });
            return {
                statusCode: response.status,
                message: response.statusText,
                data: response.data,
            };
        } catch (error) {}
        return {
            statusCode: 404,
            message: "Not found",
            data: null,
        };
    };
}
