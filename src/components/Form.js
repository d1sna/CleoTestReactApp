import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.submitHandler}>
        <p> Enter any GitHub login :</p>
        <input id="input" className="input" placeholder="example: gaearon" />
        <button className="button">Show</button>
      </form>
    );
  }
}
