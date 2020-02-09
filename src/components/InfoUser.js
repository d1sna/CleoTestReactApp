import React from "react";

export default class InfoUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      firstLoading: true,
      isLoaded: false,
      message: null,
      login: null,
      avatarUrl: null,
      bio: null,
      htmlUrl: null,
      name: null,
      company: null,
      publicRepos: null
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url)
      fetch(this.props.url)
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              firstLoading: false,
              isLoaded: true,
              message: result.message,
              login: result.login,
              avatarUrl: result.avatar_url,
              bio: result.bio,
              htmlUrl: result.html_url,
              name: result.name,
              company: result.company,
              publicRepos: result.public_repos
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
    const {
      error,
      firstLoading,
      message,
      isLoaded,
      login,
      avatarUrl,
      bio,
      htmlUrl,
      name,
      company,
      publicRepos
    } = this.state;
    if (error) {
      return <div className="info"> Oops...something went wrong </div>;
    } else if (firstLoading) {
      return <div className="welcome">Welcome to CLEO Test React App </div>;
    } else if (!isLoaded) {
      return <div className="info"> Loading... </div>;
    } else if (message) {
      return <div className="info"> {message} </div>;
    } else {
      return (
        <div className="info">
          <p> User info: </p> <img src={avatarUrl} alt="" className="avatar" />
          <p> Login: {login} </p> <p> Name: {name} </p>{" "}
          <p> Company: {company} </p> <p> Bio: {bio} </p>{" "}
          <p>
            URL: <a href={htmlUrl}> {htmlUrl} </a>{" "}
          </p>{" "}
          <p> Public repositories: {publicRepos} </p>{" "}
        </div>
      );
    }
  }
}
