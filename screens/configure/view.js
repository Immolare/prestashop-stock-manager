import React from 'react';
import styles from './styles';
import { Text, View, Image, ScrollView } from 'react-native';
import { Form, Select } from '@arivaa-react-native/common';
import envelope from '../../assets/envelope.png';
import logo from '../../assets/logo.png';

import { Icon } from '@arivaa-react-native/common';

/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    const { translate, shopList } = this.props;
    const { selectShop } = this.validations;

    const formElements = [
        {
            name: 'id',
            customElement: <Select data={shopList} multiple={false} type="modal" />,
            before: (
                <Text style={[styles.label]}>
                    {translate('login.headerSelectShop')} <Text style={[styles.required]}>*</Text>
                </Text>
            ),
            options: selectShop,
        },
    ];

    return (
        <View style={[styles.container]}>
            <ScrollView>
                <View style={[styles.logoContainer]}>
                    <Image resizeMode="contain" source={logo} style={[styles.logo]} />
                </View>
                <View style={[styles.headerContainer]}>
                    <Text style={[styles.headerTitle]}>{translate('login.oneMoreStep')}</Text>
                </View>
                <View style={[styles.separator]} />
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
                            text: translate('login.labelSelectShop'),
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};
module.exports = view;
