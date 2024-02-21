import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user">
        <div>Count : {count}</div>
        <div>Count2 : {count2}</div>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click Me
        </button>
        <div>Name:{name}</div>
        <div>Job: Developer</div>
      </div>
    );
  }
}

export default User;
