import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const get = async (city: string) => {
    const url = `weather?location.name=${city}`
    const client = axios.create({ baseURL, headers: {} });
    const { data } = await client.get(
        url,
        {},
    );
    return data;
};
