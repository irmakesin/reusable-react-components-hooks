import axios from "axios";

export async function httpGet(url) {
    try {
        const response = await axios.request(url);
        return response;
    } catch (error) {
        return console.error(error);
    }
}

export async function httpPost(url, { data }) {
    try {
        const response = await axios.post(url, {
            data,
        });
        return response;
    } catch (error) {
        return console.error(error);
    }
}

export async function httpDelete(url, { data }) {
    try {
        const response = await axios.delete(url, { data: { data } });
        return response;
    } catch (error) {
        return console.error(error);
    }
}

export async function httpPut(url, { data }) {
    try {
        const response = await axios.put(url, { data });
        return response;
    } catch (error) {
        return console.error(error);
    }
}
