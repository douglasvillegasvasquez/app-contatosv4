import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Contatos from './telas/Contatos';
import EditarContato from './telas/EditarContato';
import ContatoInput from './components/ContatoInput';
export default function App() {
	const [telaAtual, setTelaAtual] = useState();
//* novoContato ADD */
  const novoContato = () => {
    setTelaAtual(
      <ContatoInput onAdicionarContato={adicionarContato} />)
  }
 /**/ 
	const abrirEditarContato = (contatos, contatoSelecionado) => {
		setTelaAtual(<EditarContato contatos={contatos} contatoSelecionado={contatoSelecionado} onAtualizarContato={atualizarContatos} />);
	};

	const atualizarContatos = (contatosAtualizados) => {
		setTelaAtual(<Contatos onAbrirAtualizar={abrirEditarContato} listaContatos={contatosAtualizados} />);
	};

	if (!telaAtual)
		setTelaAtual(<Contatos onAbrirAtualizar={abrirEditarContato} listaContatos={[]} />);

	return (
		<View style={styles.telaPrincipalView}>
			{telaAtual}
		</View>
	);
}

const styles = StyleSheet.create({
	telaPrincipalView: {
		paddingLeft:5,
    paddingRight:5,
    paddingBottom:150,
    paddingTop:40
	}
});