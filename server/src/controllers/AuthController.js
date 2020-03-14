const fs = require('fs');
const User = require('../model/User');

module.exports.register = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  User.create({
    username,
    email,
    password
  })
    .then(user => {

    }).catch(err => {
      console.log(err);
    })

}
