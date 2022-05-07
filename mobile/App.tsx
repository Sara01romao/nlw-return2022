import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';

import { theme } from './src/theme';
import { Widget } from './src/components/widget';

export default function App() {
  return (
    <View style={{
      flex:1,
      backgroundColor:theme.colors.background
    }}>
      <Widget/>


      <StatusBar 
        style="auto"
        backgroundColor='transparent'
        translucent
      
      />
    </View>
  );
}

//31