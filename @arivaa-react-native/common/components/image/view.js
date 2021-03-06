import React from 'react';
import CustomImage from 'react-native-image-progress';

import { getImage, getModifiedProps } from '../util';
import { StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Colors } from '../../styles';

/**
 * View
 * @returns {XML}
 */
var view = function () {
  let { source, style, indicator, containerStyle } = this.props;
  if (typeof indicator !== 'undefined' && !indicator) {
    return <Image {...this.props} source={getImage(source)} />;
  }
  return (
    <CustomImage
      indicator={() => (
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      )}
      {...getModifiedProps(this.props, [
        'style',
        'containerStyle',
        'indicatorProps',
      ])}
      indicatorProps={{
        color: Colors.primaryColor,
        type: 'circle',
        size: 30,
        ...this.props.indicatorProps,
      }}
      source={getImage(source)}
      style={containerStyle ? containerStyle : style}
      //Put Stylesheet.flatten cz faced a warning of array being passed instead of object
      imageStyle={StyleSheet.flatten(style)}
    />
  );
};
module.exports = view;
