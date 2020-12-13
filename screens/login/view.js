import React from 'react';
import styles from './styles';
import { Image, ScrollView, Text, View } from 'react-native';
import { Form, Link, SocialSignIn } from '@arivaa-react-native/common';
import logo from '../../assets/logo.png';
import envelope from '../../assets/envelope.png';
import lock from '../../assets/lock.png';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';
import { EXPO_GOOGLE_CLIENT_IDS } from '../../constants/environment';
import { Colors } from '@arivaa-react-native/common/styles';
/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
  const { endpoint, token } = this.validations;
  const { translate } = this.props;
  const formElements = [
    {
      type: 'text',
      name: 'endpoint',
      inputProps: {
        clear: true,
        placeholder: translate('common.email.placeholder'),
        labelNumber: 1.5,
        style: [styles.input],
        placeholderTextColor: '#fff',
        styles: {
          input: {
            color: '#fff',
          },
          container: {
            backgroundColor: Colors.inputBackgroundColor,
            borderWidth: 0,
            borderBottomColor: 'transparent',
          },
        },
        children: (
          <Image
            resizeMode="contain"
            source={envelope}
            style={[styles.inputIcon]}
          />
        ),
      },
      options: endpoint,
    },
    {
      type: 'text',
      name: 'token',
      inputProps: {
        clear: true,
        placeholder: translate('common.password.placeholder'),
        labelNumber: 1.5,
        style: [styles.input],
        styles: {
          input: {
            color: '#fff',
          },
          container: {
            backgroundColor: Colors.inputBackgroundColor,
            borderWidth: 0,
            borderBottomColor: 'transparent',
          },
        },
        placeholderTextColor: '#fff',
        children: (
          <Image
            resizeMode="contain"
            source={lock}
            style={[styles.inputIcon]}
          />
        ),
      },
      after: (
        <Link
          textStyle={[styles.forgotPassword]}
          text={translate('login.forgot')}
          link="forgotPassword"
        />
      ),
      options: token,
    },
  ];
  return (
    <View style={[styles.container]}>
      <ScrollView>
        <View style={[styles.logoContainer]}>
          <Image resizeMode="contain" source={logo} style={[styles.logo]} />
        </View>
        <View style={[styles.form]}>
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
              text: translate('login.label'),
            }}
          />
        </View>
      </ScrollView>
      <View style={[styles.options]}>
        <View>
          <Text style={[styles.optionLabel]}>{translate('login.member')}</Text>
          <Link
            textStyle={[styles.textLink]}
            text={translate('login.signUp')}
            link="signUp"
          />
        </View>
        <View style={[styles.separator]} />
        <View>
          <Text style={[styles.optionLabel]}>{translate('login.social')}</Text>
          <View style={[styles.social]}>
            <SocialSignIn
              type="facebook"
              triggerElement={
                <Link>
                  <Image
                    resizeMode="contain"
                    source={facebook}
                    style={[styles.socialIcon]}
                  />
                </Link>
              }
              onSuccess={(result) => {
                this.handleSocialSignIn('facebook', result);
              }}
              onError={(error) => {
                this.handleSocialSignInError('facebook', error);
              }}
            />
            <SocialSignIn
              clientId={EXPO_GOOGLE_CLIENT_IDS}
              type="google"
              triggerElement={
                <Link>
                  <Image
                    resizeMode="contain"
                    source={google}
                    style={[styles.socialIcon]}
                  />
                </Link>
              }
              onSuccess={(result) => {
                this.handleSocialSignIn('google', result);
              }}
              onError={(error) => {
                this.handleSocialSignInError('google', error);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

module.exports = view;
