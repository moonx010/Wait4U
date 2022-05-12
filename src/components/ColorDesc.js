import React from 'react';
import { View, StyleSheet } from 'react-native';

import PublicBoldText from './texts/PublicBoldText';

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


export default function ColrDesc() {
    return (
        <View style={styles.container}>
            <ColorView size={2} color={'#0FDB00'} />
            <PublicBoldText style={styles.text}>대기없음</PublicBoldText>
            <ColorView size={2} color={'#EBE300'} />
            <PublicBoldText style={styles.text}>0분-15분</PublicBoldText>
            <ColorView size={2} color={'#CF0000'} />
            <PublicBoldText style={styles.text}>15분-30분</PublicBoldText>
            <ColorView size={2} color={'#1A0000'} />
            <PublicBoldText style={styles.text}>30분이상</PublicBoldText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 8,
        // borderWidth: 1,
        // borderColor: '#ABABAB',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        marginLeft: 12,
        marginRight: 12,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 5,
                    height: 5,
                },
                shadowOpacity: 0.1,
                shadowRadius: 2
            },
            android: {
                elevation: 10,
            }
        }),
    },

    text: {
        fontSize: 12,
    }
})