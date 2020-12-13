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
    marginTop: 0,
  },
  fieldLabel: {
    color: Colors.primaryColor,
    marginBottom: 10,
  },
  inputIcon: {
    color: Colors.primaryColor,
  },
  imageBox: {
    marginTop: 38,
    marginBottom: 50,
    width: 150,
    alignSelf: 'center',
  },
  image: {
    borderColor: Colors.brandLightGrey,
    borderWidth: 1,
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 75,
    alignSelf: 'center',
  },
  changeImageLink: {
    padding: 10,
    marginTop: 5,
  },
  text: {
    color: Colors.primaryColor,
    textAlign: 'center',
  },
  back: {
    paddingLeft: 10,
  },
});

export default styles;
