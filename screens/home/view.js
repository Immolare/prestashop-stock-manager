import React from 'react';
import styles from './styles';
import { Text, View, Image } from 'react-native';
import { Link } from '@arivaa-react-native/common';
import girl from '../../assets/girl.jpg';
import left from '../../assets/left.png';
import { Icon } from '@arivaa-react-native/common';

/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    const { user, drawer, navigation } = this.props;
    return (
        <View style={[styles.container]}>
            <View style={[styles.imageContainer]}>
                <Image resizeMode="contain" source={user.logo ? { uri: `data:${user.logo.mimeType};base64,${user.logo.base64}` } : girl} style={[styles.image]} />
                {!navigation.state.isDrawerOpen ? (
                    <Link onPress={this.openDrawer.bind(this)} style={[styles.trigger]}>
                        <Image
                            resizeMode="cover"
                            source={left}
                            style={styles.triggerIcon}
                        />
                    </Link>
                ) : null}
            </View>
            <View style={[styles.new]}>
                <Link style={[styles.link]} link="elements">
                    <View style={[styles.linkView]}>
                        <Text style={[styles.text]}>Try UI Component Demos</Text>
                        <Icon type="foundation" style={[styles.icon]} name="burst-new" />
                    </View>
                </Link>
            </View>
        </View>
    );
};
module.exports = view;
