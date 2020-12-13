import { getError } from '@arivaa-react/redux';
import { GET_SHOPS, SELECT_SHOP } from '../actions';

/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = null, action) {
    switch (action.type) {
        case GET_SHOPS:
            if (!getError(action)) {
                let data = action.payload.data.shops;
                return {
                    ...data,
                };
            } else {
                return null;
            }
        case SELECT_SHOP:
            if (!getError(action)) {
                let data = action.payload.data.shop;
                return {
                    ...data,
                };
            } else {
                return null;
            }
    }
    return state;
}
