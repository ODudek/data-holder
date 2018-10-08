import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Button extends Component {

	render() {
		const { label, loading, clickHandler } = this.props;
		return (
			<button className={loading ? 'disabled btn' : 'btn'} onClick={clickHandler}>
				{loading && <FontAwesomeIcon className="icon" icon='circle-notch' spin  size="lg"/>}
				{label}
			</button>
		);
	}
}