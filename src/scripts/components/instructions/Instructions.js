// FRAMEWORK
import React, { Component } from 'react';

class Instructions extends Component {
	constructor(props) {
		super(props);
	}
	rawMarkup() {
		return { __html: this.props.content };
	}
	render() {
		return (
			<div dangerouslySetInnerHTML={this.rawMarkup()} />
		);
	}

}

export default Instructions;
