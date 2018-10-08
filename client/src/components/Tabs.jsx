import React, { Component } from 'react';

export class Tabs extends Component {
	render() {
		return (
			<ul>
				<li className="list"><a href="#Users">Users</a></li>
				<li className="list"><a href="#Posts">Posts</a></li>
				<li className="list"><a href="#Photos">Photos</a></li>
			</ul>
		);
	}
}