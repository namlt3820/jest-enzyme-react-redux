import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.shoudlNavigateAway();
        }

        componentDidUpdate() {
            this.shoudlNavigateAway();
        }

        shoudlNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props}></ChildComponent>;
        }
    }

    const mapStateToProps = ({ auth }) => ({ auth });
    return connect(mapStateToProps)(ComposedComponent);
};
