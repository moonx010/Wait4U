import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, FlatList} from 'react-native';

import ListEmptyComponent from './ListEmptyComponent';
import MenuListItem from './MenuListItem';
import { fetchMenu } from '../libs/api';

export default function MenuList(props) {
    const [list, setList] = useState([]);
    useEffect(() => {
        const menu = async () => {
            const data = await fetchMenu(props.storeNum);
            setList(data);
        }
        menu();
    }, [setList, props.storeNum]);

    return(
        <>
        <View>
            <FlatList 
                data ={ list }
                horizontal={true}
                keyExtractor={(item) => item.MENU_NUMBER}
                renderItem={(props) => <MenuListItem {...props}/>}
                ListEmptyComponent={
                    <ListEmptyComponent title="등록된 메뉴가 없습니다." />
                }
                style = {styles.flatList}
                contentContainerStyle={[
                    list.length > 0 ? null : {justifyContent: 'center', flex: 1},
                  ]}
            />
        </View>
            
        </>
    )
}

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
});
