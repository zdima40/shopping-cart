import React from "react";
import { connect } from "react-redux";

import { searchProduct } from "actions";

import { StyledForm, StyledTextField } from "styles/SearchContainer";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchProduct(this.state.value);
  }

  render() {
    return (
      <span>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledTextField
            id="search"
            label="Search field"
            type="search"
            margin="normal"
            onChange={this.handleChange}
          />
        </StyledForm>
      </span>
    );
  }
}

const mapDispatchToProps = {
  searchProduct
};

export default connect(null, mapDispatchToProps)(Search);
