import { StyleSheet, View } from 'react-native';
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LogInScreen';
import SignUp from './screens/SignUpScreen';
import SignUpNext from './screens/SignUpNext';
import Home from './screens/Home';
import Post from './screens/Post';
import NewPost from './screens/NewPost';
import Profile from './screens/Profile';

// const RootStack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <RootStack.Navigator
    //     initialRouteName="Login"
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <RootStack.Screen name="Home" component={Home} />
    //     <RootStack.Screen name="Login" component={LoginScreen} />
    //     <RootStack.Screen name="SignUp" component={SignUp} />
    //     <RootStack.Screen name="SignUpNext" component={SignUpNext} />
    //     <RootStack.Screen name="Post" component={Post} />
    //     <RootStack.Screen name="NewPost" component={NewPost} />
    //     <RootStack.Screen name="Profile" component={Profile} />
    //   </RootStack.Navigator>

    // </NavigationContainer>
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      {/* <SignUp /> */}
      {/* <SignUpNext /> */}
      {/* <Home /> */}
      {/* <Post posId={2} currentUser='eliza' username='andreealalaaaa' text='Help me'/> */}
      {/* <NewPost currentUser='elizam'/> */}
      <Profile name='Eliza' username='eliza'/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
