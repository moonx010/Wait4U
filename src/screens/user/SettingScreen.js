import React from 'react';
import {Pressable, View} from 'react-native';
import PublicText from '../../components/texts/PublicText';
import TabHeaderWhite from '../../components/TabHeaderWhite';
import TransparentHeaderGray from '../../components/TransparentHeaderGray';

export default function SettingScreen() {
    return (
        <View>
            <TabHeaderWhite title="환경설정"/>
            <TransparentHeaderGray/>
            <PublicText>설정</PublicText>
        </View>
    );
};