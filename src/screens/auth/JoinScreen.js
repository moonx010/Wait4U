import React, {useState} from 'react';
import {useCallback} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import PublicText, {fontFamily} from '../../components/texts/PublicText';
import PublicBoldText from '../../components/texts/PublicBoldText';
import {join} from '../../libs/api';
import {setToken, setUser} from '../../libs/auth';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TransparentHeaderGray from '../../components/TransparentHeaderGray';

export default function JoinScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordChk, setPasswordChk] = useState('');
    const [agree, setAgree] = useState(false);
    const [name, setName] = useState('');
    const insets = useSafeAreaInsets();
    const onJoin = useCallback(async () => {
        if (!name || !email || !password) {
        Alert.alert('알림', '이름, 이메일, 비밀번호, 비밀번호 확인를 모두 입력하세요.');
        return;
    }
        if(password !== passwordChk) {
            Alert.alert('알림', '비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        return;
        }
        if(!agree) {
            Alert.alert('알림', '개인정보 제공에 동의해야합니다.');
        return;
        }
        await join(email, name, password, agree);
        navigation.navigate('Login');

  });
    const onPress = useCallback(() => {
        setAgree(!agree);
    });
    const onAgreement = useCallback(() => {
        navigation.navigate('AgreementScreen');
    });
  return (
    <View style={styles.container}>
        <TransparentHeaderGray />
        <PublicBoldText style={[styles.title, {top: insets.top+120}]}>Wait4U</PublicBoldText>
        <View style={styles.loginContainer}>
            <View style={styles.login}>
                <TextInput
                style={styles.textInput}
                onChangeText={(text) => setName(text)}
                placeholder="이름"
                placeholderTextColor="#ABABAB"
                value={name}
                />
            </View>
            <View style={styles.login}>
                <TextInput
                style={styles.textInput}
                onChangeText={(text) => setEmail(text)}
                placeholder="이메일"
                placeholderTextColor="#ABABAB"
                value={email}
                />
            </View>
            <View style={styles.login}> 
                <TextInput
                style={styles.textInput}
                placeholder="비밀번호"
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor="#ABABAB"
                secureTextEntry
                value={password}
                />
            </View>
            <View style={styles.login}> 
                <TextInput
                style={styles.textInput}
                placeholder="비밀번호 확인"
                onChangeText={(text) => setPasswordChk(text)}
                placeholderTextColor="#ABABAB"
                secureTextEntry
                value={passwordChk}
                />
            </View>
            <View style={styles.agree}> 
                <Pressable onPress={onPress}>
                    {agree ? <MaterialIcons name="check-circle" size={24} color="#00DC99"/> : <MaterialIcons name="check-circle-outline" size={24} color="#ABABAB"/>}
                </Pressable>
                <PublicText> 개인정보 제공에 동의합니다.</PublicText>
                <Pressable onPress={onAgreement} style={styles.agreement}>
                    <PublicText style={{color: '#ABABAB'}}>보기</PublicText>
                </Pressable>
            </View>
        </View>
        <Pressable onPress={onJoin} style={styles.joinBtn}>
            <PublicBoldText style={styles.joinBtnText}>회원가입</PublicBoldText>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 40,
    color: '#00DC99',
    position: 'absolute',

  },
  login: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ABABAB',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 10,
    width: 240,
        
  },
  textInput: {
    height: 40,
    backgroundColor: 'rgba(52, 52, 52, 0)',
    alignItems: 'flex-start',
    paddingLeft: 8,
    paddingRight: 8,
    fontFamily,
    width: 240,
  },
  joinBtn: {
    marginTop: 30,
    padding: 12,
    width: 240,
    backgroundColor: '#00DC99',
    alignItems: 'center',
    borderRadius: 10,
  },
  joinBtnText: {
    fontSize: 20,
    color: '#fff',
  },
  agree: {
    flexDirection: 'row',
    borderColor: '#ABABAB',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 10,
    width: 240,
  },
  agreement: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
  }
});