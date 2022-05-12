import React, {useState, useCallback} from 'react';

import { View, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PublicText, {fontFamily} from '../../components/texts/PublicText';
import PublicBoldText from '../../components/texts/PublicBoldText';
import TabHeaderStore from '../../components/TabHeaderStore';
import { addReview } from '../../libs/api';
import { getUser } from '../../libs/auth';
import Star from '../../components/Star';

const Row = ({children, title}) => {
    return (
        <View style={styles.row}>
            <View style={styles.article}>
                <PublicText style={styles.title}>{title}</PublicText>
                {children}
            </View>
            
        </View>
    );
};

export default function ReviewScreen({navigation}) {
    const [score, setScore] = useState('');
    const [review, setReview] = useState('');
    const route = useRoute();

    const onReviewing = useCallback(async () => {
        const user = await getUser();
        customerNum = user.CUSTOMER_NUMBER;
        if (!user) {
          navigation.navigate('LoginScreen');
          return;
        }
    
        if (!score || !review) {
          Alert.alert('알림', '리뷰내용를 정확히 입력해주세요.');
          return;
        }
        if(score > 5 || score < 0) {
            Alert.alert('알림', '별점이 잘못 기입되었습니다.');
            return;
        }
        Alert.alert('알림', '리뷰작성을 완료하시겠습니까?', [
          {
            text: '확인',
            onPress: async () => {
              await addReview(
                score,
                _.get(route, 'params.storeNum', ''),
                review,
                customerNum,
              );
    
              Alert.alert('알림', '리뷰작성이 완료되었습니다.', [
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
      }, [route, score, review, navigation]);
    
    return (
        <View style={styles.containter}>
            <TabHeaderStore title={"줄서기"} />
            <View style={styles.itemContainter}>
                <View style={styles.row}>
                    <View style={styles.article}>
                        
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 12,}}>
                            <PublicText style={styles.title}>별점</PublicText>
                            <Star score={score} />
                        </View>
                        <TextInput
                            style={styles.scoreInput}
                            onChangeText={(text) => setScore(text)}
                            placeholder="별점"
                            placeholderTextColor="#ABABAB"
                            keyboardType="number-pad"
                            maxLength={1}
                            />
                    </View>
                </View>
                
                <Row title={"리뷰 내용"}>
                    <TextInput
                    style={[styles.textInput, {marginTop: 12}]}
                    onChangeText={(text) => setReview(text)}
                    placeholder="리뷰"
                    placeholderTextColor="#ABABAB"
                    multiline={true}
                    maxLength={400}
                    />
                </Row>
            </View>
            <View style={styles.review}>
                <Pressable style={styles.reviewBtn} onPress={onReviewing}>
                    <PublicBoldText style={styles.reviewfont}>작성완료</PublicBoldText>
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
        alignItems: 'flex-start',
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
        marginRight: 8,
    },
    textInput: {
        height: 120,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingLeft: 8,
        paddingRight: 8,
        fontFamily,
        width: 300,
        borderWidth: 1,
        borderColor: '#ABABAB',
        textAlignVertical:'top'
      },
      scoreInput: {
        height: 40,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingLeft: 8,
        paddingRight: 8,
        fontFamily,
        width: 48,
        borderWidth: 1,
        borderColor: '#ABABAB',
      },
    review:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    reviewBtn: {
        height: 48,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00DC99',
        borderRadius: 8,
        marginTop: 20
    },
    reviewfont: {
        fontSize: 24,
        color: '#fff',
    }
});