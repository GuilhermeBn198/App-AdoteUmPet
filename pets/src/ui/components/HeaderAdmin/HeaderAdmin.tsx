import { Link, Box } from '@mui/material';
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
				<NextLink passHref href={'/'}>
					<a>
						<Logo src='\images\logo.svg' alt='Adote um Pet'/>
					</a>
				
				</NextLink>
				<LinksContainer>
				<Link component={NextLink} href={'/pets/cadastro'}>
					<a>Cadastrar Pet</a>
				</Link>
				<Link component={NextLink} href={'/pets/relatorio'}>
					<a>
						Relatório{' '} 
							<Box
								component={'span'}
								sx={{display: {sm: 'initial', xs: 'none'}}}	
							>
							de Adoção
							</Box>
					</a>
				</Link>
				</LinksContainer>
			</div> 
			
		</HeaderContainer>
	)
}