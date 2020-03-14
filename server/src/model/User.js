const fs = require('fs');
const usersPath = `${__dirname}/../../../data/users.json`;
const usersFile = require(usersPath);

module.exports = class User {
  static create(user) {
    return new Promise((resolve, reject) => {
      try {
        let users = [...usersFile];

        const newUser = {
          "username": user.username,
          "email": user.email,
          "password": user.password
        };

        users.push(newUser);

        fs.writeFileSync(usersPath, JSON.stringify(users));

        resolve(newUser);
      } catch (error) {
        reject(error);
      }
    })
  }

  static findWhereEmail(email) {
    return new Promise((resolve, reject) => {

    })
  }
}
