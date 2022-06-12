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

}

export default function Lista(props: ListaProps){
	const maxLengthtext = 200;
	return(
		<ListaStyled> {/* lista braba */}
			{props.pets.map(pet => (
				<ItemList key={pet.id}>  {/* catioro 1 */}
					<Image src={pet.image} alt={pet.name}/>
					<Info>
						<Name>{pet.name}</Name>
						<Description>
							{TextService.limitTextLength(pet.history, maxLengthtext)}
						</Description>
						<Button
							variant={'contained'} 
							fullWidth={true}
						>Adotar {pet.name}!</Button>
						</Info>
				</ItemList>
			))}
		</ListaStyled>
	)
}