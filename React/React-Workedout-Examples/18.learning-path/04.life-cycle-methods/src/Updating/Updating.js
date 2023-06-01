import React, { Component } from "react";

export class Updating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: 1,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Entered getDerivedStateFromProps method from Updating.js");

    /**
     * * Should either return null or state
     * * This method is invoded on every re-render
     * * This method is used whenever the state of component depends on props
     * ! Should not cause any side effects. (i.e, Ajax Requests)
     */

    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Entered shouldComponentUpdate method from Updating.js");

    /**
     * * Should Either return true or false
     * * By default Component re-renders on props change. That behaviour is managed using this method
     * * Since this isn't a static method it has access to this.state and this.props so that comparision can be done to decide whether to rerender or not
     * * Usually used for performance optimization
     */
    return true;
  }

  render() {
    console.log("Entered Render method from Updating.js");

    return <div>Updating.js</div>;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Entered getSnapshotBeforeUpdate method from Updating.js");

    /**
     * * Called right before the changes in the virtualDOM are to be reflected in the DOM
     * * Used to capture some information from the DOM
     * * Should return either null or some value. The returned value is passed as third param to the below method
     */
    return "Coders club";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Entered getSnapshotBeforeUpdate method from Updating.js");
    console.log("Snapshot", snapshot);

    /**
     * * The value returned by getSnapshotBeforeUpdate is passed as snapshot to this method
     * * These methods are called after render method finishing its re-render cycles.
     * ? Can cause sideEffects (i.e, AJAX calls)
     * * Since this method is non static method it has access to this. So that we can compare prevState to current state before making AJAX calls or any manipulation
     *
     */
  }
}

export default Updating;
