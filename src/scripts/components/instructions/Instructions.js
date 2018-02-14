import React, { Component } from 'react';
import content from '../../../content/markdown/basic_setup.md';

class Instructions extends Component {
	constructor(props) {
		super(props);
	}
	rawMarkup() {
		return { __html: content };
	}
	render() {
		return (
			<div dangerouslySetInnerHTML={this.rawMarkup()} />
		);
	}

}

export default Instructions;
