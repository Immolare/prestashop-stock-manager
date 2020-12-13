import { Component } from 'react';

import ComponentView from './view';
import { createAction } from '@arivaa-react/redux';
import preProcess from '../../helpers/preprocess';
import { Toast } from '@arivaa-react-native/common';
import Spinner from '../../components/spinner';
import { FORGOT } from '../../redux/actions';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmOtp: false,
      verificationData: null,
    };
    this.setValidations();
  }

  /**
   * Set Validations
   */
  setValidations() {
    const { translate } = this.props;
    this.validations = {
      email: {
        rules: [
          { required: true, message: translate('common.email.error.required') },
          { type: 'email', message: translate('common.email.error.invalid') },
        ],
        initialValue: 'demo@laxaar.com',
      },
    };
  }

  /**
   * On Submit of form
   * @param errors
   * @param values
   */
  onSubmit(values) {
    const { forgotPassword, navigation, translate } = this.props;
    Spinner.start();
    forgotPassword(values).then((action) => {
      Spinner.stop();
      if (action.error) {
        Toast.success(translate('forgot.invalid'));
      } else {
        Toast.success(translate('forgot.submissionSuccess'));
        /**
         * Set verification Data in state to pass it to verification modal
         * So that even if a new field is added in forgot password form
         * it is available in verification modal
         */
        this.setState({
          confirmOtp: true,
          verificationData: values,
        });
      }
    });
  }

  onHideConfirmOtp() {
    this.setState({
      confirmOtp: false,
    });
  }

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
     * Login Action Creator
     * @param drawerId
     */
    forgotPassword: (data) => {
      return dispatch(createAction(FORGOT, data));
    },
  };
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    auth,
  };
};
Main.displayName = 'ForgotPassword';
export default preProcess(Main, {
  connect: [mapStateToProps, bindAction],
  localize: true,
});
