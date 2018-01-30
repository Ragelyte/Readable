import React, {Component} from 'react';
import CreatePostModal from './CreatePostModal';

class CreatePost extends Component {
    state = {
        addPostFormOpen: false
    };

    openAddPostForm = () => {
        this.setState({
            addPostFormOpen: !this.state.addPostFormOpen
        });
    };

    render() {
        return (
            <div>
                <div className="column">
                    <a onClick={this.openAddPostForm} className="button is-pulled-right">
                        Add Post
                    </a>
                </div>
                {this.state.addPostFormOpen && (
                    <CreatePostModal
                        onClose={() => {
                            this.setState({
                                addPostFormOpen: false
                            });
                        }}
                    />
                )}
            </div>
        );
    }
}

export default CreatePost;
