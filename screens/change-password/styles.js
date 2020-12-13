import React from 'react-native';
import { Colors } from '@arivaa-react-native/common/styles';

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  scrollBox: {
    flex: 1,
  },
  content: {
    paddingBottom: 100,
  },
  button: {
    marginBottom: 10,
    backgroundColor: Colors.primaryColor,
    borderColor: Colors.primaryColor,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  form: {
    backgroundColor: '#fff',
    margin: 10,
  },
  fieldLabel: {
    color: Colors.brandRed,
    marginBottom: 10,
  },
  inputIcon: {
    color: Colors.primaryColor,
  },
  text: {
    color: Colors.brandRed,
  },
  back: {
    paddingLeft: 10,
  },
  label: {
    color: Colors.brandRed,
    fontSize: 20,
    marginBottom: 40,
    textAlign: 'center',
  },
});

export default styles;
