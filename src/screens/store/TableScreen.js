import { StyleSheet, FlatList, SafeAreaView, Text, View } from 'react-native';
import TabHeaderStore from '../../components/TabHeaderStore';
import Table from '../../components/Table';
import ColorDesc from '../../components/ColorDesc';
import PublicText from '../../components/texts/PublicText';
const basecolor = '#00DC99';
import React, { useEffect, useState, useCallback } from 'react';
import {useRoute} from '@react-navigation/native';
import { fetchSeat } from '../../libs/api';
import moment from 'moment';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import _ from 'lodash';
//가데이터, 로딩 데이터
const loadingDATA = [
  {
    state: '#0FDB00',
    SEAT_NUMBER: 0,
    CUSTOMER_COUNT: 0,
  },
  {
    state: '#0FDB00',
    SEAT_NUMBER: 0,
    CUSTOMER_COUNT: 0,
  },
  {
    state: '#0FDB00',
    SEAT_NUMBER: 0,
    CUSTOMER_COUNT: 0,
  },
  {
    state: '#0FDB00',
    SEAT_NUMBER: 0,
    CUSTOMER_COUNT: 0,
  },
  {
    state: '#0FDB00',
    SEAT_NUMBER: 0,
    CUSTOMER_COUNT: 0,
  },
  {
    state: '#0FDB00',
    SEAT_NUMBER: 0,
    CUSTOMER_COUNT: 0,
  },
];

const TableScreen = ({navigation}) => {
  const route = useRoute();
  const insets = useSafeAreaInsets();
  const [list, setList] = useState(loadingDATA);
  useEffect(() => {
    const initList = async () => {
      const initialList = await fetchSeat(_.get(route, 'params.store.STORE_NUMBER', ''));
      setList(initialList);
    };
    initList();
  }, [setList]);
  const timeGap = (time) => {
    let now = moment();
    return Math.round(moment.duration(now.diff(time)).asMinutes());
  };
  const stateToColor = (using, recentTime = moment().format()) => {
    if (!using) return '#0FDB00';
    if (using) {
      if (timeGap(recentTime) < 10) return '#1A0000';
      if (timeGap(recentTime) < 25) return '#CF0000';
      return '#EBE300';
    }
  };


  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TabHeaderStore title={"자리화면"} />
      <View style={styles.head}>
        <PublicText style={{ fontSize: 20, fontWeight: 'bold' }}>
          매장내 자리현황
        </PublicText>
      </View>
      <View style={styles.store}>
        <View style={styles.counter}>
          <PublicText style={styles.counterText}> 카운터 </PublicText>
        </View>
        <View style={{ flexDirection: 'row', flex: 0.9 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Table
              SEAT_NUMBER={list[0].SEAT_NUMBER}
              state={stateToColor(list[0].SEAT_USING, list[0].UPDATED_TIME)}
              CUSTOMER_COUNT={list[0].CUSTOMER_COUNT}
            />
            <Table
              SEAT_NUMBER={list[1].SEAT_NUMBER}
              state={stateToColor(list[1].SEAT_USING, list[1].UPDATED_TIME)}
              CUSTOMER_COUNT={list[1].CUSTOMER_COUNT}
            />
            <Table
              SEAT_NUMBER={list[2].SEAT_NUMBER}
              state={stateToColor(list[2].SEAT_USING, list[2].UPDATED_TIME)}
              CUSTOMER_COUNT={list[2].CUSTOMER_COUNT}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Table
              SEAT_NUMBER={list[3].SEAT_NUMBER}
              state={stateToColor(list[3].SEAT_USING, list[3].UPDATED_TIME)}
              CUSTOMER_COUNT={list[3].CUSTOMER_COUNT}
            />
            <Table
              SEAT_NUMBER={list[4].SEAT_NUMBER}
              state={stateToColor(list[4].SEAT_USING, list[4].UPDATED_TIME)}
              CUSTOMER_COUNT={list[4].CUSTOMER_COUNT}
            />
            <Table
              SEAT_NUMBER={list[5].SEAT_NUMBER}
              state={stateToColor(list[5].SEAT_USING, list[5].UPDATED_TIME)}
              CUSTOMER_COUNT={list[5].CUSTOMER_COUNT}
            />
          </View>
        </View>
      </View>
      <ColorDesc />
    </View>
  );
};
const styles = StyleSheet.create({
  head: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  store: {
    borderColor: basecolor,
    backgroundColor: '#fff',
    borderWidth: 1,
    height: 500,
    margin: 15,
    borderRadius: 5,
  },
  counter: {
    flex: 0.1,
    width: '30%',
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  colors: {
    flex: 0.05,
    borderWidth: 1,
    margin: 15,
    borderWidth: 0.2,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  green: {
    borderRadius: 20,
    margin: 10,
    width: 20,
    height: 20,
    backgroundColor: 'lightgreen',
    borderWidth: 1,
  },
  yellow: {
    borderRadius: 20,
    margin: 10,
    width: 20,
    height: 20,
    backgroundColor: 'gold',
    borderWidth: 1,
  },
  red: {
    borderRadius: 20,
    margin: 10,
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderWidth: 1,
  },
  black: {
    borderRadius: 20,
    margin: 10,
    width: 20,
    height: 20,
    backgroundColor: 'black',
    borderWidth: 1,
  },
});
export default TableScreen;
