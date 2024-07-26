import AsyncStorage from '@react-native-async-storage/async-storage';

export const RecentContacts = [
  {
    phoneNumbers: [
      {
        id: '8',
        label: 'mobile',
        number: '+917010359606',
      },
      {
        id: '9',
        label: 'work',
        number: '+919487018490',
      },
      {
        id: '911',
        label: 'work',
        number: '+919487018490',
      },
    ],
    isStarred: false,
    postalAddresses: [],
    thumbnailPath: 'content://com.android.contacts/contacts/1406/photo',
    department: '',
    jobTitle: '',
    emailAddresses: [],
    urlAddresses: [],
    suffix: null,
    company: '',
    imAddresses: [],
    note: null,
    middleName: '',
    displayName: 'Kaveri Nathan',
    familyName: 'Nathan',
    givenName: 'Kaveri',
    prefix: null,
    hasThumbnail: true,
    rawContactId: '1105',
    recordID: '1406',
  },
  {
    phoneNumbers: [
      {
        id: '16',
        label: 'mobile',
        number: '+917639322429',
      },
    ],
    isStarred: false,
    postalAddresses: [],
    thumbnailPath: '',
    department: '',
    jobTitle: '',
    emailAddresses: [],
    urlAddresses: [],
    suffix: null,
    company: '',
    imAddresses: [],
    note: null,
    middleName: '',
    displayName: 'Amma',
    familyName: '',
    givenName: 'Amma',
    prefix: null,
    hasThumbnail: false,
    rawContactId: '3',
    recordID: '1220',
  },
  {
    phoneNumbers: [
      {
        id: '21',
        label: 'mobile',
        number: '7094647108',
      },
      {
        id: '22',
        label: 'other',
        number: '+919788886855',
      },
      {
        id: '916',
        label: 'mobile',
        number: '7094647108',
      },
      {
        id: '5289',
        label: 'other',
        number: '+919788886855',
      },
    ],
    isStarred: false,
    postalAddresses: [],
    thumbnailPath: 'content://com.android.contacts/contacts/1423/photo',
    department: '',
    jobTitle: '',
    emailAddresses: [],
    urlAddresses: [],
    suffix: null,
    company: '',
    imAddresses: [],
    note: null,
    middleName: '',
    displayName: 'Sam 🐶',
    familyName: '🐶',
    givenName: 'Sam',
    prefix: null,
    hasThumbnail: true,
    rawContactId: '1302',
    recordID: '1423',
  },
  {
    phoneNumbers: [
      {
        id: '30',
        label: 'mobile',
        number: '+916383905718',
      },
      {
        id: '1066',
        label: 'mobile',
        number: '+916383905718',
      },
    ],
    isStarred: false,
    postalAddresses: [],
    thumbnailPath: 'content://com.android.contacts/display_photo/2',
    department: '',
    jobTitle: '',
    emailAddresses: [
      {
        id: '24',
        label: 'home',
        email: 'smuruga57@gmail.com',
      },
    ],
    urlAddresses: [],
    suffix: null,
    company: '',
    imAddresses: [],
    note: null,
    middleName: '',
    displayName: 'Murugan 🐨',
    familyName: '🐨',
    givenName: 'Murugan',
    prefix: null,
    hasThumbnail: true,
    rawContactId: '1108',
    recordID: '1222',
  },
];

export const storeContactsData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('allContacts', jsonValue);
  } catch (e) {
    console.error('Failed to store data', e);
  }
};

export const getContactsData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('allContacts');
    return jsonValue;
  } catch (e) {
    console.error('Failed to fetch data', e);
  }
};

export const storeRecentContacts = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('recentContacts', jsonValue);
  } catch (e) {
    console.error('Failed to store data', e);
  }
};
