import React from "react";

const withCount = (Component) => {
  class WithCount extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handleClick = () => {
      this.setState((state) => {
        return {
          ...state,
          count: state.count + 1,
        };
      });
    };

    render() {
      return (
        <Component
          {...this.props}
          count={this.state.count}
          handleClick={this.handleClick}
        />
      );
    }
  }
  return WithCount;
};

export default withCount;
