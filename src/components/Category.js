import React, {useCallback} from 'react';
import { ImageBackground, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import PublicBoldText from './texts/PublicBoldText';

const Category = ({category}) => {
    const navigation = useNavigation();

    const onPress = useCallback(() => {
        navigation.navigate('CategoryDetailScreen', {
            category,
        });
    }, [navigation, category]);
    const CategorySubject = {
        Food: [
                <ImageBackground source={require('../images/CategoryFoodImage.jpg')} style={styles.imageContainer} blurRadius={8} resizeMode={"cover"}>
                    <PublicBoldText style={styles.categoryName}>{category}</PublicBoldText>
                </ImageBackground>
        ],
        Play: [
            <ImageBackground source={require('../images/CategoryPlayImage.jpg')} style={styles.imageContainer} blurRadius={2} resizeMode={"cover"}>
                <PublicBoldText style={styles.categoryName}>{category}</PublicBoldText>
            </ImageBackground>
        ]
    };

    return (
        <Pressable onPress={onPress} style={styles.container}>
            {category === "식사" ? CategorySubject.Food[0] : CategorySubject.Play[0]}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        
    },
    imageContainer: {
        height: 160,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 12,
        margin: 8,
        borderRadius: 12,
        overflow: 'hidden',
        
    },
    categoryName: {
        fontSize: 24,
        color: '#fff'
    }
})
export default Category;