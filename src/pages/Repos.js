import React from "react";
import Nav from "../components/NavBar";
import Form from "../components/Form";
import RepInfo from "../components/RepInfo";

export default class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    this.setState({
      user: event.target.input.value
    });
    event.target.input.value = "";
  }

  render() {
    return (
      <div>
        <Nav />
        <Form submitHandler={this.submitHandler} />
        <RepInfo url={"https://api.github.com/users/" + this.user + "/repos"} />
      </div>
    );
  }
}
