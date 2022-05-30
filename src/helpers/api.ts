import axios from 'axios';

const URL = "https://api.itbook.store/1.0/";

const fetch = () => async (uri?: string) => {

    const runRequest = async () => {
        const response = await axios({
            url: `${URL}${uri}`
        });
        return response;
    }

    return await runRequest();
};

const api = {
    get: fetch()
}

export default api;