import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Titulo = (props) => {

return(
    <View style = { estilos.Titulo}>
    <Text>{props.titulo}</Text>
    </View>
);

};
const estilos = StyleSheet.create({
    Titulo:{
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: '#1E90FF',
        marginLeft:-12,
        marginRight:-12,
        marginTop:-20,
        marginBottom:10,        
        borderRadius: 3
       
    },
    Inicial:{
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#000033',
        height: 10,
        width:10,
        marginTop:2,
        marginBottom:10,        
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
export default Titulo;