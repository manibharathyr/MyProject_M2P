import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {NavKeys} from '../Constants/NavKeys';
import BottomNavigator from './BottomNavigator';
import Contacts from '../Screens/Contacts/Contacts';
import PaymentScreen from '../Screens/Payments/PaymentScreen';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  const navigationRef = useRef(null);
  const isReadyRef = useRef(false);

  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => (isReadyRef.current = true)}>
      <Stack.Navigator>
        <Stack.Screen
          name={NavKeys.bottomNavigator}
          component={BottomNavigator}
          options={{
            headerShown: false,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name={NavKeys.contacts}
          component={Contacts}
          options={{
            headerShown: false,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name={NavKeys.paymentScreen}
          component={PaymentScreen}
          options={{
            headerShown: false,
            gestureDirection: 'horizontal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
