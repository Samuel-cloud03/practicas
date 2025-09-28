import { useContext, useEffect, useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { UserContext } from '../context/userContext';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isFocused1, setIsFocused1] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    // const { setUser } = useContext(UserContext);
    const navigation = useNavigation();
    
    
    // const heandleLogin = () => {
        //ANTES DE CLASE 7
        // if(!username || !password){
        //     alert("Completa todos los campos");
        //     return;
        // }
        // setUser({username});
        // navigation.replace('Main');
    // }
        //Verificar si hay token
    useEffect(() =>{
            const checkToken = async () => {
                const token = await AsyncStorage.getItem('token');
                if(token){
                    navigation.replace('Main');
                }
            };
            checkToken();
    }, []);
    const heandleLogin = async() =>{
        if(username && password){
            await AsyncStorage.setItem('user', username);
            await AsyncStorage.setItem('token', 'fake.token-12345');
            navigation.replace('Main');
        }else{
            alert("Debe ingresar usuario y contraseña");
        }
        setUser({username});
        navigation.replace('Main');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subtitle}>Identifíquese para continuar</Text>

            <TextInput style={[styles.input, {
                borderWidth: isFocused1 ? 3 : 1
            }]}
            onChangeText={setUsername}
            value={username}
            placeholder="Correo electrónico"
            onFocus={() => setIsFocused1(true)}
            onBlur={() => setIsFocused1(false)}
            />

           <TextInput style={[styles.input, {
                borderWidth: isFocused2 ? 3 : 1
            }]}
            onChangeText={setPassword}
            value={password}
            placeholder="Contraseña"
            secureTextEntry
            onFocus={() => setIsFocused2(true)}
            onBlur={() => setIsFocused2(false)}
            />
            
            <TouchableOpacity onPress={() => alert("Funcionalidad recuperar contraseña")}>
                <Text style={styles.link}>¿Olvidó su contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={heandleLogin}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
                Nuevo usuario?{" "}
                <Text style={styles.link} onPress={() => alert("Registro en construcción")}>
                    Regístrese aquí
                </Text>
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#eaeeff'
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#005187',
    },
    subtitle:{
        textAlign: 'center',
        marginBottom: 20,
        color: '#555'
    },
    input: {
        height: 50,
        borderColor: '#005187',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    button:{
        flexDirection: "row",
        width: '80%',
        padding: 10,
        backgroundColor: '#005187',
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    link:{
        color: '#005187',
        textAlign: 'right',
        marginRight: 10,
        marginBottom: 15
    },
    footerText:{
        textAlign: 'center',
        marginTop: 15
    }
})

export default LoginScreen;