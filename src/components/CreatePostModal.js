import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPost} from '../actions/index';
import CategoryDropDown from './CategoryDropDown';

class CreatePostModal extends Component {
    state = {
        title: '',
        body: '',
        category: ''
    };

    addPost = () => {
        const {body, title,category} = this.state
        if (
            body.length === 0 ||
            title.length === 0 ||
            category.length === 0
        ) {
            alert('Title, body and category fields are required');
        } else {
            this.props.addPost({
                author: 'author',
                body: body,
                timestamp: Math.floor(Date.now() / 1000),
                id: Math.random()
                    .toString(36)
                    .substr(2, 10),
                title: title,
                category: category
            });
            this.props.onClose();
        }
    };

    render() {
        return (
            <div className="modal is-active">
                <div onClick={this.props.onClose} className="modal-background"/>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Add New Post</p>
                        <button
                            onClick={this.props.onClose}
                            className="delete"
                            aria-label="close"
                        />
                    </header>
                    <section className="modal-card-body">
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input
                                    onChange={event => {
                                        this.setState({title: event.target.value});
                                    }}
                                    className="input"
                                    type="text"
                                    placeholder="Title"
                                />
                            </div>
                            <div className="field">
                                <label className="label">Body</label>
                                <div className="control">
                                  <textarea
                                      onChange={event => {
                                          this.setState({body: event.target.value});
                                      }}
                                      className="textarea"
                                      placeholder="Write something..."
                                  />
                                </div>
                            </div>

                            <CategoryDropDown
                                onChange={event => {
                                    this.setState({category: event.target.value});
                                }}
                            />
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <button onClick={this.addPost} className="button is-success">
                            Save
                        </button>
                        <button onClick={this.props.onClose} className="button">
                            Cancel
                        </button>
                    </footer>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        //
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: post => dispatch(addPost(post))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostModal);
