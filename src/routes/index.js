import React from 'react';
import useRoute from '../hooks/useRoute';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from './NavigationRef';

const Routes = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="splash">
        {useRoute.map(el => <Stack.Screen
                                key={el.path}
                                name={el.path}
                                component={el.component}
                                options={{ headerShown: false, title: el.title }}
                                />)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
