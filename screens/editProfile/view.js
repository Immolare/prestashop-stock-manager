import React from 'react';
import styles from './styles';
import {
  Image,
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Form, ImagePicker, LinkBack, Icon } from '@arivaa-react-native/common';

//import InputItemStyle from "antd-mobile-rn/lib/input-item/style/index.native";
const InputItemStyle = {}; // To do jo
var view = function () {
  const { name, email, phone } = this.validations;
  const { translate, navigation } = this.props;
  const { profileImage } = this.state;

  const formElements = [
    {
      type: 'text',
      name: 'name',
      inputProps: {
        clear: true,
        placeholder: translate('common.name.placeholder'),
        labelNumber: 1.5,
        style: [styles.input],
        styles: {
          ...InputItemStyle,
          input: {
            ...InputItemStyle.input,
            fontSize: 14,
          },
        },
        placeholderTextColor: '#555',
        children: (
          <Icon
            type="feather"
            name={'user'}
            size={20}
            style={[styles.inputIcon]}
          />
        ),
      },
      before: (
        <Text style={[styles.fieldLabel]}>
          {translate('common.name.title')} *
        </Text>
      ),
      options: name,
    },
    {
      type: 'email',
      name: 'email',
      inputProps: {
        clear: true,
        placeholder: translate('common.email.placeholder'),
        labelNumber: 1.5,
        style: [styles.input],
        styles: {
          ...InputItemStyle,
          input: {
            ...InputItemStyle.input,
            fontSize: 14,
          },
        },
        placeholderTextColor: '#555',
        children: (
          <Icon
            type="feather"
            name={'mail'}
            size={20}
            style={[styles.inputIcon]}
          />
        ),
      },
      before: (
        <Text style={[styles.fieldLabel]}>
          {translate('common.email.title')} *
        </Text>
      ),
      options: email,
    },
    {
      type: 'number',
      name: 'phone',
      inputProps: {
        clear: true,
        placeholder: translate('common.phone.placeholder'),
        labelNumber: 1.5,
        style: [styles.input],
        styles: {
          ...InputItemStyle,
          input: {
            ...InputItemStyle.input,
            fontSize: 14,
          },
        },
        placeholderTextColor: '#555',
        children: (
          <Icon
            type="feather"
            name={'phone'}
            size={20}
            style={[styles.inputIcon]}
          />
        ),
      },
      before: (
        <Text style={[styles.fieldLabel]}>{translate('profile.phone')}</Text>
      ),
      options: phone,
    },
  ];
  console.log({ navigation });
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={0}
      behavior={Platform.OS === 'ios' ? 'padding' : 'margin'}
      style={[styles.container]}
    >
      <View style={[styles.back]}>
        <LinkBack />
      </View>
      <ScrollView>
        <View style={[styles.content]}>
          <View style={[styles.form]}>
            <View style={[styles.imageBox]}>
              <Image source={profileImage} style={[styles.image]} />
              <ImagePicker onImageSelected={this.changeImage.bind(this)}>
                <View style={[styles.changeImageLink]}>
                  <Text style={[styles.text]}>
                    <Icon type="ionicons" name="md-create" />{' '}
                    {translate('profile.changeImage')}
                  </Text>
                </View>
              </ImagePicker>
            </View>
            <Form
              elements={formElements}
              style={{
                Body: styles.list,
              }}
              onSubmit={this.onSubmit.bind(this)}
              submitTrigger={{
                buttonProps: {
                  style: styles.button,
                },
                textProps: {
                  style: styles.buttonText,
                },
                text: translate('profile.save'),
              }}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
module.exports = view;
