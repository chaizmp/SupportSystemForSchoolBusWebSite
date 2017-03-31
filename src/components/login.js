import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { signIn } from '../actions/index';
import { Link } from 'react-router';

class Login extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.signIn(props)
            .then(() => {
            //blog post has been created, navigate the user to the index
            // We navigate by calling this.context.router.push with the
            // new patch to navigate to.
            console.log(this.props.result);
            if(this.props.result.role === 'SCHOOLOFFICER'){
            this.context.router.push('/index');
            }else{
                this.context.router.push('/');
            }
            });
    }

    render() {
        const { fields: {username, password }, handleSubmit } = this.props;
        //equivalent to const title = this.props.fields.title;
        return (
            // to validate the form when the user tries to submit
            // it
            // can pass an action creator (optionally) when the form is submitted
          <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
              <h3>Login</h3>

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

              <button style={{cursor: 'pointer' }} type="submit" > Submit!</button><br/>
              <button> <Link style={{textDecoration:'none'}} to="/register"> Sign Up </Link></button>
              <button> <Link style={{textDecoration:'none'}} to="/"> Cancel </Link></button><br/>
              <button> <Link style={{textDecoration:'none'}} to="/relationship"> Add Relationship </Link></button>
          </form>
        );
    } // they are managed by redux. only you should do is tell what to do when they are updated
}

function validate(values) {
    const errors = {};
    if(!values.username ) {
        errors.username = 'Enter a username';
    }
    if (!values.password) {
        errors.password = 'Enter password';
    }
    //error must have key match the field name
    return errors;
}

function mapStateToProps(state){
    return {
        result: state.formResult.signInResult
            };
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
/// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps


export default reduxForm({
    form: 'Login', // this is a unique token
    fields: ['username', 'password'],
    validate
}, mapStateToProps, { signIn })(Login);