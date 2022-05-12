/* eslint-disable prettier/prettier */
import React, { useCallback } from 'react';
import { View, Pressable, StyleSheet, Text, Platform } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PublicText from './texts/PublicText';
const Icons = {
    Home: [
        <FontAwesome name="home" size={24} color="#000000" />,
        <FontAwesome name="home" size={24} color="#ABABAB" />
    ],
    Search: [
        <FontAwesome name="search" size={24} color="#000000" />,
        <FontAwesome name="search" size={24} color="#ABABAB" />
    ],
    // Map: [
    //     <FontAwesome name="map" size={24} color="#000000" />,
    //     <FontAwesome name="map" size={24} color="#ABABAB" />
    // ],
    // MyLike: [
    //     <FontAwesome name="heart" size={24} color="#000000" />,
    //     <FontAwesome name="heart" size={24} color="#ABABAB" />
    // ],
    MyPage: [
        <FontAwesome name="user" size={24} color="#000000" />,
        <FontAwesome name="user" size={24} color="#ABABAB" />
    ],
};

export default function BottomTabBar({ state, descriptors, navigation }) {
    const insets = useSafeAreaInsets();

    const { bottom }= insets;

    const routeName = state.routes[state.index].name;
    const onPress = useCallback((name) => () => {
        navigation.navigate(name);
    }, [navigation]);
    return (
        <View style={[
            styles.container,
            {paddingBottom: bottom}
            ]}>
            <Pressable onPress={onPress('Home')} style={styles.tab}>
                {routeName === 'Home' ? Icons.Home[0] : Icons.Home[1]}
                <PublicText style={[styles.tabText, routeName === 'Home' && styles.tabTextSelected]}>홈</PublicText>
            </Pressable>
            <Pressable onPress={onPress('Search')} style={styles.tab}>
                {routeName === 'Search' ? Icons.Search[0] : Icons.Search[1]}
                <PublicText style={[styles.tabText, routeName === 'Search' && styles.tabTextSelected]}>검색</PublicText>
            </Pressable>
            {/* <Pressable onPress={onPress('Map')} style={styles.tab}>
                {routeName === 'Map' ? Icons.Map[0] : Icons.Map[1]}
                <PublicText style={[styles.tabText, routeName === 'Map' && styles.tabTextSelected]}>지도</PublicText>
            </Pressable> */}
            {/* <Pressable onPress={onPress('MyLike')} style={styles.tab}>
                {routeName === 'MyLike' ? Icons.MyLike[0] : Icons.MyLike[1]}
                <PublicText style={[styles.tabText, routeName === 'MyLike' && styles.tabTextSelected]}>찜</PublicText>
            </Pressable> */}
            <Pressable onPress={onPress('MyPage')} style={styles.tab}>
                {routeName === 'MyPage' ? Icons.MyPage[0] : Icons.MyPage[1]}
                <PublicText style={[styles.tabText, routeName === 'MyPage' && styles.tabTextSelected]}>마이</PublicText>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 10
            },
            android: {
                elevation: 15,
            }
        }),
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
    },
    tabText: {
        fontSize: 16,
        color: '#ABABAB',
        paddingTop: 10,
    },
    tabTextSelected: {
        color: '#000000', 
    },
});