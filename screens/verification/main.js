import { Component } from 'react';

import ComponentView from './view';
import { createAction } from '@arivaa-react/redux';
import preProcess from '../../helpers/preprocess';

import { VERIFY_OTP } from '../../redux/actions';
class Main extends Component {
  constructor(props) {
    super(props);
    this.setValidations();
  }

  /**
   * Set Validations
   */
  setValidations() {
    const { translate } = this.props;
    this.validations = {
      number: {
        rules: [
          {
            required: true,
            message: translate('common.verification.error.required'),
          },
          { len: 4, message: translate('common.verification.error.valid') },
        ],
        initialValue: '1234',
      },
    };
  }

  componentDidMount() {}

  /**
   * On Submit of form
   * @param errors
   * @param values
   */
  onSubmit(values) {
    const {
      verification,
      navigation,
      verificationData,
      translate,
    } = this.props;
    this.toast.loading();
    verification(values).then((action) => {
      if (action.error) {
        this.toast.fail(translate('verification.fail'));
      } else {
        this.toast.success(translate('verification.success'));
        navigation.navigate('resetPassword', {
          otp: values.otp,
          ...verificationData,
        });
      }
      this.toast.hide();
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
    verification: (data) => {
      return dispatch(createAction(VERIFY_OTP, data));
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
Main.displayName = 'Verification';
export default preProcess(Main, {
  connect: [mapStateToProps, bindAction],
  localize: true,
});
