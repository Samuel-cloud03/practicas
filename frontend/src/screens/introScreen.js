import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IntroScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Native Base</Text>
            <Text style={styles.text}>
                Native-Base es una biblioteca de componentes que permite a los 
                desarrolladores crear sistemas de diseño universal. Está construido sobre 
                React Native, lo que le permite desarrollar aplicaciones para Android, iOS y la Web.
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor: '#eaeeff'
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
        marginBottom:15,
        color: '#005187'
    },
    text:{
        fontSize:16,
        textAlign:'justify',
        marginBottom:40
    },
    button:{
        width: '80%',
        padding: 10,
        backgroundColor: '#005187',
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    }
})

export default IntroScreen;
