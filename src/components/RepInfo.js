import React from "react";

export default class RepInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      repos: []
    };
  }
  componentDidUpdate(postProps) {
    if (this.props !== postProps)
      fetch(this.props.url)
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              isLoaded: true,
              repos: result,
              message: result.message
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error: error
            });
          }
        );
  }
  render() {
    const { isLoaded, error, repos } = this.state;
    if (error) {
      return <div>Something went wrong...</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else if (repos === null || repos.length === 0 || repos[0] === undefined) {
      return (
        <div>
          User not found or reposetories is empty! Pls try another one:(
        </div>
      );
    } else {
      return (
        <div>
          List of repositories {repos[0].owner.login} :
          {repos.map((value, index) => (
            <li key={index}>{value.name}</li>
          ))}
        </div>
      );
    }
  }
}
