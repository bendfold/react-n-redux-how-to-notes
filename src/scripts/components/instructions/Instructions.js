import React, { Component } from 'react';
import ReactRemarkable from 'react-remarkable';
import content from '../../../content/markdown/test.md';
import marked from "marked";




{/*
const Instructions = () => (
	<div className="instructions">
		<h2>Basic Set Up</h2>
		<p>
			The very bare minimum directory and file set up you will need for a simple React and Redux application is as follows.
		</p>
		<dl>
			<dt>NPM Packages:</dt>
			<dd>React</dd>
			<dd>Redux</dd>
		</dl>
		<dl>
			<dt>Component Parts:</dt>
			<dd>React Component / Components</dd>
			<dd>Redux - STORE - Contains:
				<ul>
					<li>Application STATE.</li>
					<li>DISPATCH method to allow components to communicate with the STORE, via ACTIONS &gt; REDUCERS.</li>
					<li>SUBSCRIBE method to allow components to listen for changes to the STATE, which lives in the STORE.</li>
				</ul>
			</dd>
			<dd>Redux - ACTION / ACTIONS</dd>
			<dd>Redux - REDUCER / REDUCERS</dd>
		</dl>
		<h3>How it works</h3>
		<h4>Initialisation:</h4>
		<ul>
			<li>The application creates an initial STORE, using Redux's <code>createStore</code> method.</li>
			<li>The STORE takes in a <code>rootReducer</code> object</li>
			<li>The rootReducer object, is an object which contains all of the app's REDUCERS in one place. This is created using the <code>combineReducers()</code> method from Redux.</li>
			<li>The inidividual REDUCERS take in an initial STATE for the components to use.</li>
		</ul>
		<h4>Data Flow:</h4>
		<ul>
			<li>The user interacts with an <code>eventHandler</code> on a component.</li>
			<li>The <code>eventHandler</code> DISPATCHES an ACTION using the <code>store.dispatch</code> method.</li>
			<li>When the dispatch is fired, the REDUCERS are run and if the ACTION passed into the REDUCER matches, then the REDUCER runs it's code against the STATE and the STORE is updated.</li>
			<li>The render that is subscribed to the store changes will fire off and the application will get the new state.</li>
		</ul>

		<h3>Things to note</h3>
		<ul>
			<li>The name of the prop on the state you are working with is defined in the reducer. In this case count. When you try to access this prop from within a component you must use the same name as the reduce it is tied to.</li>
			<li>The props are availible to all the components via <code>context</code> the <code>Provider</code> element.</li>
			<li>To access this data deep within the component heirachy, we need use <code>conect</code> in combination with <code>mapStateToProps</code> and <code>mapDispatchToProps</code> to hook the context up to the components</li>
			<li>The <code>connect</code> function generates a wrapper component that subscribes to the store. When an action is dispatched, the wrapper component's callback is notified. It then runs your mapState function, and shallow-compares the result object from this time vs the result object from last time. If the results are different, then it passes the results to your "real" component" as props.</li>
		</ul>

		<h3>Folder Structure</h3>
		<ul className="file-list-lvl-00">
			<li>+-- index.html</li>
			<li>
				<p className="directory">+-- /scripts</p>
				<ul className="file-list-lvl-01">
					<li>
						<p className="directory">+-- /components</p>
						<ul className="file-list-lvl-02">
							<li>
								<span className="file-list-pipe">|</span>+-- App.js
							</li>
						</ul>
					</li>
					<li>
						<p className="directory">+-- /actions</p>
						<ul className="file-list-lvl-02">
							<li>
								<span className="file-list-pipe">|</span>+-- index.js
							</li>
						</ul>
					</li>
					<li>
						<p className="directory">+-- /reducers</p>
						<ul className="file-list-lvl-02">
							<li>
								<span className="file-list-pipe">|</span>+-- index.js
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
);

*/}

// const Instructions = () => {

// 	console.log('content ', content  );

// 	return <ReactRemarkable source='# Boss mate!'></ReactRemarkable>;
// };

class Instructions extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		// import content from '../../../content/markdown/test.md';

		fetch(content)
			.then(response => {
				return response.text()
			})
			.then(text => {
				this.setState({
					markdown: marked(text)
				})
			});
	}

	render() {
		return <h1>TODO</h1>;
	}

}



export default Instructions;
