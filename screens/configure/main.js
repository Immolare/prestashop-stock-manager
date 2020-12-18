import { Component } from 'react';
import ComponentView from './view';
import preProcess from '../../helpers/preprocess';
import { Toast } from '@arivaa-react-native/common';
import { createAction } from '@arivaa-react/redux';
import { GET_SHOPS } from '../../redux/actions';
import Spinner from '../../components/spinner';
import { pvProfile } from '../../redux/actions/custom';

/**
 * @description Home
 * @type Component
 * @author Inderdeep
 */
class Main extends Component {
    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props);
        this.setValidations();
        this.getProfile = getProfile.bind(this);
    }

        /**
     * Set Validations
     */
    setValidations() {
        const { translate, shopList } = this.props;

        this.validations = {
            selectShop: {
                rules: [
                    { required: true, message: translate('common.shop.error.required') },
                ],
                initialValue: shopList[0].value
            },
        };
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() { 
    }

    /**
     * On Select a shop
     * @param errors
     * @param values
     */
    onSubmit(value) {
        this.getProfile(value);
    }

    /**
     * Open Drawer
     */
    /*openDrawer() {
        const { navigation } = this.props;
        navigation.openDrawer();
    }*/

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return ComponentView.bind(this)();
    }
}
/**
 * Bind Redux Actions
 * @param dispatch
 * @returns {{Object}}
 */
const bindAction = (dispatch) => {
    return {
        // select one shop
        getProfile: (data) => {            
            return dispatch(pvProfile(data));
        },
        // return all auth's shops
        getShops: (data) => {            
            return dispatch(createAction(GET_SHOPS, data));
        },
    };
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {
    const { shop } = state;

    const shopList = Object.values(shop).map(s => {
        return { label: s.name, value: s.id };
    });

    return {
        shop,
        shopList
    };
};
Main.displayName = 'Configure';
export default preProcess(Main, {
    connect: [mapStateToProps, bindAction],
    localize: true,
});

/**
 * Export common profile methods to be
 * used in elsewhere
 */
/**
 * getProfile
 * @param shop - shop ID
 */
export async function getProfile(profile) {
    const { getProfile, navigation, translate } = this.props;
    Spinner.start();

    try {
        
        const { error, payload } = await getProfile({
            profile
        });
       
        if (error) {
            throw payload.response;
        }

        /**
        * Changed it to secured because
        * due to nested navigators, if i redirect to
        * default INITIAL_SECURED_ROUTE, it loads the
        * screen twice
        * Reference -
        * https://github.com/react-navigation/react-navigation/issues/2599
        * Comment by javidjamae
        */
        navigation.navigate('secured');

        Toast.success(translate('profile.success'));
    } catch (e) {
        console.log(e);
        
        Toast.fail(translate('profile.saveError'));
    }

    Spinner.stop();
}