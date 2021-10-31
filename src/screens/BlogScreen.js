import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const BlogScreen = ({ navigation }) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(BlogContext);

    return (
        <View style={styles.container}>
            {/* <Button title="Add post" onPress={addBlogPost} /> */}
            <FlatList
                data={state}
                keyExtractor={result => result.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show',{ id :item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>Title: {item.title} Index: {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" style={styles.icon}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

// Whenever blogscreen is displayed on the screen by react navigation, it will automatically call this function
// and it will inspect the object that returns
// We can use this object to customize things that are displayed inside of our header
// and what to be happened whenever user taps on it.
// One options is headerRight - to show something on the right side of the header

BlogScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        )
    };
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default BlogScreen;