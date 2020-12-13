import { createAction } from '@arivaa-react/redux/helpers/action';
import { checkAuthData } from '../../../helpers/security';
import { LOGIN, GET_SHOPS } from '..';

export const pvLogin = async (data) => async (dispatch) => {
    try {

        const payload = await checkAuthData(data);
        
        if (!payload.data.shops.length) {
            throw new Error("Shops could not be found.");
        }

        return Promise.all([
            dispatch(createAction(LOGIN, data)),
            dispatch(createAction(GET_SHOPS, payload))
        ]);
    }
    catch (e) {
        throw e;
    }
}