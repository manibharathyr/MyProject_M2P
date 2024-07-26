import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigator from './Navigators/AppNavigator';
import Home from './Screens/Home/Home';
import {checkRequestContactsPermission} from './Utility/Permissions';

const RootScreen = () => {
  useEffect(() => {
    console.log('InitialLog');
    getContacts();
  }, []);
  const getContacts = async () => {
    await checkRequestContactsPermission();
  };
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
      {/* <Home /> */}
    </View>
  );
};

export default RootScreen;

const styles = StyleSheet.create({});
