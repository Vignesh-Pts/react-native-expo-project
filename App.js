import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen'
import BlogScreen from './src/screens/BlogScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import { BlogProvider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

// add atleast one screen
// First parameter - Route configuration object
// Second parameter - StackNavigator configuration object
// createAppContainer - Returns a component that shows default screen on mobile device.
// Whenever we wrap our App component within BlogProvider it wraps our react stack navigator which includes all screens which is used in our application.

const navigator = createStackNavigator({
  Search: SearchScreen,
  Blog: BlogScreen,
  ResultsShow: ResultsShowScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen
}, {
    initialRouteName: 'Blog',
    defaultNavigationOptions: {
      title: 'Blog List'
    }
});

const App = createAppContainer(navigator);

export default () => {
  return <BlogProvider>
      <App/>
    </BlogProvider>;
}