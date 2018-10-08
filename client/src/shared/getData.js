import axios from 'axios';

const API_URL = 'http://localhost:3100';

export const getId = async (path) => {
	let resp = null;
	await axios
		.get(`${API_URL}${path}`, {
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(res => resp = res)
		.catch(error => console.error(error));
	if (resp !== null) {
		return resp.data;
	}
};
