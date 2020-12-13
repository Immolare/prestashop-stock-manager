import React from 'react';
import styles from './styles';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link, LinkBack } from '@arivaa-react-native/common';
import girl from '../../assets/girl.jpg';

/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
  const { user, navigation, translate } = this.props;
  return (
    <View style={[styles.container]}>
      <ScrollView style={[styles.scrollBox]}>
        {user ? (
          <View style={[styles.content]}>
            <View style={[styles.general]}>
              <View style={[styles.back]}>
                <LinkBack />
              </View>
              <View style={[styles.editAction]}>
                <Link
                  link="editProfile"
                  style={[styles.button, styles.editBtn]}
                  textStyle={[styles.buttonText, styles.editText]}
                >
                  <Text style={[styles.editIcon]}>
                    {translate('profile.edit')}
                  </Text>
                </Link>
              </View>
              <View style={[styles.imageBox]}>
                <Image
                  source={user.profileImage ? { uri: user.profileImage } : girl}
                  style={[styles.image]}
                />
              </View>
              <View style={[styles.userInformation]}>
                <View style={[styles.info]}>
                  <Text style={[styles.label]}>
                    {translate('profile.name')}
                  </Text>
                  <Text style={[styles.separator]}>:</Text>
                  <Text style={[styles.value]}>{user.name}</Text>
                </View>
                <View style={[styles.info]}>
                  <Text style={[styles.label]}>
                    {translate('profile.email')}
                  </Text>
                  <Text style={[styles.separator]}>:</Text>
                  <Text style={[styles.value]}>{user.email}</Text>
                </View>
                <View style={[styles.info]}>
                  <Text style={[styles.label]}>
                    {translate('profile.phone')}
                  </Text>
                  <Text style={[styles.separator]}>:</Text>
                  <Text style={[styles.value]}>{user.phone}</Text>
                </View>
              </View>
            </View>
          </View>
        ) : null}
      </ScrollView>
      <View style={[styles.footer]} />
    </View>
  );
};
module.exports = view;
