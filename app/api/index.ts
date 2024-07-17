import axios from "axios"

export const baseURL = "https://api-socialfi.memegoat.io"

const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})

export { instance }