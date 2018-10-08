import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Users } from './Users';
import { Posts } from './Posts';
import { Photos } from './Photos';
import { Tabs } from './Tabs';

library.add(faCircleNotch);

export class App extends Component {

	state = {
		currentHash: window.location.hash.slice(1)
	}

	componentDidMount() {
		window.addEventListener('hashchange', (e) => {
			const name = window.location.hash.slice(1);
			this.setState({ currentHash: name });
		});
	}

	changeHash() {
		const hash = this.state.currentHash;
		if (hash === 'Posts') {
			return <Posts />;
		} else if (hash === 'Users') {
			return <Users />;
		} else if (hash === 'Photos') {
			return <Photos />;
		} else {
			return null;
		}
	}

	render() {
		return (
			<div className="App">
				<div className="left">
					<Tabs />
				</div>
				<div className="right">
					{this.changeHash()}
				</div>
			</div>
		);
	}
}
