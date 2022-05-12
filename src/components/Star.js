import React from 'react';
import { View, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Star({score}) {
    if(Math.round(score)===5) {
        return (
            <View style={styles.container}>
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
            </View>
        );
    }
    else if(Math.round(score)===4) {
        return (
            <View style={styles.container}>
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
            </View>
        );
    }
    else if(Math.round(score)===3) {
        return (
            <View style={styles.container}>
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
            </View>
        );
    }
    else if(Math.round(score)===2) {
        return (
            <View style={styles.container}>
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
            </View>
        );
    }
    else if(Math.round(score)===1) {
        return (
            <View style={styles.container}>
                <Ionicons name="star-sharp" size={18} color="#FFDD00" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
                <Ionicons name="star-sharp" size={18} color="#ABABAB" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})