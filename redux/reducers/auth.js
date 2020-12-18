import { getError } from '@arivaa-react/redux';

/**
 * Authentication Reducer
 */

import { getAuthData, removeAuthData, saveAuthData, checkAuthData } from '../../helpers/security';
import { CHECK_LOGIN, LOGIN, LOGOUT } from '../actions';

/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = null, action) {
    let data = null;
    switch (action.type) {
        case LOGIN: 
            if (getError(action)) {
                removeAuthData();
                return null;
            }
            else {
                data = action.payload;
                saveAuthData(data);
                return {
                    ...data,
                };
            }
        case CHECK_LOGIN:
            if (action.error) {
                return null;
            } else {
                return {
                    ...action.payload,
                };
            }
        case LOGOUT:
            removeAuthData();
            return null;
    }
    return state;
}
