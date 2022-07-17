import {Button} from "@mui/material"
import {
	ListaStyled, 
	ItemList, 
	Image, 
	Info, 
	Name, 
	Description
}	from './List.style'
import {Pet} from '../../../data/@types/Pet'
import { TextService } from '../../../services/TextService'

interface ListaProps{
	pets: Pet[];
	onSelect: (pet: Pet) => void;
}

export default function Lista(props: ListaProps){
	const maxLengthtext = 200;
	return(
		<ListaStyled> {/* lista braba */}
			{props.pets.map(pet => (
				<ItemList key={pet.id}>  {/* catioro 1 */}
					<Image src={pet.foto} alt={pet.nome}/>
					<Info>
						<Name>{pet.nome}</Name>
						<Description>
							{TextService.limitTextLength(pet.historia, maxLengthtext)}
						</Description>
						<Button
							variant={'contained'} 
							fullWidth
							onClick = {() => props.onSelect(pet)}
						>
							Adotar {pet.nome}!
						</Button>
						</Info>
				</ItemList>
			))}
		</ListaStyled>
	)
}