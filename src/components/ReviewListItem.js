import React  from 'react';
import { StyleSheet, View} from 'react-native';
import PublicText from './texts/PublicText';
import Star from './Star';

const ReviewListItem = (item) => {

    return (
        <View style={styles.itemContainer}>
            <View style={{ flex: 1 }}>
                
                <View style={styles.reviewTitle}>
                    <PublicText style={styles.customerName} >{item.CUSTOMER_NUMBER}  </PublicText>
                    <Star score={item.SCORE} />
                    <PublicText style={styles.score}>  {item.SCORE.toFixed(1)}</PublicText>
                </View>
                
                <PublicText style={styles.reviewContent} >{item.REVIEW_CONTENT}</PublicText>
            </View>
        </View>
    ); 
};

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
    },
    customerName: {
        fontSize: 18,
    },
    reviewTitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
        width: 300,
        justifyContent: 'flex-start'
    },
    score: {
        fontSize: 16,
        marginBottom: 4,
    },
    reviewContent: {
        fontSize: 12,
        marginTop: 10,
    }
})


export default ReviewListItem;