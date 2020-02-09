import React from "react";

export default class RepInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      repos: [],
      firstLoading: true,
      forSort: false,
      sortedArr: null
    };
    this.sortFunction = this.sortFunction.bind(this);
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
              message: result.message,
              firstLoading: false
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

  sortFunction() {
    const sortedArr = this.state.repos
      .slice()
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
    this.setState({ forSort: true, sortedArr: sortedArr });
  }

  render() {
    const {
      isLoaded,
      error,
      repos,
      firstLoading,
      forSort,
      sortedArr
    } = this.state;
    if (error) {
      return <div>Something went wrong...</div>;
    } else if (firstLoading) {
      return <div className="welcome">List of Repositories</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else if (repos === null || repos.length === 0 || repos[0] === undefined) {
      return (
        <div>
          User not found or repositories are empty! Pls try another one:(
        </div>
      );
    } else if (forSort) {
      return (
        <div>
          Sorted list of repositories:
          {sortedArr.map((value, index) => (
            <li key={index}>
              {value.name}({value.stargazers_count})
            </li>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          List of repositories {repos[0].owner.login} :{" "}
          <button onClick={this.sortFunction}>Sort it</button>
          {repos.map((value, index) => (
            <li key={index}>{value.name}</li>
          ))}
        </div>
      );
    }
  }
}
