import axios from 'axios';
const API_URL = 'http://localhost:3100';

export const sendPost = async (post) => {
	await axios
		.post(`${API_URL}/posts`, post, {
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(res => console.log(res))
		.catch(error => console.error(error.response.data.message));
};

export const sendUser = async (user) => {
	await axios
		.post(`${API_URL}/users`, user, {
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(res => console.log(res))
		.catch(error => console.error(error.response.data.message));
};

export const sendPhoto = async (photo) => {
	await axios
		.post(`${API_URL}/photos`, photo, {
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(res => console.log(res))
		.catch(error => console.error(error.response.data.message));
};
