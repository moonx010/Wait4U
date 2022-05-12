import React, {useState, useCallback} from 'react';

import { View, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PublicText, {fontFamily} from '../../components/texts/PublicText';
import PublicBoldText from '../../components/texts/PublicBoldText';
import TabHeaderStore from '../../components/TabHeaderStore';
import { waiting } from '../../libs/api';
import { getUser } from '../../libs/auth';

const Row = ({children, title}) => {
    return (
        <View style={styles.row}>
            <View style={styles.article}>
                <PublicText style={styles.title}>{title}</PublicText>
            </View>
            {children}
        </View>
    );
};

export default function WaitingScreen({navigation}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [number, setNumber] = useState('');
    const route = useRoute();
    // async function init() {
    //     const data = await getUser();
    //     setProfile(data);
    // }
    // init();
    // 
    // const onPress = useCallback(() => {
    //     async () => {
    //         await waiting(name, phone, number, customerNum, 2);
    //     }
    //     navigation.goBack();
    // });
    const onWaiting = useCallback(async () => {
        const user = await getUser();
        customerNum = user.CUSTOMER_NUMBER;
        if (!user) {
          navigation.navigate('LoginScreen');
          return;
        }
    
        if (!name || !phone || !number) {
          Alert.alert('알림', '정보를 정확히 입력해주세요.');
          return;
        }
    
        Alert.alert('알림', '줄서기를 하시겠습니까?', [
          {
            text: '확인',
            onPress: async () => {
              await waiting(
                name,
                phone,
                number,
                customerNum,
                _.get(route, 'params.storeNum', ''),
              );
    
              Alert.alert('알림', '줄서기가 완료되었습니다.', [
                {
                  text: '확인',
                  onPress: () => {
                    navigation.goBack();
                    navigation.navigate("Home");
                  },
                },
              ]);
            },
          },
          {
            text: '취소',
          },
        ]);
      }, [route, name, phone, number, navigation]);
    
    return (
        <View style={styles.containter}>
            <TabHeaderStore title={"줄서기"} />
            <View style={styles.itemContainter}>
                <Row title={"이름"}>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setName(text)}
                    placeholder="ex) 홍길동"
                    placeholderTextColor="#ABABAB"
                    />
                </Row>
                <Row title={"인원수"}>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setNumber(text)}
                    placeholder="ex) 3"
                    placeholderTextColor="#ABABAB"
                    keyboardType="number-pad"
                    />
                </Row>
                <Row title={"전화번호"}>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setPhone(text)}
                    placeholder="ex) 010-1234-5678"
                    placeholderTextColor="#ABABAB"
                    keyboardType="number-pad"
                    />
                </Row>
            </View>
            <View style={styles.waiting}>
                <Pressable style={styles.waitingBtn} onPress={onWaiting}>
                    <PublicBoldText style={styles.waitingfont}>줄서기</PublicBoldText>
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    containter: {
        backgroundColor: '#fff',
        flex: 1,
    },
    itemContainter: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#00DC99',
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'flex-end',
        padding: 10,
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12,
    },
    article: {
        marginRight: 8
    },
    title: {
        fontSize: 20,
    },
    textInput: {
        height: 40,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingLeft: 8,
        paddingRight: 8,
        fontFamily,
        width: 240,
        borderWidth: 1,
        borderColor: '#ABABAB',
      },
    waiting:{
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
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
    waitingfont: {
        fontSize: 24,
        color: '#fff',
    }
});