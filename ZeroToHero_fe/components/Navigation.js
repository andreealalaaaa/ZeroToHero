import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LoginScreen from './screens/LogInScreen';
import SignUp from './screens/SignUpScreen';
import SignUpNext from './screens/SignUpNext';
import Home from './screens/Home';
import Post from './screens/Post';
import NewPost from './screens/NewPost';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Post">
      <Stack.Screen name="Post" component={Post} options={{ title: 'Post' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'SignUp' }} />
        <Stack.Screen name="SignUpNext" component={SignUpNext} options={{ title: 'SignUpNext' }} />
        <Stack.Screen name="NewPost" component={NewPost} options={{ title: 'NewPost' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
    </Stack.Navigator>
  );
}

export default Navigation;
