import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Image, Pressable, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PublicText from '../../components/texts/PublicText';
import PublicBoldText from '../../components/texts/PublicBoldText';
import TabHeaderHome from '../../components/TabHeaderHome';
import Name from './Name';
import Category from '../../components/Category';
import { me } from '../../libs/api';
import { getToken, setUser, getUser } from '../../libs/auth';
import StoreList from '../../components/StoreList';
import _ from 'lodash';

export default function HomeScreen({navigation}) {
    const insets = useSafeAreaInsets();
    const [list, setList] = useState({});
    const [profile, setProfile] = useState({});
    useEffect(() => {
        async function init() {
            const token = await getToken();
            const user = await me(token);
            setList(user);
            setUser(user[0]);
            const data = await getUser();
            setProfile(data);
        }
        init();
    }, [])
    const userName = _.get(profile,'CUSTOMER_NAME');
    return (
        <>
            <TabHeaderHome title="Wait4U" />
            <ScrollView style={styles.container}>
                <View style={styles.hello}>
                    <PublicText style={styles.helloText}>안녕하세요</ PublicText>
                    <Name name={userName} />
                    <PublicText style={styles.helloText}>님</PublicText>
                </View>
                <PublicBoldText style={styles.subHeading}>카테고리</PublicBoldText>
                <View style={styles.category}>
                    <Category category={"식사"} style={styles.categoryImage}/>
                    <Category category={"오락"} style={styles.categoryImage}/>
                </View>
                <PublicBoldText style={styles.subHeading}>가게 목록</PublicBoldText>
                <StoreList />
            </ ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    hello: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 16,
    },
    helloText: {
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subHeading: {
        fontSize: 24,
        fontWeight: '900',
        padding: 0,
        marginLeft: 16,
    },
    category: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryImage: {
        padding: 10,
    },
})