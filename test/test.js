const assert = require('assert');

const GreetFactory = require('../namesGreeted');

// initialise the database connection
const pgPromise = require('pg-promise')({})
const db = pgPromise({
 connectionString:process.env.DATABASE_URL || 'postgres://postgres:2007121214@localhost:5432/greetings_test', 
  
})


describe("Testing database logic", function(){

    beforeEach(async function(){
        await db.none('delete from users')
    });
})