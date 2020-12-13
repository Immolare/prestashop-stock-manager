import { Component } from 'react';
import ComponentView from './view';
import Spinner from '../../components/spinner';
import { createAction } from '@arivaa-react/redux';
import preProcess from '../../helpers/preprocess';
import { Toast } from '@arivaa-react-native/common';
import { GET_PROFILE } from '../../redux/actions';
/**
 * @description profile container
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
  }

  /**
   * ComponentDidMount Hook
   */
  componentDidMount() {
    this.getProfile();
  }

  /**
   * Get profile
   */
  getProfile() {
    const { translate } = this.props;
    Spinner.start();
    this.props
      .getProfile()
      .then(() => {
        Spinner.stop();
      })
      .catch((err) => {
        Spinner.stop();
        Toast.fail(translate('profile.error'));
      });
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
Main.displayName = 'Profile';
export default preProcess(Main, {
  connect: [mapStateToProps, bindAction],
  localize: true,
});
