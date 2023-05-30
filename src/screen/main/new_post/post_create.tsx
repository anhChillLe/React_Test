import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePicker from './image_picker';
import PostSend from './post_send';
import { View } from 'react-native';

const PostCreateStack = createStackNavigator();

export default function PostCreate({ navigation }: { navigation: any }){
    return (
        <SafeAreaView style={{flex: 1}}>
            <PostCreateStack.Navigator initialRouteName='ImagePicker' screenOptions={{headerShown: false}}>
                <PostCreateStack.Screen name="ImagePicker" component={ImagePicker} />
                <PostCreateStack.Screen name="PostSend" component={PostSend} />
            </PostCreateStack.Navigator>
        </SafeAreaView>
    )
}