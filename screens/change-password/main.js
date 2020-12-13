import { Component } from 'react';
import ComponentView from './view';
import { createAction } from '@arivaa-react/redux';
import preProcess from '../../helpers/preprocess';
import { Toast } from '@arivaa-react-native/common';
import Spinner from '../../components/spinner';
import { CHANGE_PASSWORD } from '../../redux/actions';
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
        ], //,
        //initialValue: "12345"
      },
      cpassword: {
        rules: [
          {
            required: true,
            message: translate('common.passwordConfirm.error.required'),
          },
        ], //,
        //initialValue: "12345"
      },
    };
  }

  /**
   * On Submit of form
   * @param errors
   * @param values
   */
  onSubmit(values) {
    const { changePassword, navigation, translate } = this.props;
    if (values.password != values.cpassword) {
      Toast.fail(translate('changePassword.mismatch'));
      return;
    }
    Spinner.start();
    changePassword({
      ...values,
    }).then((action) => {
      Spinner.stop();
      if (action.error) {
        Toast.fail(translate('changePassword.error'));
      } else {
        Toast.success(translate('changePassword.success'));
        navigation.navigate('login');
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
     * Change Password Action Creator
     * @param data
     */
    changePassword: (data) => {
      return dispatch(createAction(CHANGE_PASSWORD, data));
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
Main.displayName = 'ChangePassword';
export default preProcess(Main, {
  connect: [mapStateToProps, bindAction],
  localize: true,
});
