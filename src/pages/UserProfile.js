import React from "react";
import Form from "../components/Form";
import InfoUser from "../components/InfoUser";
import NavBar from "../components/NavBar";

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      user: null
    };
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
        <NavBar />
        <Form submitHandler={this.submitHandler} />
        <InfoUser url={"https://api.github.com/users/" + this.state.user} />
      </div>
    );
  }
}
