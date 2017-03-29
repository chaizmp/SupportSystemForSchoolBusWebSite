import axios from 'axios';

const ROOT_URL = "http://localhost:8089";

export const FETCH_STUDENTS = 'FETCH_STUDENTS';
export const FETCH_STUDENT = 'FETCH_STUDENT';
export const FETCH_PARENTS = 'FETCH_PARENTS';
export const FETCH_TEACHERS = 'FETCH_TEACHERS';
export const FETCH_BUS = 'FETCH_BUS';
export const FETCH_ROUTE = 'FETCH_ROUTE';
export const FETCH_BUSES = 'FETCH_BUSES';
export const CLICK_BUS = 'CLICK_BUS';
export const FETCH_PASSENGERS = 'FETCH_PASSENGERS';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const ADD_RELATIONSHIP = 'ADD_RELATIONSHIP';
export const FETCH_ALL_TEACHERS = 'FETCH_ALL_TEACHERS';
export const FETCH_ALL_PARENTS = 'FETCH_ALL_PARENTS';
export const FETCH_ALL_STUDENTS = 'FETCH_ALL_STUDENTS';

export function fetchStudents(id){
    var querystring = require('querystring');
    const request = axios.post(`${ROOT_URL}/getAllStudentInformation`,querystring.stringify({ personId: id, needImage: false }));

    return {
        type: FETCH_STUDENTS,
        payload: request
    };
}
export function fetchStudent(id){
    var querystring = require('querystring');
    const request = axios.post(`${ROOT_URL}/getStudentInformation`,querystring.stringify({ personId: id }));
    return {
        type: FETCH_STUDENT,
        payload: request
    };
}

export function fetchParents(id){
    var querystring = require('querystring');
    const request = axios.post(`${ROOT_URL}/getParents`,querystring.stringify({ personId: id }));
    return {
        type: FETCH_PARENTS,
        payload: request
    };
}

export function fetchTeachers(id) {
    var querystring = require('querystring');
    const request = axios.post(`${ROOT_URL}/getTeachers`, querystring.stringify({personId: id}));
    return {
        type: FETCH_TEACHERS,
        payload: request
    };
}

export function fetchBus(id){
    var querystring = require('querystring');
    const request = axios.post(`${ROOT_URL}/getBusDetail`,querystring.stringify({ personId: id }));
    return {
        type: FETCH_BUS,
        payload: request
    };
}

export function fetchRoute(id){
    var querystring = require('querystring');
    const request = axios.post(`${ROOT_URL}/getCurrentRoute`,querystring.stringify({ personId: id }));
    return {
        type: FETCH_ROUTE,
        payload: request
    };
}

export function fetchAllBus(){

    const request = axios.post(`${ROOT_URL}/getAllCurrentBusPosition`);
    return {
        type: FETCH_BUSES,
        payload: request
    };
}

export function clickBus(index){
    console.log(index);
    return {
        type: CLICK_BUS,
        payload: index
    };
}

export function fetchAllPassenger(id){
    var querystring = require('querystring');
    const request = axios.post(`${ROOT_URL}/getAllPassengerInformation`,querystring.stringify({ carId: id, needImage: false }));
    return {
        type: FETCH_PASSENGERS,
        payload: request
    };
}

export function signIn(props) {
    var querystring = require('querystring');
    const request = axios.post(`${ROOT_URL}/signIn`, querystring.stringify({ username: props.username, password: props.password }));

    return {
      type: SIGN_IN,
      payload: request
    };
}

export function signUp(props) {
    let querystring = require('querystring');
    let path = props.role !== 'STUDENT'? 'signUp': 'addStudent';
    const request = axios.post(`${ROOT_URL}/${path}`, querystring.stringify(
        {
            username: props.username,
            password: props.password,
            role: props.role,
            name: props.name,
            surname: props.surname,
            tel: props.tel,
            typeOfService: !!props.typeOfService? props.typeOfService:'',
            studentId: !!props.studentId? props.studentId:''
        }
        ));
    return {
        type: SIGN_UP,
        payload: request
    };
}

export function addRelationship(props) {
    console.log(props);
    var querystring = require('querystring');
    var path = props.ro === 'TEACHER' ? 'addTeacherAndStudentRelationships': 'addParentAndStudentRelationships';
    const request = axios.post(`${ROOT_URL}/${path}`, querystring.stringify({
        personPId: !!props.personPId? props.personPId:'',
        personTId: !!props.personTId? props.personTId:'',
        personSIds: props.personSIds,
        classRoomName: !!props.classroomName? props.classroomName:''
    }));


    console.log({
        personPId: !!props.personPId? props.personPId:'',
        personTId: !!props.personTId? props.personTId:'',
        personSIds: props.personSIds,
        classRoomName: !!props.classroomName? props.classroomName:''
    });

    return {
        type: ADD_RELATIONSHIP,
        payload: request
    };
}

export function fetchAllTeachers(){
    var querystring = require('querystring');
    const request = axios.post(`${ROOT_URL}/getAllTeachers`);

    return {
        type: FETCH_ALL_TEACHERS,
        payload: request
    };
}

export function fetchAllParents(){
    var querystring = require('querystring');
    const request = axios.post(`${ROOT_URL}/getAllParents`);

    return {
        type: FETCH_ALL_PARENTS,
        payload: request
    };
}

export function fetchAllStudents(){
    var querystring = require('querystring');
    const request = axios.post(`${ROOT_URL}/getAllStudentInformation`,querystring.stringify({
        personId: '16',
        needImage: 'false'
    }));

    return {
        type: FETCH_ALL_STUDENTS,
        payload: request
    };
}