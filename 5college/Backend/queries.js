
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3001



const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'cosc-257-node01.cs.amherst.edu',
  database: 'project',
  password: '5College',
  port: 5432,
})





const getStudents = (request, response) => {
  /*SELECT * FROM students as s
INNER JOIN is_registered USING(email)
INNER JOIN is_enrolled USING(email)
WHERE s.email is NOT NULL AND is_enrolled.enroll_status is NOT NULL AND is_registered.register_status is NOT NULL
  */
  //There is probably a cleaner way to do this!! 

  if (request.query.email === undefined || request.query.email === "undefined") {
    request.query.email = "SELECT * FROM students as s INNER JOIN is_registered USING (email) INNER JOIN is_enrolled USING (email) WHERE s.email is NOT NULL"
  }
  else {
    request.query.email = "SELECT * FROM students as s INNER JOIN is_registered USING (email) INNER JOIN is_enrolled USING (email) WHERE s.email = '" + request.query.email + "'"
  }

  if (request.query.regStatus === undefined || request.query.regStatus === "undefined") {
    request.query.regStatus = "is_registered.register_status is NOT NULL"
  }
  else {
    request.query.regStatus = "is_registered.register_status = '" + request.query.regStatus + "'"
  }

  if (request.query.enrollStatus === undefined || request.query.enrollStatus === "undefined") {
    request.query.enrollStatus = "is_enrolled.enroll_status is NOT NULL"
  }
  else {
    request.query.enrollStatus = "is_enrolled.enroll_status = '" + request.query.enrollStatus + "'"
  }


  query = request.query.email + " AND " + request.query.enrollStatus + " AND " + request.query.regStatus
  console.log(query)




  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const getInstructors = (request, response) => {
  /*These if statements are checking to see if the value passed from the frontend == undefined. If it does,
        Then set it the query + what we're passing is NOT NULL, otherwise put the value passed in a string literal
      */

  //There is probably a better way to do this!! 



  if (request.query.role === undefined || request.query.role === "undefined") {
    request.query.role = "SELECT * FROM public.taught_by JOIN instructors ON instructors.email=public.taught_by.email WHERE taught_by.role is NOT NULL"
  }
  else {
    request.query.role = "SELECT * FROM public.taught_by JOIN instructors ON instructors.email=public.taught_by.email WHERE taught_by.role = '" + request.query.role + "'"
  }


  if (request.query.email === undefined || request.query.email == "undefined") {
    request.query.email = "taught_by.email is NOT NULL"
  }

  else {
    request.query.email = "taught_by.email = '" + request.query.email + "'"
  }

  if (request.query.academic_year === undefined || request.query.academic_year == "undefined") {
    request.query.academic_year = "taught_by.academic_year is NOT NULL"
  }

  else {
    request.query.academic_year = "taught_by.academic_year = '" + request.query.academic_year + "'"
  }

  if (request.query.semester === undefined || request.query.semester == "undefined") {
    request.query.semester = "taught_by.semester is NOT NULL"
  }

  else {
    request.query.semester = "taught_by.semester = '" + request.query.semester + "'"
  }

  if (request.query.course_num === undefined || request.query.course_num == "undefined") {
    request.query.course_num = "taught_by.course_num is NOT NULL"
  }

  else {
    request.query.course_num = "course_num = '" + request.query.course_num + "'"
  }

  query = request.query.role + " AND " + request.query.email + " AND " + request.query.academic_year + " AND " + request.query.semester + " AND " + request.query.course_num
  console.log(query)
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCourses = (request, response) => {

  /*These if statements are checking to see if the value passed from the frontend == undefined. If it does,
      Then set it the query + what we're passing is NOT NULL, otherwise put the value passed in a string literal
    */

  //There is probably a better way to do this!! 

  if (request.query.program === undefined || request.query.program === "undefined") {
    request.query.program = "SELECT * FROM courses WHERE program is NOT NULL"
  }
  else {
    request.query.program = "SELECT * FROM courses WHERE program = '" + request.query.program + "'"
  }


  if (request.query.lang === undefined || request.query.lang == "undefined") {
    request.query.lang = "lang is NOT NULL"
  }

  else {
    request.query.lang = "lang = '" + request.query.lang + "'"
  }

  if (request.query.academic_year === undefined || request.query.academic_year == "undefined") {
    request.query.academic_year = "academic_year is NOT NULL"
  }

  else {
    request.query.academic_year = "academic_year = '" + request.query.academic_year + "'"
  }

  if (request.query.semester === undefined || request.query.semester == "undefined") {
    request.query.semester = "semester is NOT NULL"
  }

  else {
    request.query.semester = "semester = '" + request.query.semester + "'"
  }


  query = request.query.program + " AND " + request.query.lang + " AND " + request.query.academic_year + " AND " + request.query.semester
  console.log(query)
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })

  /*SELECT * FROM courses
WHERE program is not NULL and lang is not NULL and academic_year is not NULL and semester is not NULL
Program: SILP, MLP, SLC
Lang: German, Chinese, Hindi, Vietnamese, Spanish
Academic_year: 2022, 2023
Semester: Fall, Spring
*/
}




const getMeetings = (request, response) => {

  /*These if statements are checking to see if the value passed from the frontend == undefined. If it does,
      Then set it the query + what we're passing is NOT NULL, otherwise put the value passed in a string literal
    */

  //There is probably a better way to do this!! 

  if (request.query.semester === undefined || request.query.semester === "undefined") {
    request.query.semester = "SELECT * FROM when_where WHERE semester is NOT NULL"
  }
  else {
    request.query.semester = "SELECT * FROM when_where WHERE semester = '" + request.query.semester + "'"
  }


  if (request.query.academic_year === undefined || request.query.academic_year == "undefined") {
    request.query.academic_year = "academic_year is NOT NULL"
  }

  else {
    request.query.academic_year = "academic_year = '" + request.query.academic_year + "'"
  }



  if (request.query.campus === undefined || request.query.campus === "undefined") {
    request.query.campus = "campus is NOT NULL"
  }

  else {
    request.query.campus = "campus = '" + request.query.campus + "'"
  }


  if (request.query.day === undefined || request.query.day === "undefined") {
    request.query.day = "day is NOT NULL"
  }

  else {
    request.query.day = "day = '" + request.query.day + "'"
  }


  query = request.query.semester + " AND " + request.query.academic_year + " AND " + request.query.campus + " AND " + request.query.day
  console.log(query)


  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



//Students to interview is legacy, not really relevant 
const studentsToInterview = (request, response) => {
  pool.query("SELECT public.students.first_name, public.students.last_name, public.is_enrolled.email, public.is_enrolled.course_num FROM public.students, public.is_enrolled WHERE public.students.email = public.is_enrolled.email AND public.is_enrolled.status = 'NX'", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getStudents,
  studentsToInterview,
  getCourses,
  getMeetings,
  getInstructors
}













