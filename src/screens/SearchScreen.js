import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    const [results, searchResults] = useResults();

    const filterResultsBytype = (type) => {
        return results.filter(result => {
            return result.type === type;
        })
    }

    return (
        <View style={styles.container}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchResults()}
            />
            <ScrollView>
                <ResultsList title="Kollywood" results={filterResultsBytype('kollywood')}/>
                <ResultsList title="Bollywood" results={filterResultsBytype('bollywood')}/>
                <ResultsList title="Tollywood" results={filterResultsBytype('tollywood')}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
});

export default SearchScreen;