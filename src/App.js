import React from 'react';
import { Text, View } from 'react-native';

import Loader from './components/Loader'
import Home from './components/Home'

export default function App() {
  return (
    <View>
      <Loader/>
      <Home/>

    </View>
  );
}

