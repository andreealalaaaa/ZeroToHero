import { View, StyleSheet } from 'react-native';
import React from 'react';

import LoginScreen from './screens/LogInScreen';
import SignUp from './screens/SignUpScreen';
import SignUpNext from './screens/SignUpNext';
import Home from './screens/Home';
import Post from './screens/Post';
import NewPost from './screens/NewPost';
import Profile from './screens/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      {/* <SignUp /> */}
      {/* <SignUpNext /> */}
      {/* <Home /> */}
      {/* <Post /> */}
      {/* <NewPost currentUser='elizam'/> */}
      <Profile name='Eliza' username='elizam'/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
