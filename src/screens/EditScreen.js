import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const EditScreen = ({ navigation }) => {

    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(BlogContext);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <BlogForm
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => {
                    navigation.pop(); // Sent back to the previous screen
                })
            }}
        />
    )

    // return (
    //     <View>
    //         <Text>Edit Screen - {navigation.getParam('id')}</Text>
    //     </View>
    // );
};

const styles = StyleSheet.create({
})

export default EditScreen;
