import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const CreateScreen = ({ navigation }) => {
    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
    const { addBlogPost } = useContext(BlogContext);

    return <BlogForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
            navigation.navigate('Blog');
        });
    }}/>

    // return (
    //     <View>
    //         <Text style={styles.label}>Title</Text>
    //         <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}></TextInput>
    //         <Text style={styles.label}>Content</Text>
    //         <TextInput style={styles.input} value={content}  onChangeText={(text) => setContent(text)}></TextInput>
    //         <Button title="Add Blog" onPress={() => {
    //             addBlogPost(title, content);
    //             navigation.navigate('Blog');
    //         }} />

    //         {/*
    //             If we make call to outside API
    //             <Button title="Add Blog" onPress={() => {
    //                 addBlogPost(title, content, () => {
    //                     navigation.navigate('Blog');
    //                 });
    //             }} />
    //         */}
    //     </View>
    // );
};

const styles = StyleSheet.create({
})

export default CreateScreen;
