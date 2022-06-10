import { TitleStyled, SubtitleStyled } from './Title.style';

interface TitleProps{
	title : string;
	subtitle?: string | JSX.Element;
}

	export default function Title(props: TitleProps){
		return (
			<> {/* esse elemento vazio(FRAGMENT) faz parte do REACT e a gnt usa ele quando não queremos passar elementos sem nenhum CONTAINER para atrapalhar o tamanho deles na aplicação */}
			<TitleStyled>{props.title}</TitleStyled>
				<SubtitleStyled>{props.subtitle}</SubtitleStyled>
			</>
		)
	}