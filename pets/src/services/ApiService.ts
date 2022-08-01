import axios from 'axios';

export const ApiService = axios.create({
	baseURL: 'https://guibnpetsback.herokuapp.com/api/',
	headers: {
		'Content-Type': 'application/json'
	}
})


