import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import PublicText from './texts/PublicText';

export default function TabHeaderWhite({title}) {
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: '900',
        fontSize: 24,
        color: '#ABABAB',
    }
});
