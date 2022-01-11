import React from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// const Tab = createMaterialTopTabNavigator();

const BoringPoints = ({navigation}: any) => {
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Button title="Lithologies" onPress={() => console.log('Check')} />
    </SafeAreaView>
  );
};

export default BoringPoints;
