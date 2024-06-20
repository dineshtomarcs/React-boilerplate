import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 120000,
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("userToken");
    if (token) {
        config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
});

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Check if the error is due to an expired token
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newToken: any = "" // you can get get user token here
                localStorage.setItem("userToken", newToken?.token);
                apiClient.defaults.headers.common["Authorization"] = "Bearer " + newToken;
                originalRequest.headers["Authorization"] = "Bearer " + newToken;
                return apiClient(originalRequest);
            } catch (tokenRefreshError) {

                console.error("Token refresh failed:", tokenRefreshError);
                return Promise.reject(tokenRefreshError);
            }
        }
        return Promise.reject(error);
    }
);

export { apiClient };
