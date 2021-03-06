import { Component } from 'react';
import ComponentView from './view';
import PropTypes from 'prop-types';
import moment from 'moment';

/**
 * @description Sample Component
 * @type Component
 * @author Inderdeep
 */

export default class Main extends Component {
  /**
   * Container
   * @param props
   */
  constructor(props) {
    super(props);
    let { value } = props;
    if (!(value instanceof Date)) {
      value = new Date();
    }
    this.state = {
      value: value,
      tempValue: value,
    };
  }

  /**
   * ComponentDidMount Hook
   */
  componentDidMount() {}

  /**
   * onChange
   */
  onChange() {
    const value = this.state.tempValue;
    const { onChange } = this.props;
    //console.log(value)
    this.setState({ value });
    if (onChange instanceof Function) {
      onChange(value);
    }
    this.modalTriggerRef.hideModal();
  }

  /**
   * On Value Change
   * @param tempValue
   */
  onValueChange(tempValue) {
    //console.log(tempValue)
    this.setState({ tempValue });
  }

  /**
   * On Cancel
   */
  onCancel() {
    this.modalTriggerRef.hideModal();
  }

  /**
   * componentWillReceiveProps Method
   * @returns {*}
   */

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { value } = this.state;
    if (nextProps.value !== value) {
      this.setState({ value: nextProps.value });
    }
  }

  getYearString() {
    const { value } = this.props;
    return moment(value).format('YYYY');
  }

  getYearDate(val) {
    if (!isNaN(val) && min.toString().length === 4) {
      const date = new Date();
      date.setFullYear(val);
      return date;
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

Main.displayName = 'Time-Picker-Component';

Main.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.object,
  onShow: PropTypes.func,
  onHide: PropTypes.func,
  displayMode: PropTypes.string,
  type: PropTypes.string,
};
