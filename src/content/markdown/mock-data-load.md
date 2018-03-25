## Mock Data Load


### How it works
- We are using the data returned from the API call to populate the part of the state that is consumed by the ``<CounterList />`` component.
- We want to make the call to the API within a life-cycle hook. As a result we converted the component from a stateless functional component into a class based one.
- We fetch the data within the ``componentDidMount`` life-cycle hook.
- Once the data is returned to us we pass it into the ``receiveCounters`` method which is assigned on the ``mapDispatchToProps``.
- This method in turn dispatches the ``receiveCounters`` action, into which we pass the payload.
- The action is picked up in the reducer and the payload is merged into the current state of the counter collection.
- When the state is updated the component re-renders and the new state is passed into the ``<CounterList  {...this.props} />`` via the props.
- Now that we render the ``CounterList`` within the ``CounterListContainer`` Class. Rather than connecting the ``CounterList`` to the ``CounterListContainer``, this time we connect the ``CounterListContainer`` to itself. Thus making the dispatch and state avilible to the props of the ``CounterListContainer``.
- The props are then passed ``CounterList`` via the spread opperator inside the render method on the class.
