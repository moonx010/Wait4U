import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PublicBoldText from '../../components/texts/PublicBoldText';
import PublicText from '../../components/texts/PublicText';
import TabHeaderReverse from '../../components/TabHeaderReverse';
import {fetchZzim} from '../../libs/api';
import { getUser, getStore } from '../../libs/auth';
import StoreListItem from '../../components/StoreListItem';
export default function MyLikeScreen() {
    const [list, setList] = useState({});
    const [like, setLike] = useState([]);
    useEffect(() => {
        async function init() {
          const user = await getUser();
          const data = fetchZzim(_.get(user, 'CUSTOMER_NUMBER', ''))
          setLike(data);
        }
        init();
      }, []);
      console.log(like);

    return (
        <View style={styles.container}>
            <TabHeaderReverse title="Wait4U"/>
            <PublicText style={styles.subHeading}>나의 찜목록</PublicText>
            
        </ View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    subHeading: {
        fontSize: 24,
        fontWeight: '100',
        padding: 0,
        marginLeft: 16,
    },
    categoryName: {
        fontSize: 30,
    }
})