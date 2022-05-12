import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pressable, StyleSheet, View} from 'react-native';
import PublicText from './texts/PublicText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function TransparentHeaderGray() {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, {top: insets.top-8}]}>
            <Pressable style={styles.closeButton} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-outline" size={32} color="#ABABAB" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1,
        left: 0,
        alignItems: 'flex-start',
    },
    closeButton: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})