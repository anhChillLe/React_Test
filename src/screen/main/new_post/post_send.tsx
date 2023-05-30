import React, { PureComponent, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, Text, View, TextInput } from 'react-native'
import Icon from 'react-native-paper/lib/typescript/src/components/Icon'
import { IconButton, } from 'react-native-paper'
import { Icons } from '../../../assets/icons/png/icons'
import { Post } from '../../../models/Post'
import { SvgUri } from 'react-native-svg'
import Instabutton from './instagram.svg'

export default function PostSend({ navigation, route }: { navigation: any, route: any }) {
    const [caption, setCaption] = useState<string>('')
    const uri = route.params.uri as string

    const post: Post = {
        id: '100',
        avatar: uri,
        name: 'Chill Lê',
        img: uri,
        caption: caption,
        comment: 99,
        like: 10,
        createAt: 0,
        isLiked: false
    }

    return (
        <View style={{ flex: 1, flexDirection: 'column', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
                <IconButton icon={Icons.back} />
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Bài viết mới</Text>
                <View style={{ flex: 1 }} />
                <IconButton
                    icon={Icons.sendHorizontal}
                    onPress={() => {
                        navigation.navigate({
                            name: 'Home',
                            params: { post },
                            merge: true
                        })
                    }}
                />
            </View>
            <View style={{ marginHorizontal: 16, flexDirection: 'row' }}>
                <Image source={{ uri: uri }} style={{ height: 96, width: 96, borderRadius: 2 }} />
                <TextInput
                    placeholder='Viết chú thích...'
                    style={{
                        fontSize: 16,
                        marginStart: 8,
                        flex: 1,
                    }}
                    multiline={true}
                    onChangeText={(text) => setCaption(text)}
                />
            </View>
        </View>
    )
}