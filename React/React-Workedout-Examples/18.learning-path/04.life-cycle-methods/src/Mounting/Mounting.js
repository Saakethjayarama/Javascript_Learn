import React, { Component } from "react";
import Child from "./Child";

export class Mounting extends Component {
  // use rconst to generate constructor
  constructor(props) {
    /**
     * * This is called whenever a component is created
     * * Used to initialize state or bind event handler
     * ! Do not make http requests or call to API in constructor
     */
    super(props);
    console.log("Entered constructor from Mounting.js");
    this.state = {
      /**
       * * This is the only place where you can directly overwrite state everywhere else use this.setSate({obj})
       */
    };
  }

  static getDerivedStateFromProps(props, state) {
    /**
     * * Used when state of the method depends on the props passed over time
     * * Should return the object that represent new state new state on change in props
     * ! Should not make ajax call in this
     * ! Since this is a static method usage of this.state and this.props is prohibited
     */
    console.log("Entered getDerivedStateFromProps from Mounting.js");
    return {};
  }

  render() {
    /**
     * * Required method in class component
     * ! Changing state, makin ajax call, interacting with DOM is prohibited here
     * * Just after executing parent's lifecycle methods children life cycle methods are executed
     */
    console.log("Entered render method from Mounting.js");
    return (
      <div>
        Mounting.js
        <Child />
      </div>
    );
  }

  componentDidMount() {
    /**
     * * This method is called only once in the lifecycle method of a component.
     * * Invoked immediately after component and all its children component have been rendered to the DOM.
     * * Interact with DOM, Perform AJAX call..etc
     */
    console.log("Entered componentDidMount method from Mounting.js");
  }
}

export default Mounting;
