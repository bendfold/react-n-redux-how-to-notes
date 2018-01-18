const counter = (state = 0, action) => {

	console.log('action ', action);

	switch (action.type) {
		case 'INCREMENT_COUNTER':
			return state += 1;
		case 'DECREMENT_COUNTER':
			return (state > 0) ? state -= 1 : state;
		default:
			return state;
	}
}

export default counter;
