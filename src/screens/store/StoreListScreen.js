import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import StoreList from '../../components/StoreList';
import TabHeaderHome from '../../components/TabHeaderHome';

const StoreListScreen = () => {
    return (
        <>
            <TabHeaderHome title="상품리스트"/>
            <StoreList />
        </>
    );
}

export default StoreListScreen;