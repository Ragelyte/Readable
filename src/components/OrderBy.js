import React, {Component} from 'react';
import {orderByTimestamp, orderByVotes} from '../actions/index';
import {connect} from 'react-redux';

class OrderBy extends Component {
    state = {
        dropDownMenuOpen: false
    };

    openDropDownMenu = () => {
        this.setState({
            dropDownMenuOpen: !this.state.dropDownMenuOpen
        });
    };

    orderByVoteScore = () => {
        this.props.orderByVotes();
        this.openDropDownMenu();
    };

    orderByTimestamp = () => {
        this.props.orderByTimestamp();
        this.openDropDownMenu();
    };

    render() {
        return (
            <div>
                <div className="column is-pulled-right">
                    <div
                        className={`dropdown ${this.state.dropDownMenuOpen && 'is-active'}`}
                    >
                        <div className="dropdown-trigger">
                            <button
                                onClick={this.openDropDownMenu}
                                className="button"
                                aria-haspopup="true"
                                aria-controls="dropdown-menu"
                            >
                                <span>Order by</span>
                                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"/>
                </span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <a onClick={this.orderByVoteScore} className="dropdown-item">
                                    vote score
                                </a>
                                <a onClick={this.orderByTimestamp} className="dropdown-item">
                                    timestamp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="is-clearfix"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        orderByVotes: () => dispatch(orderByVotes()),
        orderByTimestamp: () => dispatch(orderByTimestamp())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderBy);
