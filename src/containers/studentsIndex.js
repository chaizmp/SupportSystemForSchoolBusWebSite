import React, { Component } from 'react';
import { fetchStudents } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class StudentsIndex extends Component {
    componentWillMount() {
        this.props.fetchStudents(125)
            .then( ()=> {
                console.log(this.props.students);
            });
    }

    renderStudents()  {
        return this.props.students.map( (student) => {
            return (
            <li key={student.id}>
                <Link to={"/student/"+student.id}>
                    {student.firstName}
                </Link>
            </li>);
        });
    }

    render() {
        return (
            <div>
                <h3> All Students</h3>
                <ul>
                    {this.renderStudents()}
                </ul>
                <Link to="/allBus"> All Bus </Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {students: state.students.all};
}

export default connect(mapStateToProps, { fetchStudents })(StudentsIndex);