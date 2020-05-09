import React from 'react';
import { Text,StyleSheet, View, Alert } from 'react-native';

import ContatoInput from '../components/ContatoInput';
import Cartao from '../components/Cartao';
import cores from '../cores/cores';

export default function EditarContato(props) {

    const atualizarContato = (novoContato) => {
        Alert.alert(
            'Atualizar Contato',
            'Deseja mesmo atualizar esse contato?',
            [{
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                style: 'default',
                onPress: () => {
                    props.contatos[props.contatos.findIndex(contato => contato.key === novoContato.key.toString())] = novoContato;
                    props.onAtualizarContato(props.contatos);
                }
            }]
        );
    }

    return (
        <View style={styles.contatoView}>
         
         <View style ={styles.Cabecalho}>
               <Text style ={styles.texto} > Contato</Text>
             </View>
            <Cartao>
                <ContatoInput contatoAtual={props.contatoSelecionado} onAtualizarContato={atualizarContato} />
            </Cartao>
        </View>
    );
}

const styles = StyleSheet.create({
    contatoView:{
        padding:20,
        marginBottom:5,
    },
    texto:{
        fontSize:20,

    },
    Cabecalho:{
    width: '100%',
    height: 95,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
    },
    
});