import { View, StyleSheet } from 'react-native';
import React from 'react';

import LoginScreen from './screens/LogInScreen';
import SignUp from './screens/SignUpScreen';
import SignUpNext from './screens/SignUpNext';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
      {/* <SignUp /> */}
      {/* <SignUpNext /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
