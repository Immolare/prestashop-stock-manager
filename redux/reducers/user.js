import { getError } from '@arivaa-react/redux';
import { SELECT_SHOP, GET_PROFILE, LOGOUT, SAVE_PROFILE } from '../actions';

/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = null, action) {
    switch (action.type) {
        case SELECT_SHOP:
            if (!getError(action)) {
                let data = action.payload.data.shop;
                return {
                    ...data,
                };
            } else {
                return null;
            }
        case GET_PROFILE:
            if (!getError(action)) {
                let data = action.payload.data.shop;
                return {
                    ...data,
                };
            } else {
                return null;
            }
        case SAVE_PROFILE:
            if (!getError(action)) {
                let data = action.payload.data;
                return {
                    ...data,
                };
            } else {
                return null;
            }
        case LOGOUT:
            return null;
    }
    return state;
}
