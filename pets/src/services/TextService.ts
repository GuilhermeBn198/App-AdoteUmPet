export const TextService = {
	limitTextLength(text: string, maxLength: number): string {
		var maxLength = 80	;
		if(text.length > maxLength){
			return text;
		}
		return text.slice(0, maxLength) + '...';
	}
}