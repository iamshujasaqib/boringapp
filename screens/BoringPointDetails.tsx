import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {LOGGED_BY} from './components/LoggedBy';
import {DRILLING_METHOD} from './components/DrillingMethod';
import {DRILLING_CREW} from './components/DrillingCrew';
import {HAMMER_TYPE} from './components/HammerType';
import {EQUIPMENT_USED} from './components/EquipmentUsed';
import DateTimePicker from '@react-native-community/datetimepicker';

interface types {
  name: string;
  onPress?(): void;
}

const BoringPointDetails = () => {
  const [PID, setPID] = useState('');
  const [holeDepth, setHoleDepth] = useState('0');
  const [augralRefusal, setAugralRefusal] = useState('');
  const [drillingMethod, setDrillingMethod] = useState(false);
  const [drillingCrew, setDrillingCrew] = useState(false);
  const [hammerType, setHammerType] = useState(false);
  const [loggedBy, setLoggedBy] = useState(false);
  const [equipmentUsed, setEquipmentUsed] = useState(false);
  const [saveDrillingMethod, setSaveDrillingMethod] = useState('');
  const [saveDrillingCrew, setSaveDrillingCrew] = useState('');
  const [saveHammerType, setSaveHammerType] = useState('');
  const [saveLoggedBy, setSaveLoggedBy] = useState('');
  const [saveEquipmentUsed, setSaveEquipmentUsed] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  // Helper Functions

  function helperDrillingMethod(props: any) {
    setSaveDrillingMethod(props);
    setDrillingMethod(false);
  }

  function helperDrillingCrew(props: any) {
    setSaveDrillingCrew(props);
    setDrillingCrew(false);
  }

  function helperHammerType(props: any) {
    setSaveHammerType(props);
    setHammerType(false);
  }

  function helperLoggedBy(props: any) {
    setSaveLoggedBy(props);
    setLoggedBy(false);
  }

  function helperEquipmentUsed(props: any) {
    setSaveEquipmentUsed(props);
    setEquipmentUsed(false);
  }

  // Date Time Picker

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 10}}>
          <Text style={styles.textStyle}>PointID</Text>
          <TextInput style={styles.inputStyle} />

          {/* Drilling Method */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={drillingMethod}
            onRequestClose={() => {
              setDrillingMethod(!drillingMethod);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}>
                  <FlatList
                    data={DRILLING_METHOD}
                    renderItem={item => {
                      return (
                        <TouchableOpacity
                          style={styles.ModaltextStyle}
                          onPress={() => helperDrillingMethod(item.item.name)}>
                          <Text style={styles.modalText}>{item.item.name}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setDrillingMethod(false)}>
                    <Text style={styles.modaltextStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <Pressable
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              minHeight: 55,
              marginBottom: 5,
            }}
            onPress={() => setDrillingMethod(true)}>
            <Text style={{fontSize: 16, color: 'grey'}}>Drilling Method</Text>
            <Text style={{fontSize: 18, paddingTop: 5}}>
              {saveDrillingMethod}
            </Text>
          </Pressable>
          {/* Drilling Crew */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={drillingCrew}
            onRequestClose={() => {
              setDrillingCrew(!drillingCrew);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}>
                  <FlatList
                    data={DRILLING_CREW}
                    renderItem={item => {
                      return (
                        <TouchableOpacity
                          style={styles.ModaltextStyle}
                          onPress={() => helperDrillingCrew(item.item.name)}>
                          <Text style={styles.modalText}>{item.item.name}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setDrillingCrew(!drillingCrew)}>
                    <Text style={styles.modaltextStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <Pressable
            style={{
              borderBottomColor: 'black',
              minHeight: 55,
              borderBottomWidth: 0.5,
              marginBottom: 5,
            }}
            onPress={() => setDrillingCrew(true)}>
            <Text style={{fontSize: 16, color: 'grey'}}>Drilling Crew</Text>
            <Text style={{fontSize: 18, paddingTop: 5}}>
              {saveDrillingCrew}
            </Text>
          </Pressable>
          {/* Hammer Type */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={hammerType}
            onRequestClose={() => {
              setHammerType(!hammerType);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}>
                  <FlatList
                    data={HAMMER_TYPE}
                    renderItem={item => {
                      return (
                        <TouchableOpacity
                          style={styles.ModaltextStyle}
                          onPress={() => helperHammerType(item.item.name)}>
                          <Text style={styles.modalText}>{item.item.name}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setHammerType(!hammerType)}>
                    <Text style={styles.modaltextStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <Pressable
            style={{
              borderBottomColor: 'black',
              minHeight: 55,
              borderBottomWidth: 0.5,
              marginBottom: 5,
            }}
            onPress={() => setHammerType(true)}>
            <Text style={{fontSize: 16, color: 'grey'}}>Hammer Type</Text>
            <Text style={{fontSize: 18, paddingTop: 5}}>{saveHammerType}</Text>
          </Pressable>
          {/* Logged by */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={loggedBy}
            onRequestClose={() => {
              setLoggedBy(!loggedBy);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}>
                  <FlatList
                    data={LOGGED_BY}
                    renderItem={item => {
                      return (
                        <TouchableOpacity
                          style={styles.ModaltextStyle}
                          onPress={() => helperLoggedBy(item.item.name)}>
                          <Text style={styles.modalText}>{item.item.name}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setLoggedBy(!loggedBy)}>
                    <Text style={styles.modaltextStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <Pressable
            style={{
              borderBottomColor: 'black',
              minHeight: 55,
              borderBottomWidth: 0.5,
              marginBottom: 5,
            }}
            onPress={() => setLoggedBy(true)}>
            <Text style={{fontSize: 16, color: 'grey'}}>Logged By</Text>
            <Text style={{fontSize: 18, paddingTop: 5}}>{saveLoggedBy}</Text>
          </Pressable>
          {/* Equipment Used */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={equipmentUsed}
            onRequestClose={() => {
              setEquipmentUsed(!equipmentUsed);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}>
                  <FlatList
                    data={EQUIPMENT_USED}
                    renderItem={item => {
                      return (
                        <TouchableOpacity
                          style={styles.ModaltextStyle}
                          onPress={() => helperEquipmentUsed(item.item.name)}>
                          <Text style={styles.modalText}>{item.item.name}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setEquipmentUsed(!equipmentUsed)}>
                    <Text style={styles.modaltextStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <Pressable
            style={{
              borderBottomColor: 'black',
              minHeight: 55,
              borderBottomWidth: 0.5,
              marginBottom: 5,
            }}
            onPress={() => setEquipmentUsed(true)}>
            <Text style={{fontSize: 16, color: 'grey'}}>Equipment Used</Text>
            <Text style={{fontSize: 18, paddingTop: 5}}>
              {saveEquipmentUsed}
            </Text>
          </Pressable>

          <Text style={styles.textStyle}>Hole Depth</Text>
          <TextInput style={styles.inputStyle} onChangeText={setHoleDepth} />

          <Text style={styles.textStyle}>Augral Refusal</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={setAugralRefusal}
          />
          <TouchableOpacity onPress={showDatepicker}>
            <Text style={styles.textStyle}>Date Drilled</Text>
            <View
              style={{
                minHeight: 35,
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                marginBottom: 5,
              }}>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={'date'}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
          </TouchableOpacity>

          <Text style={styles.textStyle}>Boring Begin Time</Text>
          <TextInput style={styles.inputStyle} placeholder="Time Stamp" />
          <Text style={styles.textStyle}>Boring End Time</Text>
          <TextInput style={styles.inputStyle} placeholder="Time Stamp" />
          <Text style={styles.textStyle}>Elevation</Text>
          <TextInput style={styles.inputStyle} />
          <Text style={styles.textStyle}>Station</Text>
          <TextInput style={styles.inputStyle} />
          <Text style={styles.textStyle}>Offset</Text>
          <TextInput style={styles.inputStyle} />
          <Text style={styles.textStyle}>Boring Location</Text>
          <TextInput style={styles.inputStyle} />
          <Text style={styles.textStyle}>Weather</Text>
          <TextInput style={styles.inputStyle} />
          <Text style={styles.textStyle}>Water Depth</Text>
          <TextInput style={styles.inputStyle} />
          <Text style={styles.textStyle}>North</Text>
          <TextInput style={styles.inputStyle} />
          <Text style={styles.textStyle}>East</Text>
          <TextInput style={styles.inputStyle} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modaltextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
  ModaltextStyle: {
    minHeight: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default BoringPointDetails;
