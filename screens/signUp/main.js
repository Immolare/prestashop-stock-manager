import { Component } from 'react';
import ComponentView from './view';
import { createAction } from '@arivaa-react/redux';
import preProcess from '../../helpers/preprocess';
import { Toast } from '@arivaa-react-native/common';
import Spinner from '../../components/spinner';
import { handleSocialSignIn, handleSocialSignInError, login } from '../login';
import { REGISTER, LOGIN } from '../../redux/actions';

class Main extends Component {
  static get defaultProps() {
    return {
      title: 'SignUpView',
    };
  }

  /**
   * Constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.setValidations();
    this.login = login.bind(this);
    this.handleSocialSignIn = handleSocialSignIn.bind(this);
    this.handleSocialSignInError = handleSocialSignInError.bind(this);
  }

  /**
   * Set Validations
   */
  setValidations() {
    const { translate } = this.props;
    this.validations = {
      name: {
        rules: [
          { required: true, message: translate('common.name.error.required') },
        ],
        initialValue: 'Demo User',
      },
      email: {
        rules: [
          { required: true, message: translate('common.email.error.required') },
          { type: 'email', message: translate('common.email.error.invalid') },
        ],
        initialValue: 'demo@laxaar.com',
      },
      password: {
        rules: [
          {
            required: true,
            message: translate('common.password.error.required'),
          },
          {
            min: 4,
            message: translate('common.passwordLength.error.required'),
          },
        ],
        initialValue: '12345',
      },
      phone: {
        rules: [
          { min: 10, message: translate('common.phone.error.min') },
          { max: 15, message: translate('common.phone.error.max') },
        ],
      },
    };
  }

  /**
   * On Submit of form
   * @param errors
   * @param values
   */
  onSubmit(values) {
    const { signUp, translate } = this.props;
    Spinner.start();
    signUp({
      ...values,
      phone: '9999999999',
    }).then((action) => {
      Spinner.stop();
      if (action.error) {
        Toast.fail(translate('signUp.fail'));
      } else {
        this.login('local', {
          email: values.email,
          password: values.password,
          name: values.name,
        });
      }
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
    signUp: (data) => {
      return dispatch(createAction(REGISTER, data));
    },
    /**
     * Login Action Creator
     * @param drawerId
     */
    login: (data) => {
      return dispatch(createAction(LOGIN, data));
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
Main.displayName = 'SignUp';
export default preProcess(Main, {
  connect: [mapStateToProps, bindAction],
  localize: true,
});
