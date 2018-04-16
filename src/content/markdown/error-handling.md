## Error Handling

### What?
Error Messaging triggered by async request failure.

### Why?
To provide the user with some notification on async request faliure.

### How?
- Off the back of the [Thunk Update](/thunks) we now have a promise returned, to which I added an error handling callback within the ``.then``.
- Within the error callback we dispatch ``FETCH_COUNTERS_FAILURE``.
- This is then picked up in the new ``errorMessage`` reducer which is added to the parent ``multiCounter`` reducer in the store within the ``multiCounter.js`` file.
- Inside of the view layer in ``MockDataCounterListContainer.js`` we check if the is an error-message via ta new selector that we also added to ``multiCounter.js``. 
- If there is an error and nothing the coutner collection then, rather than the counter list we show an error message via the new ``FetchErrorContainer.js`` component.


