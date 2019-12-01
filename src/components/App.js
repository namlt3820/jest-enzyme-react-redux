import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
    renderButton() {
        return this.props.auth ? (
            <button
                onClick={() => {
                    this.props.changeAuth(false);
                }}
            >
                Sign Out
            </button>
        ) : (
            <button
                onClick={() => {
                    this.props.changeAuth(true);
                }}
            >
                Sign In
            </button>
        );
    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post a comment</Link>
                </li>
                <li>{this.renderButton()}</li>
            </ul>
        );
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/" component={CommentList} exact />
                <Route path="/post" component={CommentBox} />
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, actions)(App);
