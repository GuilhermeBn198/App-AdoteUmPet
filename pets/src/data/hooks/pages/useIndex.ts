import { useState } from 'react'


export function useIndex(){
	const [listaPets, setListaPets] = useState(
		[
			{
			  id: 1,
			  name: "megatron",
			  history: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
			  image: "https://th.bing.com/th/id/R.d45e0495385b96eab3fa1b501b2b6633?rik=0kx2r2ZssI1WQQ&pid=ImgRaw&r=0"
			}, 
			{
			  id: 2,
			  name: "optimus prime",
			  history: 'lorem ipsum dolore  sit amet',
			  image: "https://th.bing.com/th/id/R.224e2aaa26c48c5bf1f1b9ec000728fc?rik=3rjvpjcWX1FDpA&riu=http%3a%2f%2f3.bp.blogspot.com%2f--LcjwhvZ5EA%2fTpSaZzdV-rI%2fAAAAAAAAACk%2fuZngFDtwnsg%2fs1600%2fJoshNizzi_TF3_21.jpg&ehk=joV2vCjBVyTE25lzyTRoXfbOn0PdYkpCE6hcbGB4Lps%3d&risl=&pid=ImgRaw&r=0"
			}
		  ]
	)
	return {
		listaPets
	};
}