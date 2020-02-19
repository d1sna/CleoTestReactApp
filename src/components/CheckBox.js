import React from "react";

const Checkbox = props => <input type="checkbox" {...props} />;

export default class CheckBox extends React.Component {
  state = { checked: false };
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  render() {
    return (
      <div>
        <label>
          <span>{this.props.label}</span>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
        </label>
      </div>
    );
  }
}
