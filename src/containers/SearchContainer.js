import React from "react";
import { connect } from "react-redux";

import TextField from "material-ui/TextField";

import { searchProduct } from "actions";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchProduct(this.state.value);
  }

  render() {
    return (
      <span>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="search"
            label="Search field"
            type="search"
            margin="normal"
            onChange={this.handleChange}
          />
        </form>
      </span>
    );
  }
}

const mapDispatchToProps = {
  searchProduct
};

export default connect(null, mapDispatchToProps)(Search);
