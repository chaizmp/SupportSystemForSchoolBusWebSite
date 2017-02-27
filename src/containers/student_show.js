import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudent, fetchTeachers, fetchParents } from '../actions/index';
import { Link } from 'react-router'
class StudentShow extends Component {

    componentWillMount(){
        this.props.fetchStudent(this.props.params.id)
            .then( ()=> {
                console.log(this.props.student);
            });
        this.props.fetchTeachers(this.props.params.id)
            .then( ()=> {
                console.log(this.props.teachers);
            });
        this.props.fetchParents(this.props.params.id)
            .then( ()=> {
                console.log(this.props.parents);
            });
    }

    renderTeachers() {
        return this.props.teachers.map( (teacher) => {
            return (
                <div key={teacher.id}>
                    <ul>
                        <li>First Name : {teacher.firstName}</li>
                        <li>Surname : {teacher.surName} </li>
                        <li>Tel : {teacher.tel} </li>
                    </ul>
                </div>
            );
        })
    }

    renderParents() {
        return this.props.parents.map( (parent) => {
            return (
                <div  key={parent.id}>
                    <ul>
                        <li>First Name : {parent.firstName}</li>
                        <li>Surname : {parent.surName} </li>
                        <li>Tel : {parent.tel} </li>
                    </ul>
                </div>
            );
        })
    }

    render(){
        const { student, teachers , parents } = this.props;
        if (!student || !teachers || !parents) {
            return <div>Loading . . .</div>;
        }
        return (

            <div>
                <h3>Student</h3>
                <ul>
                    <li>First Name : {student.firstName}</li>
                    <li>Surname : {student.surName}</li>
                    <li>Type of Service : {student.typeOfService}</li>
                    <li>Status : {student.inBus ? "On Bus" : "Left"} </li>
                </ul>
                <Link to={"/aboutBus/"+this.props.params.id} > About Bus </Link>
                <h3>Parent</h3>
                    {this.renderParents()}
                <h3>Teacher</h3>
                    {this.renderTeachers()}
                <Link to="/">Back</Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        student: state.students.student,
        parents: state.parents.all,
        teachers: state.teachers.all
            };
}

export default connect(mapStateToProps, { fetchStudent, fetchTeachers, fetchParents })(StudentShow);