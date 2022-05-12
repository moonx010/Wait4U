import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, View, Platform} from 'react-native';
import PublicBoldText from './texts/PublicBoldText';
import TransparentHeaderGray from './TransparentHeaderGray';

export default function TabHeaderStore({title}) {
    const insets = useSafeAreaInsets();
    const {top} = insets;
    return (
        <View style={[styles.container, {
            paddingBottom: 20,
            paddingTop: 20 + top,
        }]}>
            <TransparentHeaderGray />
            <PublicBoldText style={styles.title}>{title}</PublicBoldText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
              shadowColor: "#000000",
              shadowOpacity: 0.5,
              shadowRadius: 5,
              shadowOffset: {
                height: -1,
                width: 0,
              },
            },
            android: {
              elevation: 3,
            },
          }),
        zIndex: 1,
    },
    title: {
        fontSize: 20,
        color: '#000000',
    }
});
