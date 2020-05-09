import React, { useState } from 'react';
import { Text,StyleSheet, TextInput, View, Button } from 'react-native';

const ContatoInput = (props) => {
    const contatoKey = props.contatoAtual ? props.contatoAtual.item.key : '';
    const [contatoNome, setContatoNome] = useState(props.contatoAtual ? props.contatoAtual.item.value.contatoNome : '');
    const [contatoTelefone, setContatoTelefone] = useState(props.contatoAtual ? props.contatoAtual.item.value.contatoTelefone : '');

    const capturarContatoNome = (nome) => {
        setContatoNome(nome)
    };

    const capturarContatoTelefone = (telefone) => {
        setContatoTelefone(telefone)
    };
    let titulo;
    if (props.onAdicionarContato)
     titulo =<Text style={styles.ListaHeader}>Novo Contato</Text>
    else if (props.onAtualizarContato)
    titulo = <Text style={styles.ListaHeader}>Editar Contato</Text>
    let botaoAcao;
    if (props.onAdicionarContato)
        botaoAcao = <Button
            title="Adicionar Contato"
            onPress={() => props.onAdicionarContato(contatoNome, contatoTelefone)}
        />
    else if (props.onAtualizarContato)
        botaoAcao = <Button
            title="Atualizar Contato"
            onPress={() => props.onAtualizarContato({ value: { contatoNome, contatoTelefone }, key: contatoKey })}
        />

    return (
        <View>
            <View style={styles.contatoView}>
                {titulo}
                <TextInput
                    placeholder="Nome do Contato"
                    style={styles.contatoInputText}
                    onChangeText={capturarContatoNome}
                    value={contatoNome}
                />

                <TextInput
                    placeholder="Telefone"
                    style={styles.contatoInputText}
                    onChangeText={capturarContatoTelefone}
                    value={contatoTelefone}
                    keyboardType={"phone-pad"}
                />

                {botaoAcao}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contatoInputText:{
        marginBottom:20,
        marginTop:8,
       bottom:1,
       borderColor:'#ccc',
       borderBottomWidth:0.5,
       paddingTop:10,
       
   
       },
       contatoView:{
           padding:20,
           marginBottom:5,
       },
       ListaHeader: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 20
    },
});

export default ContatoInput;