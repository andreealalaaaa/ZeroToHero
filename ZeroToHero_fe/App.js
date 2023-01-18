import { View, StyleSheet } from 'react-native';
import React from 'react';

import LoginScreen from './screens/LogInScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
