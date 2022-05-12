import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import { fetchMoreList } from '../libs/api';
import StoreListItem from './StoreListItem';
import ListEmptyComponent from './ListEmptyComponent';
import PublicText from './texts/PublicText';
let olderOffset = 0;
let newestOffset = 0;
let spage = 0;
let pageList = 100;

  

const StoreList = ({search, category}) => {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    const initList = async () => {
        olderOffset = 0;
        newestOffset = 0;
        spage=0;
        setIsLoading(true);
        const initialList = await fetchMoreList(spage, spage+pageList);
    
        if (initialList.length > 0) {
            newestOffset = initialList[0].STORE_NUMBER;
            olderOffset = initialList[initialList.length - 1].STORE_NUMBER;
        }

        setList([...initialList]);
        setIsLoading(false);
    };

    initList();
   }, [setList]);

//   // 이전
//     const loadMoreOlderList = useCallback(async () => {
//         if (isLoading === true) {
//         return;
//         }
//         setIsLoading(true);
//         spage = olderOffset;
//         const newList = await fetchMoreList(spage, spage+pageList);

//     if (newList.length > 0) {
//         olderOffset = newList[newList.length - 1].STORE_NUMBER;
//     }
//     setList((state) => {
//         return [...state, ...newList];
//     });
//     setIsLoading(false);
//   }, [isLoading, setList]);

//   // 최근
//   const loadMoreRecentList = useCallback(async () => {
//     if (isLoading === true) {
//         return;
//     }

//     setIsLoading(true);
//     spage=newestOffset;
//     const newList = await fetchMoreList(0, spage);
//     if (newList.length > 0) {
//         newestOffset = newList[0].STORE_NUMBER;
//     }
//     setList((state) => {
//         return [...newList, ...state];
//     });
//     setIsLoading(false);
//     }, [isLoading, setList]);
    // useEffect(() => { 
    //     const filteringList = list.filter(item => item.STORE_NAME.indexOf(search) > -1)
    //     setFilteredList(filteringList) 
        
    // }, [search])
    // useEffect(() => { 
    //     const filteringList = list.filter(item => item.STORE_CATEGORY === category)
    //     setFilteredList(filteringList) 
    // }, [])
    return (
        <>
            {/* {isLoading && <PublicText>Loading...</PublicText>}
            <FlatList
                data={filteredList}
                onEndReached={loadMoreOlderList}
                onStartReached={loadMoreRecentList}
                keyExtractor={(item) => item.STORE_NUMBER}
                renderItem={(props) => <StoreListItem {...props} />}
                ListEmptyComponent={ListEmptyComponent}
                contentContainerStyle={[
                filteredList.length > 0 ? null : {justifyContent: 'center', flex: 1},
                ]}
                style={styles.flatList}
            /> */}
            <View>
                {list.map((item) => {
                    if (search && item.STORE_NAME.search(search)===-1) {
                        return null;
                    }
    
                    if (category && item.STORE_CATEGORY != category) {
                        return null;
                    }
                    return (
                        <StoreListItem {...item}/>
                    );
                })}
                
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default StoreList;