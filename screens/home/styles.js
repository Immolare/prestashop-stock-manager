import { Colors } from '@arivaa-react-native/common/styles';
import React from 'react-native';

var styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    logoContainer: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        width: 150,
        height: 150,
    },
    headerContainer: {
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    headerTitle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    separator: {
        height: 1,
        width: 50,
        backgroundColor: '#ff9599',
        marginTop: 8,
        alignSelf: 'center'
    },
    form: {
        alignSelf: 'stretch',
        paddingTop: 40,
    },
    input: {
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    required: {
        fontWeight: 'bold',
        color: Colors.brandRed,
    },
    field: {
        marginBottom: 10,
    },
    button: {
        backgroundColor: Colors.primaryColor,
        borderColor: Colors.primaryColor,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 14,
        color: '#fff',
    },
    input: {
        backgroundColor: Colors.inputBackgroundColor,
    },
    inputIcon: {
        width: 18,
    },
});

export default styles;