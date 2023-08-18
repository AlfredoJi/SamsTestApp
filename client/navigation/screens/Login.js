import React, { useState } from "react";
import { Pressable, View, Text, StyleSheet, ScrollView, Button, ImageBackground } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import HomeScreen from '../screens/Home';
import sams_front from '../../assets/sams_frontv1.png';

export default function Login() {
    const onPressLogin = () => {
        <HomeScreen />
    };

    const onPressForgotPassword = () => {

    };

    const [state, setState] = useState({ email: '', password: '', })

    return (
        <ScrollView contentContainerStyle={styles.lcontainer}>
                <Text style={styles.title}>
                    Welcome
                </Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor='#003f5c'
                        onChange={text => setState({ email: text })}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor='#003f5c'
                        onChange={text => setState({ password: text })}
                    />
                </View>
                <Button
                    onPress={onPressForgotPassword}
                    title='New Member?'>
                </Button>
                <Pressable
                    onPress={onPressLogin}
                    style={styles.loginBtn}>
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    lcontainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#37297E',
        marginBottom: 40,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#ffd200',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'white'
    },
    forgot: {
        color: 'white',
        fontSize: 11,
    },
    loginBtn: {
        width: '60%',
        backgroundColor: '#37297E',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    loginText: {
        fontSize: 19,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});