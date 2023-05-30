import React, { useEffect, useState } from "react";
import PostList from "./post_list";
import Toolbar from "./toolbar";
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { User, userUrl } from "../../../models/User";
import { Post, postsUrl } from "../../../models/Post";
import { DeviceEventEmitter } from "react-native";
import { appRootParamList } from "../../../App";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen({ route }: { route: any}) {
       const navigation = useNavigation<appRootParamList>();

    useEffect(() => {
        if (route.params?.post) {
           setPostList([route.params?.post, ...posts])
        }
    }, [route.params?.post]);

    const insets = useSafeAreaInsets();

    const [isLoading, setLoading] = useState(true);
    const [isLoadingNew, setLoadingNew] = useState(true);
    const [isLoadingMore, setLoadingMore] = useState(false);
    const [friends, setFriendList] = useState<User[]>([]);
    const [posts, setPostList] = useState<Post[]>([]);

    async function getFriendList(url: string) {
        const response = await fetch(url)
        const data = await response.json();
        setFriendList(data);
    }

    async function getPostList(url: string) {
        const response = await fetch(url)
        const data = await response.json();
        setPostList(data);
    }

    async function getData() {
        try {
            await getFriendList(userUrl);
            await getPostList(postsUrl);
        } catch (error) { }
        finally {
            setLoading(false)
            DeviceEventEmitter.emit("onLoaded")
        }
    }

    async function loadMore() {
        try {
            const response = await fetch(postsUrl)
            const data = await response.json();
            const newData = [...posts, ...data];
            setPostList(newData);
        } catch (error) { }
        finally {
            // DeviceEventEmitter.emit("onLoaded")
            setLoadingMore(false)
        }
    }

    async function onRefresh() {
        try {
            const response = await fetch(postsUrl)
            const data = await response.json();
            setPostList(data);
        } catch (error) { }
        finally {
            DeviceEventEmitter.emit("onLoaded")
            setLoadingNew(false)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
            <Toolbar />
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
                    <ActivityIndicator size={'large'} />
                </View>
            ) : (
                <View style={{ flex: 1 }} >
                    <PostList
                        friends={friends}
                        posts={posts}
                        onEndReached={() => {
                            setLoadingMore(true)
                            loadMore()
                        }}
                        onRefresh={() => {
                            setLoadingNew(true)
                            onRefresh()
                        }}
                    />
                </View>
            )
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        flex: 1,
    }
})