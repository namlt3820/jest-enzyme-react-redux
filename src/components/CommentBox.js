import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
    state = { comment: '' };

    handleSubmit = e => {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea
                        value={this.state.comment}
                        onChange={e =>
                            this.setState({ comment: e.target.value })
                        }
                    ></textarea>
                    <div>
                        <button>Submit comment</button>
                    </div>
                </form>
                <button
                    className="fetch-comments"
                    onClick={this.props.fetchComments}
                >
                    Fetch Comments
                </button>
            </div>
        );
    }
}

export default connect(null, actions)(requireAuth(CommentBox));
