const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const flash = require('express-flash')
const session = require('express-session')

const app = express()

// initialise the database connection
const pgPromise = require('pg-promise')({})
const db = pgPromise({
 connectionString:process.env.DATABASE_URL || 'postgres://postgres:2007121214@localhost:5432/users', 
  ssl: {
    rejectUnauthorized: false
  }
})

const Routes = require('./routes')
// initialise session middleware - flash-express depends on it
app.use(session({
    secret : "<add a secret string here>",
    resave: false,
    saveUninitialized: true
  }))
  
// initialise the flash middleware
app.use(flash())

//set up middleware
app.engine('handlebars', exphbs({layoutsDir: "views/layouts/"}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', routes.Home)
app.get('/price_plans', routes. pricePlans)
app.get('user_plan', routes. allocate)
app.post('//user_plan', routes. allocate)




app.listen(3000, () => {
    console.log("server is listening on port 3000")
});