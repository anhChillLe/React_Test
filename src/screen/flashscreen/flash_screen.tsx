import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import { Images } from '../../assets/image/image';
import { Icons } from '../../assets/icons/png/icons';

const FlashScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={Icons.instagram}
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                }} />
        </View>
    )
}
export default FlashScreen;