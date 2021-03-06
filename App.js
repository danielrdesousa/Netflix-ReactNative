/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';

import Home from './src/pages/Home';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Home />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
