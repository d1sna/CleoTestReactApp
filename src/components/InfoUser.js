import React from "react";

export default class InfoUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      error: null,
      isLoaded: false,
      message: null,
      login: null,
      avatar_url: null
    };
  }

  UNSAFE_componentWillReceiveProps() {
    this._asyncRequest = fetch(this.state.url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            message: result.message,
            login: result.login,
            avatar_url: result.avatar_url
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, message, isLoaded, login, avatar_url } = this.state;
    if (error) {
      return <div>Oops...something went wrong</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (message) {
      return <div>{message}</div>;
    } else {
      return (
        <div>
          <img src={avatar_url} alt="" className="avatar" />
          <p>login:{login}</p>
          <p>URL: {this.state.url}</p>
        </div>
      );
    }
  }
}
