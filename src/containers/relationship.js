import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { addRelationship, fetchAllTeachers, fetchAllParents, fetchAllStudents } from '../actions/index';
import { Link } from 'react-router';
var type1;
class Relationship extends Component {


    static contextTypes = {
        router: PropTypes.object

    };

    componentWillMount(){
        this.props.fetchAllTeachers()
            .then( ()=>{
                console.log("#####");
               console.log(this.props);
            });
        this.props.fetchAllParents()
            .then( ()=>{
                console.log("#####");
                console.log(this.props.persons);
            });
        this.props.fetchAllStudents()
            .then( ()=>{
                console.log("#####");
                console.log(this.props.persons);
            });
    }

    componentDidMount(){
        this.show0();
        type1 = 0;
    }

    showParentDiv(){
        const { fields: {ro, personTId, personPId, personSIds, classroomName }, handleSubmit } = this.props;
        return this.props.persons.allParents.map((parent,i)=>{
                 return (  <label><input type="radio" name="personsPId" value={parent.id}
                                  className="form-control" {...personPId} /> {parent.firstName} {parent.surName}</label>
                );});
    }

    showTeacherDiv(){
        const { fields: {ro, personTId, personPId, personSIds, classroomName }, handleSubmit } = this.props;
        return this.props.persons.allTeachers.map((teacher,i)=>{
                    return (  <label><input  type="radio" name="personsTId" value={teacher.id}
                                          className="form-control" {...personTId} /> {teacher.firstName} {teacher.surName}
                        </label>
                        );});
    }

    renderStudentDiv(){
        const { fields: {ro, personTId, personPId, personSIds, classroomName }, handleSubmit } = this.props;
        return this.props.persons.allStudents.map((student, i) => {
                return ( <label><input  type="radio" name="personsSIds" value ={student.id}  className="form-control" {...personSIds} /> {student.firstName} {student.surName} </label>
                          );});
    }

    show0(){
        document.getElementById('teacherDiv').style.display ='none';
        document.getElementById('parentDiv').style.display ='none';
        document.getElementById('classRoom').style.display ='none';
    }
    show1(){
        document.getElementById('teacherDiv').style.display ='none';
        document.getElementById('parentDiv').style.display ='block';
        document.getElementById('classRoom').style.display ='none';
        type1 = 1;
        console.log("####");
        console.log(type1);
    }
    show2(){
        document.getElementById('teacherDiv').style.display = 'block';
        document.getElementById('parentDiv').style.display ='none';
        document.getElementById('classRoom').style.display ='block';
        type1 = 2;
        console.log("####");
        console.log(type1);
    }

    submit(props){
        console.log("TESTTTTT");
        this.props.addRelationship(props)
            .then(() => {
                //blog post has been created, navigate the user to the index
                // We navigate by calling this.context.router.push with the
                // new patch to navigate to.
                console.log(this.props.result);
                if(this.props.result.role === 'SCHOOLOFFICER'){
                    this.context.router.push('/index');
                }else{
                    this.context.router.push('/register');
                }
            });
    }

    render() {
        const { fields: {ro, personTId, personPId, personSIds, classroomName }, handleSubmit } = this.props;
        //equivalent to const title = this.props.fields.title;
        if( (this.props.persons.allTeachers !== null || this.props.persons.allTeachers !== 'undefined')
            && (this.props.persons.allParents !== null || this.props.persons.allParents!== 'undefined')
            && (this.props.persons.allStudents !== null || this.props.persons.allStudents !== 'undefined') ) {
            return (<div>
                {/*// to validate the form when the user tries to submit*/}
                {/*// it*/}
                {/*// can pass an action creator (optionally) when the form is submitted*/}
                <form onSubmit={handleSubmit(this.submit.bind(this))}>
                    <h3>Add Relationship</h3>
                        {/*<label>Sex</label>*/}
                        {/*<div>*/}
                        {/*<label><Field name="sex" component={input} type="radio" value="male"/> Male</label>*/}
                        {/*<label><Field name="sex" component={input} type="radio" value="female"/> Female</label>*/}
                        {/*</div>*/}

                        {/*<label>Sex</label>*/}
                        {/*<div>*/}
                        {/*<label><Field name="sex" component={input} type="radio" value="male"/> Male</label>*/}
                        {/*<label><Field name="sex" component={input} type="radio" value="female"/> Female</label>*/}
                        {/*</div>*/}
                    <div className={`form-group ${ro.touched && ro.invalid ? 'has-danger' : '' }` }>
                        <label>Type</label><br/>
                        <label><input type="radio" name="ro" value="PARENT" className="form-control" {...ro} onClick={ this.show1} /> Parent</label>
                        <label><input type="radio" name="ro" value="TEACHER" className="form-control" {...ro} onClick={this.show2 } /> Teacher </label>
                        <div className="text-help">




                            { ro.touched ? ro.error : '' }
                        </div>
                    </div>
                    <div id="parentDiv">
                        <label>Parent</label><br/>
                        <div className={`form-group ${personPId.touched && personPId.invalid ? 'has-danger' : '' }` }>
                    {this.showParentDiv()}
                        <div className="text-help">
                            { personPId.touched ? personPId.error : '' }
                        </div>
                    </div>
                    </div>
                    <div id="teacherDiv">
                        <div className={`form-group ${personTId.touched && personTId.invalid ? 'has-danger' : '' }` }>
                    <label>Teacher</label><br/>
                    {this.showTeacherDiv()}
                    <div className="text-help">{ personTId.touched ? personTId.error : '' }</div>
                    </div>
                    </div>
                    <div>
                    <label>Student</label><br/>
                        <div className={`form-group ${personSIds.touched && personSIds.invalid ? 'has-danger' : '' }` }>
                    {this.renderStudentDiv()}
                    <div className="text-help">{ personSIds.touched ? personSIds.error : '' }</div>
                    </div>
                    </div>
                    <div id="classRoom">
                            <label>Classroom Name</label>
                        <div className={`form-group ${classroomName.touched && classroomName.invalid ? 'has-danger' : '' }` }>
                            <input type="text" className="form-control" {...classroomName} />
                            <div className="text-help">{ classroomName.touched ? classroomName.error : '' }</div>
                    </div>
                    </div>
                    <button type="submit">Sign Up!</button>
                    <button><Link to="/"> Cancel </Link></button>
                </form>
                </div>
            );
        }

    } // they are managed by redux. only you should do is tell what to do when they are updated

}



// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
/// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

function validate(values) {
    const errors = {};
    if(!values.ro ) {
        errors.ro = 'Select Type';
    }
    if(!values.personTId && type1 === 2) {
        errors.personTId = 'Select Teacher';
    }
    if (!values.personPId && type1 === 1) {
        errors.personPId = 'Select Parent';
    }
    if (!values.personSIds) {
        errors.peronSIds = 'Select Students';
    }
    if (!values.classroomName && type1 === 2) {
        errors.classroomName= 'Enter Classroom Name';
    }
    //error must have key match the field name
    return errors;
}

// function mapStateToProps (state) {
//     return {
//         persons: state.relationship,
//         result: state.formResult
//     };
// }

Relationship = reduxForm({
    form: 'Relationship', // this is a unique token
    fields: ['ro', 'personTId', 'personPId', 'personSIds', 'classroomName'],
    validate
}, state => ({result: state.formResult}), { addRelationship })(Relationship);

Relationship = connect( state => ({persons: state.relationship}), { addRelationship, fetchAllParents, fetchAllStudents, fetchAllTeachers})(Relationship)
export default (Relationship);