import { create } from "apisauce";
const homePort = "8000";
let dev_url = "http://127.0.0.1:" + homePort + "/api";
let qas_out_url = "http://127.0.0.1:" + homePort + "/api";
let prd_url = "http://127.0.0.1:" + homePort + "/api";
let url = "";
let prd_check = "P";


url = qas_out_url;
prd_check = "L";


export const api = create({
    baseURL: url,
    withCredentials: true,
});

api.axiosInstance.interceptors.request.use(
    config => {
        if (config.method === "get") {
            config.params = {
                ...config.params,
                _: new Date().getTime(),
            };
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);
api.addResponseTransform(response => {
    // console.group(response);
    const { problem, status } = response;
    if (status === 400) {
        if (response.data) { message.error(response.data['msg'], 2); }
        response.data = [];
        return Promise.reject(problem);
    }
    // console.groupEnd();
});

export const BASE_PRD = prd_check;
export const BASE_URL = url;