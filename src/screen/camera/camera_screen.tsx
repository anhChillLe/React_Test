import React, { useState } from 'react'
import { Image, Rationale, TouchableOpacity, View } from 'react-native'
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { Icons } from '../../assets/icons/png/icons';
import { CameraOptions, ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Images } from '../../assets/image/image';

function checkCamera(
    onAccess: () => void,
    onDenied: () => void,
) {
    let camera = PERMISSIONS.ANDROID.CAMERA
    check(camera).then((result) => {
        switch (result) {
            case RESULTS.GRANTED:
                onAccess()
                break
            case RESULTS.DENIED:
                onDenied()
                break
            default:
                onDenied()
                break
        }
    })
}

function requestPermissions() {
    const dialog: Rationale = {
        title: 'Xin quyền bạn ei',
        message: 'Cho xin cái quyền camera',
        buttonPositive: 'OK',
        buttonNegative: 'Cancel',
        buttonNeutral: 'OK',
    }

    // request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
    //     if(result === 'granted'){
    //         takePhotoFromCamera()
    //     }else{
    //         console.log('Deo co quyen mo camera')
    //     }
    // })
}

const takePhotoFromCamera = (onAccess: (uri: string) => void) => {
    const options: CameraOptions = {
        mediaType: 'photo',
        saveToPhotos: true
    };

    launchImageLibrary(options, (result) => {
        console.log(result);
        const assets = result.assets ?? []
        const { uri } = assets[0]
        console.log(uri)
        onAccess(uri ?? "")
    })
};

export default function Camera() {
    const [source, setSource] = useState<{uri: string}>(Images.placeHolder)

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ width: '100%', height: '50%' }}>
                <Image style={{width: '100%', height: '100%'}} source={source}></Image>
            </View>

            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    const onAccess = () => {
                        takePhotoFromCamera((uri) => {
                            if(!uri)
                                setSource({uri: uri})
                        })
                    };
                    const onDenied = () => { };

                    checkCamera(onAccess, onDenied)
                }}
            >
                <Image
                    style={{
                        width: 128,
                        height: 128,
                    }}
                    source={Icons.instagram}
                />

            </TouchableOpacity>
        </View>
    )
}