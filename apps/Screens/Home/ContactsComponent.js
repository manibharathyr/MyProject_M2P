import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavKeys} from '../../Constants/NavKeys';
import {colors} from '../../Theme/colors';
import {navigateToScreen} from '../../Utility/NavigationService';

const ContactsComponent = () => {
  const Navigation = useNavigation();
  const contactsData = [
    {id: '1', firstName: 'John', lastName: 'Doe'},
    {id: '2', firstName: 'Jane', lastName: 'Smith'},
    {id: '3', firstName: 'Alice', lastName: 'Johnson'},
    {id: '4', firstName: 'Michael', lastName: 'Brown'},
    {id: '5', firstName: 'Emily', lastName: 'Davis'},
    {id: '6', firstName: 'Daniel', lastName: 'Wilson'},
    {id: '7', firstName: 'Jessica', lastName: 'Garcia'},
    {id: '8', firstName: 'David', lastName: 'Martinez'},
    {id: '9', firstName: 'Laura', lastName: 'Rodriguez'},
    {id: '10', firstName: 'Robert', lastName: 'Hernandez'},
  ];

  const renderContactsItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/placeHolder.jpg')}
          style={styles.profileView}
          resizeMode="cover"
        />
        <Text style={styles.nameText}>{item.firstName}</Text>
        <Text style={styles.nameText}>{item.lastName}</Text>
      </View>
    );
  };

  const onPressNewTransaction = () => {
    navigateToScreen(Navigation, NavKeys.contacts, {});
  };

  const headerComponent = () => {
    return (
      <Pressable
        style={{
          alignItems: 'center',
        }}
        onPress={onPressNewTransaction}>
        <View style={styles.transactionView}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <AntDesign name={'swap'} color={colors.black} size={25} />
          </View>
        </View>
        <Text style={styles.nameText}>{`${'New'}\n${'transaction'}`}</Text>
      </Pressable>
    );
  };

  return (
    <View
      style={{
        paddingHorizontal: '2%',
      }}>
      <FlatList
        data={contactsData}
        keyExtractor={item => item.id}
        renderItem={renderContactsItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={headerComponent}
      />
    </View>
  );
};

export default ContactsComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  profileView: {
    borderRadius: 100,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginBottom: 5,
    height: 60,
    width: 60,
  },
  nameText: {
    textAlign: 'center',
    color: colors.black,
  },
  transactionView: {
    borderRadius: 100,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginBottom: 5,
    height: 60,
    width: 60,
    alignItems: 'center',
  },
});
