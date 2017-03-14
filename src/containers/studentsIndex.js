import React, { Component } from 'react';
import { fetchStudents } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class StudentsIndex extends Component {
    componentWillMount() {
        this.props.fetchStudents(10)
            .then( ()=> {
                console.log(this.props.students);
            });
    }

    renderStudents()  {
        return this.props.students.map( (student) => {
            return (
            <div key={student.id}>
                <Link style={{textDecoration:'none'}}to={"/student/"+student.id}>
                    {student.firstName} {student.surName}
                </Link> 
            </div> );
        });
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h3> All Students</h3>
                    {this.renderStudents()} 
                <br/><button><Link style={{textDecoration:'none'}} to="/allBus">&nbsp; All Bus &nbsp;</Link></button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {students: state.students.all};
}

export default connect(mapStateToProps, { fetchStudents })(StudentsIndex);