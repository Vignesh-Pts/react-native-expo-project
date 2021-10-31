import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Each component which is rendered by react stack navigator send some default configuration to the component..
// navigation is an object provided by react stack navigator..
// It has methods like navigate and getParam......

const ResultsShowScreen = ({ navigation }) => {
    return <Text>Result Show Screen {navigation.getParam('id')}</Text>
};

const styles = StyleSheet.create({

});

export default ResultsShowScreen;