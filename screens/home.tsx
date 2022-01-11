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
import ProjectDetails from './projectDetails';

const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginHorizontal: 10, marginTop: 20, marginBottom: 35}}>
        <Text style={{textAlign: 'center', fontSize: 16}}>
          You have no project. Create new project or import from cloud
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.componentTouchableContainer,
          {backgroundColor: '#6372F2'},
        ]}
        onPress={() => navigation.navigate('Project Details')}>
        <View style={{paddingHorizontal: 5}}>
          <Icon name="add" size={20} color="white" />
        </View>
        <View>
          <Text style={{fontSize: 16, color: 'white'}}>Create New Project</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.componentTouchableContainer,
          {backgroundColor: '#46A83D'},
        ]}
        onPress={() => Alert.alert('You pressed Button 2')}>
        <View style={{paddingHorizontal: 5}}>
          <Icon name="cloud-download-sharp" size={20} color="white" />
        </View>
        <View>
          <Text style={{fontSize: 16, color: 'white'}}>Import From Cloud</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  componentTouchableContainer: {
    flexDirection: 'row',
    width: '80%',
    minHeight: 40,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});

export default HomeScreen;
