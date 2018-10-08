import React, { Component } from 'react';
import { Button } from './Button';
import { sendPhoto } from 'shared/postData';
import { getId } from 'shared/getData';
import faker from 'faker';

export class Photos extends Component {
	state = {
		loading: false,
	}

	postPhoto = async (times) => {
		if (!this.state.loading) {
			this.setState({ loading: true });
			for (let index = 0; index < times; index++) {
				const photo = {
					...await getId('/photos/counter'),					
					photoUrl: faker.image.image(),
					thumbUrl: faker.image.avatar(),
					title: faker.lorem.sentence(),
				};
				await sendPhoto(photo);
			}
			this.setState({ loading: false });
		}
	}

	postOnePhoto = () => this.postPhoto(1);

	postTenPhotos = () => this.postPhoto(10);

	postHundredPhotos = () => this.postPhoto(100);

	render() {
		return (
			<div className="container">
				<Button
					label="Add one photo"
					loading={this.state.loading}
					clickHandler={this.postOnePhoto}
				/>
				<Button
					label="Add ten photos"
					loading={this.state.loading}
					clickHandler={this.postTenPhotos}
				/>
				<Button
					label="Add hundred photos"
					loading={this.state.loading}
					clickHandler={this.postHundredPhotos}
				/>
			</div>
		);
	}
}
