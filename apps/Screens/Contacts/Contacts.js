import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {NavKeys} from '../../Constants/NavKeys';
import {colors} from '../../Theme/colors';
import {fonts} from '../../Theme/Fonts';
import {
  goBackToScreen,
  navigateToScreen,
} from '../../Utility/NavigationService';
import {checkRequestContactsPermission} from '../../Utility/Permissions';

const ContactsScreen = () => {
  const Navigation = useNavigation();
  const [contactList, setContactList] = useState([]);
  const [recentContact, setRecentContact] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [hasContactPermission, setContactPermission] = useState(false);

  useEffect(() => {
    if (!hasContactPermission) {
      getContacts();
      getRecentContacts();
    }
  }, []);

  const getContacts = async () => {
    const granted = await checkRequestContactsPermission();
    if (granted) {
      setContactPermission(granted);
      getContactsData();
    }
  };

  const getContactsData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('allContacts');
      setContactList(JSON.parse(jsonValue));
    } catch (e) {
      console.error('Failed to fetch data', e);
    }
  };

  const getRecentContacts = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('recentContacts');
      setRecentContact(JSON.parse(jsonValue));
    } catch (e) {
      console.error('Failed to fetch data', e);
    }
  };

  const onPressContact = async contactDetails => {
    try {
      const jsonValue = await AsyncStorage.getItem('recentContacts');
      let recentContacts = jsonValue ? JSON.parse(jsonValue) : [];

      const existingContactIds = new Set(
        recentContacts.map(contact => contact.rawContactId),
      );

      if (!existingContactIds.has(contactDetails.rawContactId)) {
        recentContacts.push(contactDetails);
        await AsyncStorage.setItem(
          'recentContacts',
          JSON.stringify(recentContacts),
        );
      }

      navigateToScreen(Navigation, NavKeys.paymentScreen, contactDetails);
      getRecentContacts();
    } catch (error) {
      console.error('Error accessing AsyncStorage: ', error);
    }
  };

  const onPressRecentContacts = contactDetails => {
    navigateToScreen(Navigation, NavKeys.paymentScreen, contactDetails);
  };

  const renderContactsItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onPressContact(item)}>
        <View style={styles.view}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/contacts.jpg')}
              style={styles.profileView}
              resizeMode="cover"
            />
            <View style={{marginHorizontal: '4%'}}>
              <Text style={styles.contactNameText}>{item.displayName}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderRecentContactsItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onPressRecentContacts(item)}>
        <View style={styles.view}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/contacts.jpg')}
              style={styles.profileView}
              resizeMode="cover"
            />
            <View style={{marginHorizontal: '4%'}}>
              <Text style={styles.contactNameText}>{item.displayName}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const allContacts = () => {
    return (
      <View>
        <View style={styles.lineView} />
        {<Text style={styles.contactHeaderText}>All Contacts</Text>}
        <FlatList
          data={contactList}
          keyExtractor={item => item?.rawContactId?.toString()}
          key={item => item?.rawContactId?.toString()}
          initialNumToRender={20}
          renderItem={renderContactsItem}
          contentContainerStyle={{
            paddingBottom: '20%',
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Pressable onPress={() => goBackToScreen(Navigation)}>
          <AntDesign name={'arrowleft'} color={colors.black} size={30} />
        </Pressable>
        <Text style={styles.headerText}>Contacts</Text>
      </View>
      <View>
        <View style={styles.searchView}>
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search"
            placeholderTextColor={colors.grey}
            style={styles.input}
          />
          <Feather name={'search'} color={colors.grey} size={25} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={recentContact}
          keyExtractor={item => item.rawContactId}
          renderItem={renderRecentContactsItem}
          contentContainerStyle={{
            paddingBottom: '20%',
          }}
          ListHeaderComponent={() => (
            <>
              {recentContact && (
                <Text style={styles.contactHeaderText}>Recent Contacts</Text>
              )}
            </>
          )}
          ListFooterComponent={allContacts}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  headerView: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    alignItems: 'center',
  },
  headerText: {
    color: colors.black,
    fontFamily: fonts.font_semi_bold,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  itemContainer: {
    paddingVertical: '2%',
    marginBottom: '2%',
    paddingHorizontal: '5%',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileView: {
    borderRadius: 100,
    backgroundColor: colors.grey,
    marginBottom: 5,
    height: 60,
    width: 60,
    alignItems: 'center',
  },
  nameText: {
    fontFamily: fonts.font_semi_bold,
    fontSize: 14,
    color: colors.black,
  },
  contactNameText: {
    fontFamily: fonts.font_semi_bold,
    fontSize: 18,
    marginHorizontal: '1%',
    color: colors.black,
  },
  amountText: {
    fontFamily: fonts.font_semi_bold,
    fontSize: 16,
    marginHorizontal: '1%',
    color: colors.black,
  },
  contactHeaderText: {
    fontFamily: fonts.font_semi_bold,
    fontSize: 16,
    marginHorizontal: '1%',
    color: colors.grey,
  },
  listContainer: {
    paddingHorizontal: '4%',
  },
  lineView: {
    height: 1,
    width: '100%',
    backgroundColor: colors.grey,
    marginBottom: '5%',
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: colors.grey,
    marginHorizontal: '5%',
    borderRadius: 15,
    marginBottom: '5%',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  input: {
    color: colors.grey,
    fontFamily: fonts.font_semi_bold,
    fontSize: 14,
    flex: 1,
  },
});

export default ContactsScreen;
