import React, { PropsWithChildren } from 'react'
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from 'react-native'
import { Images } from '../../assets/image/image'
import { StackActions } from '@react-navigation/native'

const myEmail = 'chill@gmail.com'
const myPassword = 'leanhchieu'

const Login = ({ navigation }: { navigation: any }) => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const onLoginPress = () => {
        //if(email !== myEmail && password !== myPassword) return

        navigation.dispatch(
            StackActions.replace('Main', {
                user: 'jane',
            })
        );
    }

    return (
        <ImageBackground
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            source={Images.background2}
            resizeMode='cover'
            blurRadius={64}
            fadeDuration={0}
        >
            <StatusBar translucent backgroundColor="transparent"/>

            <View style={{ width: '100%', alignItems: 'center' }}>

                <Text style={styles.login}>Đăng nhập</Text>

                <View style={{ width: '80%', flexDirection: 'column', alignItems: 'center' }}>
                    <TextInput
                        placeholderTextColor='#DFE0E0'
                        style={styles.input} 
                        placeholder='Nhập email'
                        value={email} 
                        onChangeText={setEmail}
                        autoCapitalize='none'
                    />
                    <TextInput
                        placeholderTextColor='#DFE0E0'
                        style={styles.input} 
                        placeholder='Nhập password'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword} 
                        autoCapitalize='none'
                    />
                    <LoginButton onPress={onLoginPress}>Đăng nhập</LoginButton>
                </View>

            </View>
        </ImageBackground>
    )
}

type btnProps = PropsWithChildren<{
    onPress: () => void
}>

const LoginButton = ({ onPress, children }: btnProps) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    login: {
        width: '80%',
        fontSize: 40,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 24,
        textAlign: 'left'
    },
    input: {
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 8,
        margin: 4,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: 'white',
        borderStyle: 'solid',
        color: 'white',
        fontSize: 18,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginTop: 32,
        borderRadius: 50,
        color: 'black',
        backgroundColor: '#00606b'
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
    }
})

export default Login