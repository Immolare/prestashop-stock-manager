import React from 'react-native';
import { Colors } from '@arivaa-react-native/common/styles';

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    padding: 20,
  },
  back: {
    marginTop: 40,
  },
  backIcon: {
    color: '#fff',
  },
  logoContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  logo: {
    width: 130,
    height: 100,
    alignSelf: 'flex-start',
  },
  pageTitle: {
    color: '#fff',
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  message: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
  },
  form: {
    alignSelf: 'stretch',
    paddingTop: 30,
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
  modal: {
    backgroundColor: Colors.primaryColor,
  },
});

export default styles;
