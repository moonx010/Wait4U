import _ from 'lodash';
import moment from 'moment';
import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PublicText from '../../components/texts/PublicText';
import PublicBoldText from '../../components/texts/PublicBoldText';
import TabHeaderMyPage from '../../components/TabHeaderMyPage';
import { getUser, setUser, setToken } from '../../libs/auth';


const Row = ({label, value}) => {
    return (
      <View style={styles.row}>
        <PublicBoldText style={styles.label}>{label}</PublicBoldText>
        <PublicText style={styles.value}>{value}</PublicText>
      </View>
    );
  };
  const DEFAULT_IMAGE = require('../../images/DefaultImage.png');
export default function MyPageScreen({navigation, setAppToken}) {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        async function init() {
          const data = await getUser();
          setProfile(data);
        }
        init();
      }, []);
    
      const onLogout = useCallback(async () => {
        await setToken(null);
        await setUser(null);
        setAppToken(null);
        
      });
    return (
        <View style={styles.container}>
            <TabHeaderMyPage title="내정보"/>
            <View style={styles.itemContainer}>
        <Image
          source={DEFAULT_IMAGE}
          resizeMode="cover"
          style={styles.profileImage}
        />
        <View style={{flex: 1}}>
          <Row label="이름" value={_.get(profile,'CUSTOMER_NAME', '')} />
          <Row label="이메일" value={_.get(profile,'CUSTOMER_EMAIL', '')} />
        </View>
      </View>
      <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
        <PublicBoldText style={styles.logoutBtnText}>로그아웃</PublicBoldText>
      </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
      },
      profileImage: {
        height: 160,
        width: 160,
        marginRight: 30,
        marginLeft: 20,
        borderRadius: 10,
      },
      row: {
        marginTop: 20,
      },
      label: {
        fontSize: 20,
        marginBottom: 20,
      },
      value: {
        fontSize: 20,
      },
      logoutBtn: {
        marginTop: 30,
        padding: 20,
        marginLeft: 20,
        marginRight: 30,
        backgroundColor: '#DB0000',
        alignItems: 'center',
        borderRadius: 10,
      },
      logoutBtnText: {
        fontSize: 18,
        color: '#fff',
      },
})