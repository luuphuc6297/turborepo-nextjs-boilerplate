import { getToken } from '@mgslab/libs/helpers'
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://35.240.231.112:8080',
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosClient.interceptors.request.use(
    //@ts-ignore
    function (config: AxiosRequestConfig) {
        // Do something before request is sent
        const token = getToken()
        if (token) {
            config!.headers!.Authorization = `Bearer ${token}`
        }
        return config
    },
    function (error: any) {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response: { data: any }) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data
    },
    function (error: any) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error)
    }
)

export default axiosClient
