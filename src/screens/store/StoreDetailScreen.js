import React, {useCallback} from 'react';
import {
    View,
    Pressable,
    Image,
    StyleSheet,
    ScrollView,
    Platform,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import _ from 'lodash';

import PublicText from '../../components/texts/PublicText';
import PublicBoldText from '../../components/texts/PublicBoldText';

import TabHeaderStore from '../../components/TabHeaderStore';
import StoreTabBar from '../../components/StoreTabBar';
import MenuList from '../../components/MenuList';
import ReviewList from '../../components/ReviewList';
import Star from '../../components/Star';

const aspectRatio = 640 / 480;
const DEFAULT_IMAGE = require('../../images/DefaultImage.png');
const Row = ({children, title}) => {
    return (
        <View style={styles.row}>
            <View style={styles.article}>
                <PublicBoldText style={styles.title}>{title}</PublicBoldText>
            </View>
            {children}
        </View>
    );
};

export default function StoreDetailScreen({navigation}) {
    const insets = useSafeAreaInsets();
    const route = useRoute();
    const score = ((Math.round(_.get(route, 'params.item.STORE_SCORE', '')*10)/10)).toFixed(1);
    const storeNum = _.get(route, 'params.item.STORE_NUMBER');
    const onPress = useCallback(() => {
        navigation.navigate('WaitingScreen', {storeNum});
    }, [navigation, storeNum]);
    const onReview = useCallback(() => {
        navigation.navigate('ReviewScreen', {storeNum});
    }, [navigation, storeNum]);
    return (
        <>
            <TabHeaderStore title={_.get(route, 'params.item.STORE_NAME', '')}/>
            <ScrollView style={[styles.constainer, {
                paddingBottom: insets.bottom,
            }]}>

                <View style={styles.image}>
                    <Image
                        source={DEFAULT_IMAGE}
                        resizeMode="cover"
                        style={styles.mainImage}
                    />
                </View>
                        
                <View style={styles.contentContainer}>

                    <View style={styles.storeInfo}>
                        <PublicText style={{fontSize: 24, marginBottom: 8}}>
                            {_.get(route, 'params.item.STORE_NAME', '')}
                        </PublicText>
                        <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center', marginBottom: 4}}>
                            <Star score={score} />
                            <PublicText style={{fontSize: 16}}>{score}</PublicText>
                        </View>
                        
                        <PublicText style={{fontSize: 16, color: 'gray', marginBottom: 8}}>
                            {_.get(route, 'params.item.STORE_ADDRESS', '')}
                        </PublicText>
                    </View>
                    <StoreTabBar store={_.get(route, 'params.item')}/>
                    
                    <Row title="영업정보">
                        <View style={{flexDirection: 'row'}}>
                            <View style={{paddingRight: 10}}>
                                <PublicText style={styles.info}>가게 전화 번호</PublicText>
                                <PublicText style={styles.info}>휴무일</PublicText>
                                <PublicText style={styles.info}>영업시간</PublicText>
                                <PublicText style={styles.info}>브레이크 타임</PublicText>
                            </View>
                            <View>
                                <PublicText style={styles.info}>{_.get(route, 'params.item.STORE_PHONE_NUMBER')}</PublicText>
                                <PublicText style={styles.info}>{_.get(route, 'params.item.REST_DAY')}</PublicText>
                                <PublicText style={styles.info}>{_.get(route, 'params.item.SERVICE_TIME')}</PublicText>
                                <PublicText style={styles.info}>{_.get(route, 'params.item.BREAK_TIME')}</PublicText>
                            </View>
                        </View>
                    </Row>
                    <Row title="메뉴">
                        <MenuList storeNum={storeNum}/>
                    </Row>
                    <View style={styles.row}>
                        <View style={[styles.article, {flexDirection: 'row', alignItems: 'center'}]}>
                            <PublicBoldText style={styles.title}>리뷰</PublicBoldText>
                            <Pressable style={styles.reviewBtn} onPress={onReview}>
                                <PublicText style={{fontSize: 16}}>리뷰 작성</PublicText>
                            </Pressable>
                        </View>
                        <ReviewList storeNum={storeNum}/>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.waiting}>
                <Pressable style={[styles.waitingBtn, {bottom: insets.bottom}]} onPress={onPress}>
                    <PublicBoldText style={styles.waitingfont}>줄서기</PublicBoldText>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    mainImage: {
        height: 200,
        aspectRatio,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    article: {
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
        marginBottom: 10
    },
    row: {
        marginBottom: 20,
    },
    contentContainer: {
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#fff',
        borderRadius: 16,
        ...Platform.select({
            ios: {
              shadowColor: "rgb(50, 50, 50)",
              shadowOpacity: 0.5,
              shadowRadius: 1,
              shadowOffset: {
                height: 0,
                width: 0,
              },
            },
            android: {
              elevation: 3,
            },
          })
    },
    storeInfo: {
        alignItems: 'center',
        marginTop: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
    },
    info: {
        paddingBottom: 4,
        fontSize: 14,
    },
    waiting:{
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
              shadowColor: "rgb(50, 50, 50)",
              shadowOpacity: 0.5,
              shadowRadius: 1,
              shadowOffset: {
                height: 0,
                width: 0,
              },
            },
            android: {
              elevation: 15,
            },
          })
    },
    waitingBtn: {
        height: 48,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00DC99',
        borderRadius: 8,
        marginTop: 20
    },
    reviewBtn: {
        height: 48,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginLeft: 220
    },
    waitingfont: {
        fontSize: 24,
        color: '#fff',
    }

});