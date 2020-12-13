import React from 'react-native';
import { Colors } from '@arivaa-react-native/common/styles';

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    padding: 20,
  },
  logoContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  form: {
    alignSelf: 'stretch',
    paddingTop: 40,
  },
  list: {
    backgroundColor: 'transparent',
  },
  input: {
    backgroundColor: Colors.inputBackgroundColor,
  },
  inputIcon: {
    width: 18,
  },
  button: {
    marginBottom: 10,
    borderRadius: 2,
    borderWidth: 0,
    height: 57,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: Colors.primaryColor,
  },
  textLink: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'left',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingBottom: 10,
  },
  separator: {
    height: 40,
    width: 2,
    backgroundColor: '#ff9599',
    marginTop: 8,
  },
  optionLabel: {
    color: '#fff',
  },
  social: {
    flex: 1,
    flexDirection: 'row',
  },
  socialIcon: {
    width: 30,
    marginRight: 10,
  },
  forgotPassword: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 20,
  },
});

export default styles;
