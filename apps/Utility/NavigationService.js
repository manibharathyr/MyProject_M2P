import {CommonActions} from '@react-navigation/native';

export const navigateToScreen = (navigation, routeName, params = {}) => {
  navigation.dispatch(CommonActions.navigate({name: routeName, params}));
};

export const goBackToScreen = navigation => {
  navigation.goBack();
};
