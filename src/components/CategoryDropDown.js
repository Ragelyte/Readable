import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

class CategoryDropDown extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event)
        this.setState({value: event.target.value});
    }



    render() {
        return (
            <div className="control">
                <div className="select">
                    <select placeholder={"ihghg"} onChange={this.handleChange}>
                        <option value="">Select Category</option>
                        {this.props.categories.map(category => (
                            <option  key={category.name} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                </div>
            </div>

        )

    }

}

CategoryDropDown.propTypes = {
    onChange: PropTypes.func.isRequired
}

function mapStateToProps(state) {

    return {
        categories: state.categories.list
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryDropDown);