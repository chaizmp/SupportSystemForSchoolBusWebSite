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

export function fetchStudents(id){
    var querystring = require('querystring');
    const request = axios.post(`${ROOT_URL}/getAllStudentInformation`,querystring.stringify({ personId: id }));

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
    const request = axios.post(`${ROOT_URL}/getAllPassengerInformation`,querystring.stringify({ carId: id }));
    return {
        type: FETCH_PASSENGERS,
        payload: request
    };
}