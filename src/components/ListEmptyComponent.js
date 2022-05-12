import React from 'react';
import { StyleSheet, View } from 'react-native';
import PublicText from './texts/PublicText';

export default function ListEmptyComponent({title}) {
    return (
        <View style={styles.container}>
            <PublicText style={styles.text}>{title || '등록된 가게가 없습니다.'}</PublicText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        fontSize: 20,
    },
});