import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudent, fetchTeachers, fetchParents, deletePerson } from '../actions/index';
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
                    <Link style={{textDecoration: 'none'}} to={"/person/" + teacher.id}>
                        {teacher.firstName} {teacher.surName}
                    </Link>
                </div>
            );
        })
    }

    renderParents() {
        return this.props.parents.map( (parent) => {
            return (
                <div  key={parent.id}>
                    <Link style={{textDecoration: 'none'}} to={"/person/" + parent.id}>
                        {parent.firstName} {parent.surName}
                    </Link>
                </div>
            );
        })
    }

    render(){
        const { student, teachers , parents } = this.props;
        if (!student || !teachers || !parents) {
            return <div>Loading . . .</div>;
        }
        let src = student.image !== '-1'? "data:image/jpg;base64,"+student.image: 'data:image/jpg;base64,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';
        console.log(src);
        return (
            <div>
                <img style={{border:'ridge', width:'300px', height:'300px'}} alt="Embedded Image" src={src} />
                <h3>Student</h3>
                    Name: {student.firstName}&nbsp;{student.surName}<br/>
                    Tel: {student.tel}<br/>
                    Type of Service:
                {student.typeOfService == 'BOTH' ? ' Round Trip':''}
                {student.typeOfService == 'GO' ? ' One Way Trip (Home to School)':''}
                {student.typeOfService == 'BACK' ? ' One Way Trip (School to Home)':''}<br/>
                    Status: {student.inBus === 'YES' ? "On Bus" : ''}
                {student.inBus === 'NO' ? "Get Off" : ''}
                {student.inBus === 'TEMP' ? "Visiting" : ''}<br/>
                <button><Link  style={{textDecoration:'none'}} to= "/delete" onClick={ () =>{this.props.deletePerson(this.props.params.id)}
                }>Delete</Link></button>
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

export default connect(mapStateToProps, { fetchStudent, fetchTeachers, fetchParents, deletePerson })(StudentShow);