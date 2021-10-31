import React, { useContext }  from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation} from 'react-navigation';
import ResultsDetail from './ResultsDetail';

// FlatList -- Which takes an array of records and turns it into list of elements.
// We can also use array.map but when we move with FlatList it provides some default props and provides some customization to display list on screen.
// Available props in FlatList - data, renderItem etc..
// data - soure (Array)
// renderItem - Turn each item into element.
// Why to set key - If we change our source for example deleting an object in an array. The array objects which is turned into elements will be re-rendered again.
// Instead of deleting that single element whole element is re-rendered. That's the reason for going with key property.
// Providing key can be achieved by either setting key property in array or else setting keyExtractor prop in FlatList.
// Key property must be string not a number.
// Whenever an element is referenced by key in react-native, it tracks that element in the screen and delete only that element instead of re-rendering.
// TouchableOpacity - An element that can detect a press on any kind of element.
// If we want to use navigation prop in child component. Usual way of passing it down from parent to child.
// Overcome the above issue use - withNavigation - Which returns HOC with navigation property injected by react stack navigator.

const ResultList = ({ title, results, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {
                            id: item.id
                        })}>
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultList);