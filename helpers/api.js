

import axios from 'axios';

let makeRequest = axios.create();

// Check the authentication
export function checkAuthData(data) {
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

// Get the shop datas
export function getShopData(data) {
    const { profile } = data;
    const { id } = profile;

    const requestConfig = {
        url: `shops/${id}`, // No need to pass endpoint since it was defined in auth
        method: 'get',
        headers: {
            // Idem for Authorization
            'Io-Format': 'JSON',
            'Output-Format': 'JSON'
        }
    };
    
    return makeRequest(requestConfig);
}

// Get the shop logo
export function getLogoData() {
    const requestConfig = {
        url: `images/general/header`, // No need to pass endpoint since it was defined in auth
        method: 'get',
        headers: {
            'Accept': 'image/*',
        },
        responseType: 'arraybuffer'
    };
    
    return makeRequest(requestConfig);
}