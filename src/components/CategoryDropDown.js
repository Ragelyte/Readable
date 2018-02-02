import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CategoryDropdown extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  render() {
    return (
      <div className="control">
        <div className="select">
          <select onChange={this.handleChange}>
            <option value="">Select Category</option>
            {this.props.categories.map(category => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

CategoryDropdown.propTypes = {
  onChange: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    categories: state.categories.list
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDropdown);
