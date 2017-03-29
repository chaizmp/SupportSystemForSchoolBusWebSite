import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { signUp} from '../actions/index';
import { Link } from 'react-router';
var type;
class Register extends Component {

    componentDidMount(){
        this.show0();
        type = 0;
    }

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.signUp(props)
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
        const { fields: {username, password, role, typeOfService, name, surname, tel, studentId}, handleSubmit } = this.props;
        //equivalent to const title = this.props.fields.title;
        return (
            // to validate the form when the user tries to submit
            // it
            // can pass an action creator (optionally) when the form is submitted
            <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
                <h3>Login</h3>
                <div className={`form-group ${role.touched && role.invalid ? 'has-danger' : '' }` }>

                    {/*<label>Sex</label>*/}
                    {/*<div>*/}
                        {/*<label><Field name="sex" component={input} type="radio" value="male"/> Male</label>*/}
                        {/*<label><Field name="sex" component={input} type="radio" value="female"/> Female</label>*/}
                    {/*</div>*/}
                    <label>Role</label><br/>
                    <label><input type="radio" name="role" value="PARENT" className="form-control" {...role} onClick={ this.show1} /> Parent</label>
                    <label><input type="radio" name="role" value="TEACHER" className="form-control" {...role} onClick={this.show1 } /> Teacher </label>
                    <label><input type="radio" name="role" value="DRIVER" className="form-control" {...role} onClick={ this.show1 }/> Driver</label>
                    <label><input type="radio" name="role" value="STUDENT" className="form-control" {...role} onClick={ this.show2 }/> Student</label>
                    <div className="text-help">
                        { role.touched ? role.error : '' }
                    </div>
                </div>
                    <div id="typeOfService">
                        <div
                            className={`form-group ${typeOfService.touched && typeOfService.invalid ? 'has-danger' : '' }` }>
                            <label>Type of Service</label><br/>
                            <label><input type="radio" name="typeOfService" value="GO"
                                          className="form-control" {...typeOfService} /> Go</label>
                            <label><input type="radio" name="typeOfService" value="BACK"
                                          className="form-control" {...typeOfService} /> Back</label>
                            <label><input type="radio" name="typeOfService" value="BOTH"
                                          className="form-control" {...typeOfService} /> Both</label>
                            <div className="text-help">
                                { typeOfService.touched ? typeOfService.error : '' }
                            </div>
                        </div>
                        <div className={`form-group ${studentId.touched && studentId.invalid ? 'has-danger' : '' }` }>
                            <label>Student ID</label>
                            <input type="text" className="form-control" {...studentId} />
                            <div className="text-help">
                                { studentId.touched ? studentId.error : '' }
                            </div>
                        </div>
                    </div>
                    <div id="notStudent">
                        <div className={`form-group ${username.touched && username.invalid ? 'has-danger' : '' }` }>
                            <label>Username</label>
                            <input type="text" className="form-control" {...username} />
                            <div className="text-help">
                                {username.touched ? username.error : ''}
                            </div>
                        </div>
                        <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : '' }` }>
                            <label>Password</label>
                            <input type="password" className="form-control" {...password} />
                            <div className="text-help">
                                { password.touched ? password.error : '' }
                            </div>
                        </div>
                    </div>
                <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : '' }` }>
                    <label>First Name</label>
                    <input type="text" className="form-control" {...name} />
                    <div className="text-help">
                        { name.touched ? name.error : '' }
                    </div>
                </div>
                <div className={`form-group ${surname.touched && surname.invalid ? 'has-danger' : '' }` }>
                    <label>Surname</label>
                    <input type="text" className="form-control" {...surname} />
                    <div className="text-help">
                        { surname.touched ? surname.error : '' }
                    </div>
                </div>

                <div className={`form-group ${tel.touched && tel.invalid ? 'has-danger' : '' }` }>
                    <label>Telephone</label>
                    <input type="text" className="form-control" {...tel} />
                    <div className="text-help">
                        { tel.touched ? tel.error : '' }
                    </div>
                </div>
                <button type="submit">Sign Up!</button>
                <button> <Link to="/"> Cancel </Link></button>
            </form>
        );

    } // they are managed by redux. only you should do is tell what to do when they are updated
    show0(){
        document.getElementById('typeOfService').style.display ='none';
        document.getElementById('notStudent').style.display ='none';
    }
    show1(){
        document.getElementById('typeOfService').style.display ='none';
        document.getElementById('notStudent').style.display ='block';
        type = 1;
    }
    show2(){
        document.getElementById('typeOfService').style.display = 'block';
        document.getElementById('notStudent').style.display ='none';
        type = 2;
    }
}

function validate(values) {
    const errors = {};
    if(!values.username && type === 1) {
        errors.username = 'Enter Username';
    }
    if (!values.password && type ===1) {
        errors.password = 'Enter Password';
    }
    if (!values.role) {
        errors.role= 'Select Role';
    }
    if (!values.name) {
        errors.name= 'Enter Name';
    }
    if (!values.surname) {
        errors.surname = 'Enter Surname';
    }
    if (!values.tel) {
        errors.tel= 'Enter Telephone Number';
    }
    if (!values.typeOfService && type !==1) {
        errors.typeOfService= 'Enter Type Of Service';
    }
    if (!values.studentId && type !==1) {
        errors.studentId= 'Enter Student ID';
    }
    //error must have key match the field name
    return errors;
}

function mapStateToProps(state){
    return {
        result: state.formResult.signUpResult
    };
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
/// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps


export default reduxForm({
    form: 'Register', // this is a unique token
    fields: ['username', 'password', 'role', 'typeOfService', 'name', 'surname', 'tel', 'studentId'],
    validate
}, mapStateToProps, { signUp })(Register);