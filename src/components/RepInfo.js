import React from "react";
import CheckBox from "./CheckBox";

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
              firstLoading: false,
              forSort: false
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
        <div className="info">
          Sorted (by stargazers_count) list of repositories:
          {sortedArr.map((value, index) => (
            <CheckBox
              key={index}
              label={value.name + " " + value.stargazers_count}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="info">
          <button onClick={this.sortFunction}>Sort it</button>
          <p>List of repositories ({repos[0].owner.login}) :</p>
          {repos.map((value, index) => (
            <p key={index}>{value.name}</p>
          ))}
        </div>
      );
    }
  }
}
