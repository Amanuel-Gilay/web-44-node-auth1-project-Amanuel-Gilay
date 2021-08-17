// Require `checkUsernameFree`, `checkUsernameExists` and `checkPasswordLength`
const router = require('express').Router()
//const bcrypt = require('bcryptjs')
// middleware functions from `auth-middleware.js`. You will need them here!
//const { add } = require('../server/users-modol');


/**
  1 [POST] /api/auth/register { "username": "sue", "password": "1234" }

  response:
  status 200
  {
    "user_id": 2,
    "username": "sue"
  }

  response on username taken:
  status 422
  {
    "message": "Username taken"
  }

  response on password three chars or less:
  status 422
  {
    "message": "Password must be longer than 3 chars"
  }
 */

  router.post('/register',  async (req, res, next) => {
    res.json('register')
  
  })


/**
  2 [POST] /api/auth/login { "username": "sue", "password": "1234" }

  response:
  status 200
  {
    "message": "Welcome sue!"
  }

  response on invalid credentials:
  status 401
  {
    "message": "Invalid credentials"
  }
 */

  router.post('/login',  async (req, res, next) => {
    res.json('register')
  
  })


/**
  3 [GET] /api/auth/logout

  response for logged-in users:
  status 200
  {
    "message": "logged out"
  }

  response for not-logged-in users:
  status 200
  {
    "message": "no session"
  }
 */
  router.get('/register',  async (req, res, next) => {
    res.json('logout')
  
  })
 
// Don't forget to add the router to the `exports` object so it can be required in other modules

module.exports = router
