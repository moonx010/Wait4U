import numeral from 'numeral';
import React  from 'react';
import { Image, StyleSheet, View} from 'react-native';
import PublicText from './texts/PublicText';

const DEFAULT_IMAGE = require('../images/DefaultImage.png')
const MenuListItem = ({item}) => {

    return (
        <View style={styles.itemContainer}>
            <Image 
                source={DEFAULT_IMAGE}
                //source={{uri: item.imageUrl}}
                resizeMode="cover"
                style={styles.menuImage}/>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <PublicText style={styles.menuName}>{item.MENU_NAME}</PublicText>
                <PublicText style={styles.menuPrice} >{numeral(item.COST).format('0,0')}원</PublicText>
            </View>
        </View>
    ); 
};

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    menuImage: {
        height: 120,
        width: 160,
        borderRadius: 10,
    },
    menuName: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 4,
    },
    menuPrice: {
        fontSize: 16,
    }
})


export default MenuListItem;