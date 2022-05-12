import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import _ from 'lodash';

import PublicBoldText from '../../components/texts/PublicBoldText';
import TransparentHeader from '../../components/TransparentHeader';
import TabHeaderReverse from '../../components/TabHeaderReverse';
import StoreList from '../../components/StoreList';
import ColorDesc from '../../components/ColorDesc';

export default function CategoryDetailScreen({navigation, category}) {
    const insets = useSafeAreaInsets();
    const route = useRoute();
    const categoryName = () => {
       return(
        _.get(route, 'params.category', ) === "식사" ? "food" : "play"
       );
    };
    const CategorySubject = {
        Food: [
                <ImageBackground source={require('../../images/CategoryFoodImage.jpg')} style={styles.imageContainer} blurRadius={8} resizeMode={"cover"}>
                    <TransparentHeader />
                    <PublicBoldText style={styles.categoryName}>{_.get(route, 'params.category', '')}</PublicBoldText>
                </ImageBackground>
        ],
        Play: [
            <ImageBackground source={require('../../images/CategoryPlayImage.jpg')} style={styles.imageContainer} blurRadius={2} resizeMode={"cover"}>
                <TransparentHeader />
                <PublicBoldText style={styles.categoryName}>{_.get(route, 'params.category', '')}</PublicBoldText>
            </ImageBackground>
        ]
    };
    return (
        <View style={styles.constainer}>
            <TabHeaderReverse title= "Wait4U"/>
            {_.get(route, 'params.category') === "식사" ? CategorySubject.Food[0] : CategorySubject.Play[0]}
            <ScrollView>
                <StoreList category={categoryName()}/>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mainImage: {
        alignSelf: 'stretch',
    },
    productName: {
        position: 'absolute',
        bottom: 50,
        right: 20,
        fontSize: 20,
        color: '#fff',
    },
    productPrice: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        fontSize: 20,
        color: '#fff',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    row: {
        marginTop: 20,
    },
    contentContainer: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 20,
    },
    imageContainer: {
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryName: {
        fontSize: 24,
        color: '#fff'
    },
});