/* eslint-disable prettier/prettier */
import React, { useCallback, useState } from 'react';
import { View, Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PublicText from './texts/PublicText';
import {useNavigation} from '@react-navigation/native';
import { getUser, addZzim} from '../libs/auth';

const Icons = {
    Location: <Ionicons name="location-sharp" size={30} color="#000000" />,
    Seat: <MaterialIcons name="airline-seat-recline-normal" size={30} color="#000000" />,
    Like: [
        <Ionicons name="heart-outline" size={30} color="#000000" />,
        <Ionicons name="heart-sharp" size={30} color="#FBAFC1" />],
};

export default function StoreTabBar({store}) {
    const navigation = useNavigation();
    const [Like, setLike] = useState(false/*store.Zzim*/);
    const onPress = useCallback((name) => () => {
        navigation.navigate(name, {
            store,
        });
    }, [navigation, store]);
    const onPressLike = useCallback(() => {
        async function init(){
            const user = await getUser();
            const data = await addZzim(_.get(user, 'CUSTOMER_NUMBER', ''));
        }
        init();
        setLike(!Like)//db의 찜을 바꾸는 코드로 수정해야함
    });
    return (
        <View style={[
            styles.container,
            ]}>
            <Pressable onPress={onPress('TableScreen')} style={styles.tab}>
                {Icons.Seat}
                <PublicText style={styles.tabText}>자리</PublicText>
            </Pressable>
            <Pressable onPress={onPressLike} style={styles.tab}>
                {Like ? Icons.Like[1] : Icons.Like[0]}
                <PublicText style={styles.tabText}>찜</PublicText>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
        marginBottom: 12,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    tabText: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '600',
    },
});