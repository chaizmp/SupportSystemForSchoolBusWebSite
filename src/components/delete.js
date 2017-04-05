import React, { Component, PropTypes } from 'react';
//import {Link} from 'react-router';
import { triggerDelete } from '../actions/index';
import { connect } from 'react-redux'
class Delete extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    render() {
        if(this.props.deleteResult == true) {
            this.props.triggerDelete();
            window.alert("Deletion Complete");
            window.location.href = 'http://localhost:3000/index';
            //this.context.router.push('/index');
        }
        return (
            <div>Waiting . . .</div>
        );
    }
}

function mapStateToProps (state) {
    return {
        deleteResult: state.deleteResult
    };
}


export default connect(mapStateToProps, { triggerDelete })(Delete);