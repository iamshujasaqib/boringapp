import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './home';
import BoringPoints from './BoringPoints';

const ProjectDetails = ({navigation}: any) => {
  const [client, setClient] = useState('');
  const [projectName, setprojectName] = useState('');
  const [location, setLocation] = useState('');
  const [projectNumber, setProjectNumber] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainViewContainer}>
        <Text style={styles.textStyle}>Client</Text>
        <TextInput style={styles.inputStyle} onChangeText={setClient} />
        <Text style={styles.textStyle}>Project Name</Text>
        <TextInput style={styles.inputStyle} onChangeText={setprojectName} />
        <Text style={styles.textStyle}>Location</Text>
        <TextInput style={styles.inputStyle} onChangeText={setLocation} />
        <Text style={styles.textStyle}>Project Number</Text>
        <TextInput
          style={[styles.inputStyle, {marginBottom: 15}]}
          onChangeText={setProjectNumber}
          keyboardType="number-pad"
        />
        <TouchableOpacity
          style={[
            styles.componentTouchableContainer,
            {backgroundColor: 'blue', width: '100%'},
          ]}
          onPress={() => navigation.navigate('Boring Points')}>
          <View>
            <Text style={{fontSize: 16, color: 'white'}}>Boring Points</Text>
          </View>
          <View style={{paddingHorizontal: 5}}>
            <Icon name="chevron-forward" size={18} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.componentTouchableContainer,
            {backgroundColor: 'red', width: '100%'},
          ]}>
          <View>
            <Text style={{fontSize: 16, color: 'white'}}>Delete Project</Text>
          </View>
          <View style={{paddingHorizontal: 5}}>
            <Icon name="trash-outline" size={18} color="white" />
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={[
              styles.componentTouchableContainer,
              {backgroundColor: 'orange', width: '48%'},
            ]}>
            <View>
              <Text style={{fontSize: 16, color: 'white'}}>Save to cloud</Text>
            </View>
            <View style={{paddingHorizontal: 5}}>
              <Icon name="cloud-download-outline" size={18} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.componentTouchableContainer,
              {backgroundColor: 'green', width: '48%'},
            ]}>
            <View>
              <Text style={{fontSize: 16, color: 'white'}}>Email .XLSX</Text>
            </View>
            <View style={{paddingHorizontal: 5}}>
              <Icon name="book-outline" size={18} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainViewContainer: {
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    color: 'grey',
  },
  inputStyle: {
    minHeight: 35,
    fontSize: 16,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginBottom: 5,
  },
  componentTouchableContainer: {
    flexDirection: 'row',
    minHeight: 40,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default ProjectDetails;
