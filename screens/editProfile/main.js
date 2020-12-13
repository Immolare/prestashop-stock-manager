import { Component } from 'react';
import ComponentView from './view';
import { createAction } from '@arivaa-react/redux';
import preProcess from '../../helpers/preprocess';
import { Toast } from '@arivaa-react-native/common';
import Spinner from '../../components/spinner';
import girl from '../../assets/girl.jpg';
import { GET_PROFILE, SAVE_PROFILE } from '../../redux/actions';
/**
 * @description Login Container
 * @type Container
 * @author Inderdeep
 */
class Main extends Component {
  /**
   * Container
   * @param props
   */
  constructor(props) {
    super(props);
    this.setValidations({});
    this.state = {
      profileImage: null,
    };
  }

  /**
   * Set Validations
   */
  setValidations(profile) {
    const { translate } = this.props;
    this.validations = {
      name: {
        rules: [
          { required: true, message: translate('common.name.error.required') },
        ],
        initialValue: profile.name,
      },
      email: {
        rules: [
          { required: true, message: translate('common.email.error.required') },
          { type: 'email', message: translate('common.email.error.invalid') },
        ],
        initialValue: profile.email,
      },
      phone: {
        rules: [
          { min: 10, message: translate('common.phone.error.min') },
          { max: 15, message: translate('common.phone.error.max') },
          { type: 'integer', message: translate('common.phone.error.invalid') },
        ],
        initialValue: profile.phone,
      },
    };
  }

  /**
   * Component will receive props hook
   * @param newProps
   */
  UNSAFE_componentWillReceiveProps(newProps) {}

  /**
   * set profile image
   * @param profileImage
   */
  setProfileImage(profileImage) {
    //console.log(profileImage)
    this.setState({
      profileImage: profileImage
        ? {
            uri: profileImage,
          }
        : girl,
    });
  }

  /**
   * Get profile
   */
  getProfile() {
    const { getProfile, user, auth, translate } = this.props;
    Spinner.start();
    getProfile()
      .then(() => {
        this.setValidations({
          ...auth,
          ...user,
        });
        this.setProfileImage(user.profileImage);
        Spinner.stop();
      })
      .catch((err) => {
        Spinner.stop();
        Toast.fail(translate('profile.error'));
      });
  }

  /**
   * ComponentDidMount Hook
   */
  componentDidMount() {
    this.getProfile();
  }

  /**
   * On Submit of form
   * @param errors
   * @param values
   */
  onSubmit(values) {
    const { saveProfile, user, navigation, translate } = this.props;
    Spinner.start();
    let data = {
      ...values,
    };
    if (user.profileImage != this.state.profileImage) {
      data.profileImage = this.state.profileImage.uri;
    }

    saveProfile({
      ...user,
      ...data,
    }).then((action) => {
      Spinner.stop();
      if (action.error) {
        Toast.fail(translate('profile.saveError'));
      } else {
        Toast.success(translate('profile.success'));
        navigation.navigate('profile');
      }
    });
  }

  /**
   * Change Image
   * @param result
   */
  changeImage(result) {
    if (!result.cancelled) {
      this.setProfileImage(result.base64Image || result.uri);
    }
  }

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
     * Save Profile Action Creator
     * @param drawerId
     */
    saveProfile: (data) => {
      return dispatch(createAction(SAVE_PROFILE, data));
    },
    /**
     * Save Profile Action Creator
     * @param drawerId
     */
    getProfile: (data) => {
      return dispatch(createAction(GET_PROFILE, data));
    },
  };
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {
  const { auth, user } = state;
  return {
    auth,
    user,
  };
};
Main.displayName = 'Edit-Profile';
export default preProcess(Main, {
  connect: [mapStateToProps, bindAction],
  localize: true,
});
