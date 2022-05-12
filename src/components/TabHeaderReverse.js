import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import PublicBoldText from './texts/PublicBoldText';

export default function TabHeaderReverse({title}) {
    const insets = useSafeAreaInsets();
    const {top} = insets;
    return (
        <View style={[styles.container, {
            paddingBottom: 20,
            paddingTop: 20 + top,
        }]}>
            <PublicBoldText style={styles.title}>{title}</PublicBoldText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingLeft: 16,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '900',
        fontSize: 28,
        color: '#00DC99',
    }
});
