import axios from "axios";
import FormData from "form-data";
import { mainApi } from "./endpoint";

class UploadCareAPI {
    static async uploadAzure(file: File) {
        try {
            const form = new FormData();
            form.append("myfile", file);

            const response = await axios({
                method: "post",
                url: mainApi + "/blob-azure/upload",
                data: form,
                headers: { "Content-Type": "multipart/form-data" },
            });
            return response?.data?.url as string;
        } catch (error) {}
        return null;
    }
}
export default UploadCareAPI;
