import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Icons } from "../../../assets/icons/png/icons";

export default function Toolbar() {
    return (
        <View style={toolbarStyle.container}>
            <View style={{ flex: 1, height: 32, justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                <Image style={toolbarStyle.iconInsta} source={Icons.instagramText} />
            </View>
            <Image style={toolbarStyle.icon} source={Icons.heart} />
            <Image style={toolbarStyle.icon} source={Icons.send} />
        </View>
    )
}

const toolbarStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
        marginVertical: 16,
    },

    iconInsta: {
        height: 36,
        width: 120,
        marginStart: 8,
    },

    icon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        marginHorizontal: 8,
    }
})