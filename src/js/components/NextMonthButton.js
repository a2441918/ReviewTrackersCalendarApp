import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import {nextMonth} from '../actions/index';

class NextMonthButton extends Component {
    const gotoNextMonth = (dispatch, month) => dispatch(nextMonth(month));

    render() {
        return (
            <button className="next" onClick={() => this.gotoNextMonth(dispatch, month)}>&gt;</button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        requestUser: state.RequestContext.currentUser,
        requestRealm: state.RequestContext.realm,
        users: state.AccountUsers.users,
        loading: isFetching(state)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextMonthButton);