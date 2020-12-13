import { Component } from 'react';
import ComponentView from './view';
import preProcess from '../../helpers/preprocess';
import { createForm } from 'rc-form';
import { load, save } from '@arivaa-react-native/common/helpers/storage';

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
    this.radio_props = [
      { label: 'English', value: 'en' },
      { label: 'French', value: 'fr' },
    ];
  }

  /**
   * ComponentDidMount Hook
   */
  componentDidMount() {
    const { setActiveLanguage } = this.props;
    load({
      key: 'LANGUAGE',
    })
      .then((language) => {
        let selectedIndex = 0;
        this.radio_props.map((lang, index) => {
          if (lang.value == language) {
            selectedIndex = index;
          }
        });
        this.refs.radioForm.updateIsActiveIndex(selectedIndex);
        setActiveLanguage(language);
      })
      .catch((e) => {});
  }

  /**
   * Switch language
   * @param value
   */
  switchLanguage(language) {
    language = language.value || language;
    const { setActiveLanguage } = this.props;
    save({
      key: 'LANGUAGE',
      value: language,
    });
    setActiveLanguage(language);
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
  return {};
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {
  return {};
};
Main.displayName = 'Splash';
export default preProcess(createForm()(Main), {
  connect: [null, bindAction],
  localize: true,
});
