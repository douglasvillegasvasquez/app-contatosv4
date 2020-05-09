import React, { useState, Component } from 'react';
import { Button,StyleSheet, Text, View,TouchableOpacity,TouchableHighlight, FlatList, Alert,Modal } from 'react-native';

import ContatoInput from '../components/ContatoInput';
import ContatoItem from '../components/ContatoItem';
import Cartao from '../components/Cartao';
import cores from '../cores/cores';

export default function Contato(props) {
    const [contatos, setContatos] = useState(props.listaContatos);
    const [contadorContatos, setContadorContatos] = useState(props.listaContatos.length);
    
    const adicionarContato = (contatoNome, contatoTelefone) => {
        setContatos((contatos) => {
            contatos = [...contatos, { key: contadorContatos.toString(), value: { contatoNome, contatoTelefone } }];
            setContadorContatos(contadorContatos + 1);
            return contatos;
        });
    }
    
        const [modalVisible, setModalVisible] = useState(false);
        
      

    const deletarContato = (key) => {
        Alert.alert(
            'Deletar Contato',
            'Deseja mesmo deletar esse contato?',
            [{
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                style: 'default',
                onPress: () => {
                    setContatos(contatos => {
                        return contatos.filter(contato => {
                            return contato.key !== key;
                        });
                    });
                }
            }]
        );
    }

    return (
        <View style={styles.telaPrincipalView}>
        
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              
              <View style={styles.centerView}>
                
              <TouchableHighlight
                    style={{ ...styles.openButton2, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle2}>  x  </Text>
                  </TouchableHighlight>
                  </View>
                <Cartao style={styles.contatoInput}>
                <ContatoInput onAdicionarContato={adicionarContato} />
            </Cartao>

                  
              
            </Modal>
            
            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={styles.textStyle}>+</Text>
            </TouchableHighlight>
            
          </View>     
        
           
<TouchableOpacity>
            <Cartao style={styles.contatos}>
                <Text style={styles.ListaHeader}>Meus Contatos</Text>
                <FlatList
                    style={styles.FlatListStyle}
                    data={contatos}
                    renderItem={
                        contato => (
                            <Cartao style={styles.itemView}>
                            <ContatoItem contato={contato} onDelete={deletarContato} onAbrirAtualizar={() => props.onAbrirAtualizar(contatos, contato)} />
                            </Cartao>
                        )
                    }
                />
            </Cartao>
            </TouchableOpacity>            
        </View>
    );
}

const styles = StyleSheet.create({
    telaPrincipalView: {
        
        paddingBottom: 0,
        paddingTop: 50,
        
    },
    itemView:{
        
        padding:8

      },
    ListaHeader: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 20
    },
    FlatListStyle: {
        marginTop: 8
    },
    contatos: {
        marginTop:10,
        backgroundColor: cores.backgroundCartaoPrimary,
        
    },
    contatoInput: {
        
        flex:1,
        backgroundColor: cores.backgroundCartaoPrimary
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:-33,
        marginBottom:25,
        marginRight:15,
        alignItems: "flex-end",
      },
      centerView: {
        
        justifyContent: "center",
        alignItems: "center",
        marginTop:2,
        marginBottom:25,
        marginRight:19,
        alignItems: "flex-end",
      },
      openButton: {
       
        backgroundColor: "#ADF500",
        borderRadius: 6,
        padding: 22,
        elevation: 4,
        margin:6,
        
        justifyContent:'center',
        alignContent:'center'
        
      },
      openButton2: {
       
        backgroundColor: "#ADF500",
        borderRadius: 6,
        padding: 10,
        elevation: 4,
        margin:8,
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
        
      },
      textStyle: {
        fontSize:19,
        color: 'white',
        fontWeight: "bold",
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        width:'100%',
        
      },
      textStyle2: {
        fontSize:19,
        color: 'white',
        fontWeight: "bold",
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        width: '100%',
        height:35
      },
      modalText: {
        marginBottom: 10,
        textAlign: "center"
      }
});