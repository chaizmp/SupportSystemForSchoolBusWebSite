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
                Name: {teacher.firstName}&nbsp;{teacher.surName} <br/>
                        Tel: {teacher.tel} <br/>
                </div>
            );
        })
    }

    renderParents() {
        return this.props.parents.map( (parent) => {
            return (
                <div  key={parent.id}>
                        Name: {parent.firstName}&nbsp;{parent.surName} <br/>
                        Tel: {parent.tel} <br/>
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
                    Name: {student.firstName}&nbsp;{student.surName}<br/>
                    Tel: {student.tel}<br/>
                    Type of Service: {student.typeOfService}<br/>
                    Status: {student.inBus === 'YES' ? "On Bus" : "Left"} <br/>
                <h3>Parent</h3>
                    {this.renderParents()}
                <h3>Teacher</h3>
                    {this.renderTeachers()}
                <br/><button><Link style={{ textDecoration:'none'}} to={"/aboutBus/"+this.props.params.id} > About Bus </Link> </button><br/><br/>
                <button><Link  style={{textDecoration:'none'}} to="/index">Back</Link></button> 
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