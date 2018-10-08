import React, { Component } from 'react';
import { Button } from './Button';
import { sendPost } from 'shared/postData';
import { getId } from 'shared/getData';
import faker from 'faker';

export class Posts extends Component {
	state = {
		loading: false,
	}

	postPost = async (times) => {
		if (!this.state.loading) {
			this.setState({ loading: true });
			for (let index = 0; index < times; index++) {
				const post = {
					content: faker.lorem.sentence(),
					...await getId('/posts/counter'),
					title: faker.lorem.paragraphs(),
					...await getId('/users/counter'),
				};
				await sendPost(post);
			}
			this.setState({ loading: false });
		}
	}

	postOnePost = () => this.postPost(1);

	postTenPosts = () => this.postPost(10);

	postHundredPosts = () => this.postPost(100);

	render() {
		return (
			<div className="container">
				<Button
					label="Add one post"
					loading={this.state.loading}
					clickHandler={this.postOnePost}
				/>
				<Button
					label="Add ten posts"
					loading={this.state.loading}
					clickHandler={this.postTenPosts}
				/>
				<Button
					label="Add hundred posts"
					loading={this.state.loading}
					clickHandler={this.postHundredPosts}
				/>
			</div>
		);
	}
}
