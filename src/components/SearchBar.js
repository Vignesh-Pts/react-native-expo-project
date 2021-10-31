import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput placeholder="Search" style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
             />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        marginHorizontal: 15
    }
});

export default SearchBar;