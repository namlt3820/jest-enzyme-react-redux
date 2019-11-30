import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
    renderComments = () =>
        this.props.comments.map((comment, idx) => <li key={idx}>{comment}</li>);

    render() {
        return (
            <div>
                <ul>{this.renderComments()}</ul>
            </div>
        );
    }
}

const mapStateToProps = ({ comments }) => ({ comments });
export default connect(mapStateToProps)(CommentList);
