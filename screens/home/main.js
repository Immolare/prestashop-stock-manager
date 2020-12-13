import { Component } from 'react';
import ComponentView from './view';
import preProcess from '../../helpers/preprocess';
import { Toast } from '@arivaa-react-native/common';
import { createAction } from '@arivaa-react/redux';
import { GET_SHOPS, SELECT_SHOP } from '../../redux/actions';
import Spinner from '../../components/spinner';

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
        this.selectShop = selectShop.bind(this);
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
        this.selectShop(value);
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
        /**
         * selectShop Action Creator
         * @param drawerId
         */
        selectShop: (data) => {            
            return dispatch(createAction(SELECT_SHOP, data));
        },
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
        //drawer: !!state.ui.drawer,
        shop,
        shopList
    };
};
Main.displayName = 'Home';
export default preProcess(Main, {
    connect: [mapStateToProps, bindAction],
    localize: true,
});

/**
 * Export common login methods to be
 * used in signup
 */
/**
 * selectShop
 * @param shop - shop ID
 */
export async function selectShop(shop) {
    const { selectShop, navigation, translate } = this.props;
    Spinner.start();

    try {
        
        const { error, payload } = await selectShop({
            shop
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
        //navigation.navigate('secured');

        Toast.success(translate('login.success'));
    } catch (e) {
        console.log(e);
        
        Toast.fail(translate('login.invalid'));
    }
    Spinner.stop();
}