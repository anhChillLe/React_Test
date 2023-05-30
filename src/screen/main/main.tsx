import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons } from '../../assets/icons/png/icons';
import { Image, ImageSourcePropType, View } from 'react-native';

import Camera from '../camera/camera_screen';
import HomeScreen from './home/home_screen';
import { IconButton } from 'react-native-paper';
import { Images } from '../../assets/image/image';

const MainTab = createBottomTabNavigator()

function Empty() {
    return null;
}

export default function MainScreenStack({ navigation, route }: { navigation: any, route: any }) {
    return (
        <MainTab.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false, tabBarStyle: { position: 'relative' } }}
            detachInactiveScreens={true}
        >
            <MainTab.Screen
                name="Home"
                component={HomeScreen}
                options={TabOption(Icons.homeFill, Icons.home)}
            />
            <MainTab.Screen
                name="Search"
                component={Camera}
                options={TabOption(Icons.searchFill, Icons.search)}
            />
            <MainTab.Screen
                name="PostCreate"
                component={Empty}
                options={{
                    ...TabOption(Icons.plus, Icons.plus),
                    tabBarButton: ((props) => {
                        return (
                            <IconButton
                                {...props}
                                icon={Icons.plus}
                                onPress={() => {
                                    navigation.navigate('Post');
                                }}
                            />
                        )
                    })
                }}
            />
            <MainTab.Screen
                name="Reels"
                component={Camera}
                options={TabOption(Icons.reelFill, Icons.reel)}
            />
            <MainTab.Screen
                name="Profile"
                component={Camera}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => {
                        return <Image
                            source={Images.userAvatar}
                            resizeMode='cover'
                            style={{ 
                                width: 26, 
                                height: 26,
                                borderRadius: 14,
                                borderWidth: 1,
                                borderColor: 'black',
                            }}
                        />
                    }
                }}
            />
        </MainTab.Navigator>
    );
}

const TabOption = (
    iconActive: ImageSourcePropType,
    iconInActive: ImageSourcePropType
): BottomTabNavigationOptions => {
    return {
        tabBarShowLabel: false,
        // tabBarActiveTintColor: 'red',
        // tabBarInactiveTintColor: 'black',
        tabBarIcon: ({ focused }) => (
            <Image
                source={focused ? iconActive : iconInActive}
                resizeMode='contain'
                style={{ width: 24, height: 24 }}

            />
        )
    }
}