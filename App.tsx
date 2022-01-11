import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BoringPoints from './screens/BoringPoints';
import HomeScreen from './screens/home';
import ProjectDetails from './screens/projectDetails';
import {useNavigation} from '@react-navigation/native';
//import BoringPointDetails from './screens/BoringPointDetails';
import BoringPointDetails from './screens/BoringPointDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  // const navigation1 = useNavigation();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Projects"
          component={HomeScreen}
          options={{
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
          }}
        />
        <Stack.Screen
          name="Project Details"
          component={ProjectDetails}
          options={({navigation}) => ({
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerLeft: props => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View>
                  <Icon name="arrow-back-outline" size={18} color="white" />
                </View>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Boring Points"
          component={BoringPoints}
          options={({navigation}) => ({
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerLeft: props => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>
                    Project Details
                  </Text>
                </View>
              </TouchableOpacity>
            ),
            headerRight: props => (
              <View
                style={{
                  flexDirection: 'row',
                  width: 50,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    Alert.alert('Project Duplicate button pressed')
                  }>
                  <View>
                    <Icon
                      name="file-tray-stacked-outline"
                      size={16}
                      color="white"
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('New Point')}>
                  <View>
                    <Icon name="add-circle-outline" size={16} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="New Point"
          component={BoringPointDetails}
          options={({navigation}) => ({
            headerStyle: {backgroundColor: '#003D80'},
            headerTitleStyle: {color: 'white', fontWeight: 'bold'},
            headerTitleAlign: 'left',
            headerLeft: props => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View>
                  <Text style={{fontSize: 16, color: 'white'}}>
                    Boring Points
                  </Text>
                </View>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
