import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import PublicBoldText from './texts/PublicBoldText';

export default function TabHeaderHome({title}) {
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
        backgroundColor: '#00DC99',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        marginLeft: 16,
        fontSize: 28,
        color: '#fff',
    }
});
