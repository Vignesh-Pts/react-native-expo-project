import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';

const BlogForm = ({ navigation, onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}></TextInput>
            <Text style={styles.label}>Content</Text>
            <TextInput style={styles.input} value={content}  onChangeText={(text) => setContent(text)}></TextInput>
            <Button title="Save Blog" onPress={() => onSubmit(title, content)} />
        </View>
    );
};

// React will automatically use this default value if we didn't provide any value.
BlogForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogForm;
