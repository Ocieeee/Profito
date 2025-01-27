import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {useCustomTheme} from './Theme';
import {navigationRef} from '../utils/NavigationUtil';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/dashboard/HomeScreen';
import EmailScreen from '../screens/auth/EmailScreen';

const Stack = createNativeStackNavigator();
const Navigation: React.FC = () => {
  const theme = useCustomTheme();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background,
      text: theme.colors.text,
      card: theme.colors.card,
      border: theme.colors.border,
      notification: theme.colors.notification,
      primary: theme.colors.primary,
    },
  };

  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="EmailScreen" component={EmailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
