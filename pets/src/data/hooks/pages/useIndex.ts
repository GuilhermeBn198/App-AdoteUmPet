import { useState, useEffect } from 'react'
import { Pet } from '../../@types/Pet'
import { ApiService } from '../../../services/ApiService'

export function useIndex(){
	const [listaPets, setListaPets] = useState<Pet[]>([]),
		[petSelecionado, setPetSelecionado] = useState<Pet | null> (null),
		[email, setEmail] = useState(''),
		[valor, setValor] = useState(''),
		[mensagem, setMensagem] = useState('');

	useEffect(() => { //função usada para renderizar elementos após o carregamento da página
		ApiService.get('/pets')
		.then((resposta) => {
			setListaPets(resposta.data)
		})
	}, [])
	
	function adotar(){

	}
	return {
		listaPets,
		petSelecionado,
		setPetSelecionado,
		email,
		setEmail,
		valor,
		setValor,
		mensagem,
		setMensagem,
		adotar
	};
}