import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PublicText = ({ style, children, ...props}) => {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'NanumGothicExtraBold',
    },
});

export default PublicText;