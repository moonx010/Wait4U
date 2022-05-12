import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
const basecolor = '#00DC99';
import { useNavigation } from '@react-navigation/native';
import PublicText from './texts/PublicText';

const Table = ({ SEAT_NUMBER, state, CUSTOMER_COUNT }) => {
  return (
    <View
      style={{
        backgroundColor: state,
        ...styles.table,
      }}>
        <View style={styles.numBox}>
          <PublicText style={{ color: state, ...styles.num }}>{SEAT_NUMBER}</PublicText>
        </View>
        <PublicText style={styles.people}>{CUSTOMER_COUNT}명</PublicText>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    width: '50%',
    borderWidth: 0.5,
    borderRadius: 5,
    height: '25%',
    margin: 16,
  },
  numBox: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  num: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  people: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    padding: 8,
  },
});
export default Table;
