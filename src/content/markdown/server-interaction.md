### What?
Building upon the work done in the [error handling](/error-handling). I added two new mock remote endpoints ``addCounter`` and ``removeCounter``, both of which return promises. This was done to simulate real server interactions.

### How?
Within the actions file I added two new **Thunks** which we can use to hit the new endpoints mentioned above. They are called ``addCounterToServer`` and ``removeCounterFromServer``. Both of these hit their relevant end-points and when the promises return they dispatch success actions. The ``ADD_COUNTER_SUCCESS`` & ``REMOVE_COUNTER_SUCCESS`` action types are handled in the multiCounter reducer. This updates the local state and the UI changes to reflect this. There is a slight delay in the UI due to the simulated server response delay. Perhaps this could be handled a different way in the UI to mask the delay but it is outside of the scope of this how to guide.
