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
import {login, me} from '../../libs/api';
import {setToken, setUser} from '../../libs/auth';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function LoginScreen({navigation, setAppToken}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    setToken(null);
    const insets = useSafeAreaInsets();
    const onLogin = useCallback(async () => {
        if (!email || !password) {
        Alert.alert('알림', '이메일과 패스워드를 입력하세요.');
        return;
    }

    const {Token, Success} = await login(email, password);
    if (Success === 'False') {
      Alert.alert('알림', '이메일과 패스워드가 일치하지 않습니다.');
      setPassword('');
      return;
    }
    setEmail('');
    setPassword('');
    await setToken(Token);
    setAppToken(Token);
    const myInfo = await me();
    await setUser(myInfo);
    navigation.navigate('MainTab');
    
  });
    const onJoin = useCallback(() => {
        navigation.navigate('JoinScreen');
    }, [navigation]);
  return (
    <View style={styles.container}>
        <PublicBoldText style={[styles.title, {top: insets.top+120}]}>Wait4U</PublicBoldText>
        <View style={styles.loginContainer}>
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
                placeholder="패스워드"
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor="#ABABAB"
                secureTextEntry
                value={password}
                />
            </View>
            
        </View>
        <Pressable onPress={onLogin} style={styles.loginBtn}>
            <PublicBoldText style={styles.loginBtnText}>로그인</PublicBoldText>
        </Pressable>
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
  loginBtn: {
    marginTop: 30,
    padding: 12,
    width: 240,
    backgroundColor: '#00DC99',
    alignItems: 'center',
    borderRadius: 10,
  },
  loginBtnText: {
    fontSize: 20,
    color: '#fff',
  },
  joinBtn: {
    marginTop: 30,
    padding: 12,
    width: 240,
    alignItems: 'center',
    borderRadius: 10,
  },
  joinBtnText: {
    fontSize: 20,
    color: '#ABABAB',
  },
  
});