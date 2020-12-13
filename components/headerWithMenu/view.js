import React from 'react';
import styles from './styles';
import { Text, View } from 'react-native';
import { Icon, LinkWithoutNavigation } from '@arivaa-react-native/common';

var view = function () {
  const { navigation, hide } = this.props;
  return hide == false ? null : (
    <View style={[styles.header, styles.headerNav]}>
      <View style={[styles.headerLeftText, styles.headerLeftIcon]}>
        <LinkWithoutNavigation
          onPress={this.openDrawer.bind(this)}
          navigation={navigation}
        >
          <Text style={[styles.headerTextColor]}>
            <Icon
              type="simple-line-icons"
              name="menu"
              style={[styles.menuIcon]}
            />
          </Text>
        </LinkWithoutNavigation>
      </View>
    </View>
  );
};
module.exports = view;
