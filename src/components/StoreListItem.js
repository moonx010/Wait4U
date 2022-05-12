//import numeral from 'numeral';
import { useNavigation } from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import { Image, StyleSheet, View, Pressable } from 'react-native';
import PublicText from './texts/PublicText';
import Star from './Star';
import { fetchSeat } from '../libs/api';

    //"id": 10000,
    //"color": "red",
    //"imageUrl": "http://placeimg.com/640/480",
    //"productName": "Practical Rubber Hat",
    //"price": 732000,
    //"productMaterial": "Rubber",
    //"product": "Ball",
    //"productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    //"createdAt": "2021-03-11T12:07:22.482Z",
    //"updatedAt":
const aspectRatio = 640 / 480;
const DEFAULT_IMAGE = require('../images/DefaultImage.png');

const ColorView = ({size, color}) => {
    const width = size * 10;
    const height = size * 10;
    const borderRadius = size * 10;
    return (
        <View
          style={{
            width,
            height,
            borderRadius,
            backgroundColor: color,
            marginRight: 5,
            marginLeft: 5
          }}
        />
      );
    };


const StoreListItem = (item) => {
    const navigation = useNavigation();
    const onPress = useCallback(() => {
        navigation.navigate('StoreDetailScreen', {
            item,
        });
    }, [navigation, item]);

    const [list, setList] = useState([]);
    useEffect(()=>{
        const initList = async()=>{
            const initialList = await fetchSeat(item.STORE_NUMBER);
            setList(initialList);
        };
        initList();
        // let i;
        // for(i=0; i<6; i++)
        // {
        //     if(list[i].SEAT_USING === false)
        // }
    },[setList]);
    console.log('가게 자리 정보', list);

    //storenum? store name? 갖고 store table 정보


    return (
        <Pressable onPress={onPress} style={styles.itemContainer}>
            <Image 
                source={DEFAULT_IMAGE}
                resizeMode="cover"
                style={styles.productImage}/>
            <View style={{ flex: 1, alignSelf: 'flex-start', marginTop: 4 }}>
                <PublicText style={styles.productName}>{item.STORE_NAME}</PublicText>
                <View style={{flexDirection: 'row', alignItems: 'center', }}>
                    <Star score={Math.round(item.STORE_SCORE*10)/10}/>
                    <PublicText style={styles.productDesc} >{(Math.round(item.STORE_SCORE*10)/10).toFixed(1)}</PublicText>
                </View>
                <PublicText style={styles.productDesc}>{item.STORE_ADDRESS}</PublicText>
                
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
    },
    productImage: {
        height: 120,
        width: 160,
        aspectRatio,
        borderRadius: 10,
        marginRight: 10
    },
    productName: {
        fontSize: 22,
        marginBottom: 4,
    },
    productDesc: {
        fontWeight: '100',
        fontSize: 16,
        marginTop: 4
    },
    productPrice: {
        fontSize: 20,
        textAlign: 'right',
        marginTop: 10,
    }
})

export default StoreListItem;
