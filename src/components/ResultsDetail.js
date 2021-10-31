import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={result.image} />
            <Text style={styles.details}>Duration: {result.duration}</Text>
            <Text style={{...styles.details, fontWeight: "bold"}}>IMDb: {result.IMDb}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 200,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    details: {
        fontSize: 18
    }
});

export default ResultsDetail;