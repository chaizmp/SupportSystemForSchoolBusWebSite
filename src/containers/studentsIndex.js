import React, { Component } from 'react';
import { fetchStudents, fetchPersons } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class StudentsIndex extends Component {
    componentWillMount() {
        this.props.fetchStudents(-1)
            .then(() => {
                console.log(this.props.students);
            });
        this.props.fetchPersons()
            .then( ()=> {
                console.log(this.props.persons);
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

    renderPersons()  {
        var previousRole = 'HEHE';
        return this.props.persons.map( (person) => {
            if(previousRole !== person.role) {
                previousRole = person.role;
                return (
                <div key={person.id}>
                    <h3> All {person.role}</h3>
                    <Link style={{textDecoration: 'none'}} to={"/person/" + person.id}>
                        {person.firstName} {person.surName}
                    </Link>
                </div> );
            }else{
                return (<div key={person.id}>
                    <Link style={{textDecoration: 'none'}} to={"/person/" + person.id}>
                        {person.firstName} {person.surName}
                    </Link>
                </div> )
            }
        });
    }

    render() {

            return (
                <div style={{textAlign: 'center'}}>
                    <h3> All Students</h3>
                    {this.renderStudents()}
                    {this.renderPersons()}
                    <br/>
                    <button><Link style={{textDecoration: 'none'}} to="/allBus">&nbsp; All Bus &nbsp;</Link></button>
                    <br/>
                    <button><Link style={{textDecoration: 'none'}} to="/register"> Add User </Link></button>
                    {/*<button> <Link style={{textDecoration:'none'}} to="/"> Cancel </Link></button><br/>*/}
                    <button><Link style={{textDecoration: 'none'}} to="/relationship"> Add Relationship </Link></button>
                </div>
            );
    }
}

function mapStateToProps(state){
    return {students: state.students.all, persons: state.students.persons, forceUpdate: state.students.forceUpdate};
}

export default connect(mapStateToProps, { fetchStudents, fetchPersons })(StudentsIndex);