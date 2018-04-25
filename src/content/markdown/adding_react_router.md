## Adding React Router

Building upon the "Basic Setup Example", we:
1. Run ``npm i --save react-router``, this should also install ``react-router-dom``.
- Add ``import { BrowserRouter, Route } from 'react-router-dom';`` to the ``Root.js`` file.
- Remove ``<App />`` from the ``<Provider>`` wrapper and now use the following:

		<BrowserRouter>
			<Route path='/' component={App} />
		</BrowserRouter>

- The ``<Route path='/' component={App} />`` now loads the ``<App />`` when ever the user visits the ``path='/'``.
- The ``BrowserRouter`` seems to replace ``<Router history={browserHistory}>`` which was used to remove the hashes from the URL, this is supported back to IE10+. All modern browsers can handle this. At the time of writing the react-router docs do not detail this, but the internet seems to know better.

