
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/students', db.getStudents)
app.get('/interviews', db.studentsToInterview)
app.get('/instructors', db.getInstructors)
app.get('/courses', db.getCourses)
app.get('/meetings', db.getMeetings)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


