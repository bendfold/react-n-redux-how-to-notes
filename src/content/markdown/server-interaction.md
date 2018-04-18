1. Update API to have ADD / REMOVE calls
- Update actions to make addCounter a thunk
	- Call the API endpoint & wait on response
	- THEN
		- dispatch action - {type: ADD_COUNTER_SUCESS, payload}
- Update reducers to handle ADD_COUNTER_SUCESS and add the payload to the counterCollection for this view.

### How?



### What changed?


