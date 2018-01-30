import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router';

class Header extends Component {
    render() {
        return (
            <div className="column">
                <nav className="navbar" aria-label="dropdown navigation">
                    <NavLink
                        exact
                        activeClassName="is-active"
                        className="navbar-item"
                        to="/"
                    >
                        HOME
                    </NavLink>
                    {this.props.categories.map(cat => {
                        return (
                            <NavLink
                                exact
                                activeClassName="is-active"
                                to={'/category/' + cat.path}
                                key={cat.name}
                                className="navbar-item"
                            >
                                {cat.name.toUpperCase()}
                            </NavLink>
                        );
                    })}
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories.list
    };
}

export default withRouter(connect(mapStateToProps)(Header));
