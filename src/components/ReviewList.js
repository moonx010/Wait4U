import React, { useEffect, useState, useCallback }from 'react';

import { View, StyleSheet, FlatList } from 'react-native';

import ListEmptyComponent from './ListEmptyComponent';
import { fetchReview } from '../libs/api';
import ReviewListItem from './ReviewListItem';

export default function ReviewList(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        const review = async () => {
            const data = await fetchReview(props.storeNum);
            setList(data);
        }
        review();
    }, [setList, props.storeNum]);
    return (
        <>
            <View>
                {list.map((review) => {
                    return (
                        <ReviewListItem {...review}/>
                    );
                })}
                
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: '#fff',
    },
});