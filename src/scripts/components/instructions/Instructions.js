import React from 'React';

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

export default Instructions;
