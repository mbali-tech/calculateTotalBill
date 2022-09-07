const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const flash = require('express-flash')
const session = require('express-session')

const app = express()

// initialise the database connection
const pgPromise = require('pg-promise')({})
const db = pgPromise({
 connectionString:process.env.DATABASE_URL || 'postgres://postgres:2007121214@localhost:5432/greetings', 
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


app.get('/', routes.getHome)
app.post('/calculate_bill', routes.postCalcBill)
app.get('/price_plans', routes.getPricePlans)
app.get('/link_user', routes.getLinkedUser)
app.post('/link_user', routes.postLinkedUser)




app.listen(3000, () => {
    console.log("server is listening on port 3000")
});