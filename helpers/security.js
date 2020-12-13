/**
 * Security and authentication related helper methods
 */
import axios from 'axios';
import {
    save,
    load,
    remove,
} from '@arivaa-react-native/common/helpers/storage';

const LOGIN_KEY = 'loginData';

export function checkAuthData(data) {
    let makeRequest = axios.create();
    const { credentials } = data;
    const { endpoint, token } = credentials;

    const requestConfig = {
        url: `${endpoint}shops?display=[id, name]`,
        method: 'get',
        headers: {
            'Authorization': `Basic ${token}`,
            'Io-Format': 'JSON',
            'Output-Format': 'JSON'
        }
    };
    
    return makeRequest(requestConfig);
}

/**
 * Save Authentication Data to Local Storage and Set Header
 * @param data
 * @returns {boolean}
 */
export function saveAuthData(data) {
    const { credentials } = data;
    const { endpoint, token } = credentials;

    axios.defaults.baseURL = endpoint;
    axios.defaults.headers.common.Authorization = 'Basic ' + token;

    return save({
        key: LOGIN_KEY,
        value: {
            endpoint: endpoint,
            token: token
        },
    });
}
/**
 * Get Authentication Data from Local Storage and Set Header
 * @param data
 * @returns {boolean}
 */
export function getAuthData() {
    return load({
        key: LOGIN_KEY,
    }).then((data) => {
        const { endpoint, token } = data;
    
        axios.defaults.baseURL = endpoint;
        axios.defaults.headers.common.Authorization = 'Basic ' + token;

        return data;
    });
}
/**
 * Remove Authentication Data from Local Storage and Set Header
 * @param data
 * @returns {boolean}
 */
export function removeAuthData() {
    axios.defaults.headers.common.Authorization = null;
    axios.defaults.baseURL = null;
    return remove(LOGIN_KEY);
}
