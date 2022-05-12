import React, {useCallback} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function TransparentHeader() {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const onPress = useCallback(() => {
        navigation.navigate('SettingScreen');
    }, [navigation]);
    return (
            <View style={[styles.container, {top: insets.top+ 10}]}>
                <Pressable style={styles.setting} onPress={onPress}>
                    <Ionicons name="settings-sharp" size={28} color="#fff" />
                </Pressable>
            </View>
            
    )
}

const styles = StyleSheet.create({
    setting: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        position: 'absolute',
        zIndex: 1,
        right: 16,
    }
})