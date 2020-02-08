import React from "react";

export default class RepInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      repos: null
    };
  }
  componentDidUpdate(postProps) {
    if (this.props !== postProps)
      fetch(this.props.url)
        .then(res => res.json())
        .then(
          result => {
            console.log(result);

            this.setState({
              isLoaded: true
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
    const { isLoaded, error } = this.state;
    if (error) {
      return <div>Something went wrong...</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      return <div>Loaded</div>;
    }
  }
}
