import { createAction } from '@arivaa-react/redux/helpers/action';
import { checkAuthData, getLogoData, getShopData } from '../../../helpers/api';
import { LOGIN, GET_SHOPS, GET_PROFILE } from '..';
import { Buffer } from 'buffer';
global.Buffer = Buffer; // very important

export const pvLogin = async (data) => async (dispatch) => {
    try {

        const payload = await checkAuthData(data);
        
        if (!payload.data.shops.length) {
            throw new Error("Shops could not be found.");
        }

        return Promise.all([
            dispatch(createAction(LOGIN, data)), // store credentials
            dispatch(createAction(GET_SHOPS, payload)) // store shops
        ]);
    }
    catch (e) {
        throw e;
    }
}

export const pvProfile = async (data) => async (dispatch) => {
    try {

        const payload = await getShopData(data);

        if (!payload.data.shop) {
            throw new Error("Shop could not be found.");
        }

        const payloadLogo = await getLogoData();

        let logo = {};
        logo.mimeType = payloadLogo.headers["content-type"];
        logo.base64 = Buffer.from(payloadLogo.data, 'binary').toString('base64');

        payload.data.shop.logo = logo;

        return dispatch(createAction(GET_PROFILE, payload)); // store shop in profile
    }
    catch (e) {
        throw e;
    }
}