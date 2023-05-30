import React, { useState } from 'react';

import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import { CardStyleInterpolators, StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RNBootSplash from "react-native-bootsplash";

import Login from './screen/login/login';
import MainScreenStack from './screen/main/main';
import PostCreate from './screen/main/new_post/post_create';
import { screens } from './constants';
import CommentScreen from './screen/comments/comments';

export type appRootParamList = {
  [screens.post]: undefined
}

const RootStack = createStackNavigator()

function hideSplash() {
  RNBootSplash.hide();
}

function App() {
  const [token, setToken] = useState(true)
  //StatusBar.setBarStyle('dark-content')

  const navigationRef = React.useRef();

  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={hideSplash}>
        <NavigationContext.Provider value={navigationRef.current}>
          <RootStack.Navigator
            initialRouteName='Login'
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          >
            {token ? (
              <>
                <RootStack.Screen name='Main' component={MainScreenStack} />
                <RootStack.Screen name='Post' component={PostCreate} />
                <RootStack.Screen name='Comments' component={CommentScreen} />
              </>
            ) : (
              <RootStack.Screen name="Login" component={Login} />
            )}
          </RootStack.Navigator>
        </NavigationContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;