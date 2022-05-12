import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import PublicText from '../../components/texts/PublicText';
import TabHeaderReverse from '../../components/TabHeaderReverse';
import Input from '../../components/Input';
import StoreList from '../../components/StoreList';
import ListEmptyComponent from '../../components/ListEmptyComponent';



export default function SearchScreen({navigation}) {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
            <TabHeaderReverse title="Wait4U"/>
            <Input
                inputValue={searchText}
                inputChange={(text) => {
                    setSearchText(text);
                }}
            />
            <PublicText style={styles.subHeading}>{searchText.length===0 ? "" : `'${searchText}'의 검색 결과입니다`}</PublicText>
            <ScrollView style={{flex: 1}}>
                {searchText.length===0 ? <ListEmptyComponent title={"검색어가 없습니다."} /> : <StoreList search={searchText}/>}
            </ScrollView>
            
        </ View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    subHeading: {
        fontSize: 20,
        marginTop: 16,
        marginLeft: 16,
    },

})