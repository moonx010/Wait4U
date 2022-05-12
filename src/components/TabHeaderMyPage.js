import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pressable, StyleSheet, View} from 'react-native';
import PublicText from './texts/PublicText';
import SettingButton from './SettingButton';

export default function TabHeaderMyPage({title}) {
    const insets = useSafeAreaInsets();
    const {top} = insets;
    return (
        <View style={[styles.container, {
            paddingBottom: 20,
            paddingTop: 20 + top,
        }]}>
            <PublicText style={styles.title}>{title}</PublicText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00DC99',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    title: {
        fontWeight: '900',
        fontSize: 20,
        marginLeft: 16,
        color: '#fff',
    },
});
