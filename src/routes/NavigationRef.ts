/* eslint-disable no-unused-expressions */
import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name: string, params: any) => {
  navigationRef.current?.navigate(name, params, {
    key: Math.random().toString(),
    onBack: () => this.refresh(),
    onGoBack: () => this.refresh(),
  });
}

export const reset = (routes) => {
  navigationRef.current?.reset(routes);
}

export const goBack = () => {
  navigationRef.current?.goBack();
}
