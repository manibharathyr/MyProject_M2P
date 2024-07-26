import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import AppNavigator from './apps/Navigators/AppNavigator';
import {colors} from './apps/Theme/colors';
import {checkRequestContactsPermission} from './apps/Utility/Permissions';
import Contacts from 'react-native-contacts';
import {storeContactsData} from './apps/Utility/Utils';

const App = () => {
  useEffect(() => {
    getContacts();
  }, []);
  const getContacts = async () => {
    let hasPermission = await checkRequestContactsPermission();
    if (hasPermission) {
      Contacts.getAll()
        .then(contacts => {
          storeContactsData(contacts);
        })
        .catch(e => {
          console.log(e);
        });
    }
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.lightGrey} />
      <AppNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
