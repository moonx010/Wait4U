import React, {useCallback} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PublicBoldText from '../../components/texts/PublicBoldText';



export default function Name({name}) {
    const navigation = useNavigation();

    const onPress = useCallback(() => {
        navigation.navigate('MyPage');
    }, [navigation]);
    return(
        
        <Pressable onPress={onPress} style={styles.container}>
            <PublicBoldText style={styles.text}>{name}</PublicBoldText>
        </Pressable>
    )
} 

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 5,
    },
    text: {
        fontSize: 24,
    }
})
