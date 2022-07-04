import { Link  } from '@mui/material';
import NextLink from 'next/link';
import {
	HeaderContainer,
	Logo,
	LinksContainer
} from './HeaderAdmin.style'

export default function HeaderAdmin(){
	return (
		<HeaderContainer>
			<div>
				<Logo src='\images\logo.svg' alt='Adote um Pet'/>
				<LinksContainer>
				<Link>Cadastrar Pet</Link>
				<Link>Rekatório de Adoção</Link></LinksContainer>
			</div> 
		</HeaderContainer>
	)
}