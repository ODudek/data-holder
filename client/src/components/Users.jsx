import React, { Component } from 'react';
import { Button } from './Button';
import { sendUser } from 'shared/postData';
import faker from 'faker';
import { getId } from 'shared/getData';

export class Users extends Component {
	state = {
		loading: false,
	}

	postUser = async (times) => {
		if (!this.state.loading) {
			this.setState({ loading: true });
			for (let index = 0; index < times; index++) {
				const user = {
					address: {
						city: faker.address.city(),
						street: faker.address.streetName(),
						zipcode: faker.address.zipCode(),
					},
					birthDay: faker.date.between('1965-01-01', '1998-12-31'),
					company: {
						name: faker.company.companyName(),
					},
					email: faker.internet.email(),
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					phone: faker.phone.phoneNumberFormat(),
					...await getId('/users/counter'),
					username: faker.internet.userName(),
					website: faker.internet.url(),
					
				};
				await sendUser(user);
			}
			this.setState({ loading: false });
		}
	}

	postOneUser = () => this.postUser(1);

	postTenUsers = () => this.postUser(10);

	postHundredUsers = () => this.postUser(100);

	render() {
		return (
			<div className="container">
				<Button
					label="Add one user"
					loading={this.state.loading}
					clickHandler={this.postOneUser}
				/>
				<Button
					label="Add ten users"
					loading={this.state.loading}
					clickHandler={this.postTenUsers}
				/>
				<Button
					label="Add hundred users"
					loading={this.state.loading}
					clickHandler={this.postHundredUsers}
				/>
			</div>
		);
	}
}