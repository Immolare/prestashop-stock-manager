import React from 'react';
import styles from './styles';
import { Accordion } from '@ant-design/react-native';
import { getModifiedProps, mergeStyles } from '../util';

const customProps = ['data'];
/**
 * View
 * @returns {XML}
 */
var view = function () {
  const { data, style } = this.props;
  let propStyles = this.props.styles;
  //console.log(style, styles)

  return (
    <Accordion
      accordion
      {...getModifiedProps(this.props, customProps)}
      onChange={this.onChange.bind(this)}
      activeSections={
        this.state.activeKey !== null ? [this.state.activeKey] : []
      }
      styles={mergeStyles('accordion', {
        headerText: styles.accordionTitle,
        contentText: styles.accordionContent,
        ...propStyles,
        container: style,
      })}
    >
      {(data || []).map((item, index) => {
        return (
          <Accordion.Panel key={index} header={item.title}>
            {item.content}
          </Accordion.Panel>
        );
      })}
    </Accordion>
  );
};
module.exports = view;
