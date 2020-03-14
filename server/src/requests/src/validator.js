var validator = require('validator');


module.exports.Validator = class Validator {
  constructor(req) {
    this.validatiorErrors = [];
    this.requestBody = req.body
  }

  required(field) {
    if (!this.requestBody.hasOwnProperty(field)) {
      this.validatiorErrors.push(`${field} Field is required.`)
    }
  }

  string(field) {
    let value = Object.getOwnPropertyDescriptor(this.requestBody, field).value

    if (typeof value == undefined || validator.isEmpty(value)) {
      this.validatiorErrors.push(`${field.charAt(0).toUpperCase() + field.slice(1)} Field is required.`);
    }
  }

  email(field) {
    let value = Object.getOwnPropertyDescriptor(this.requestBody, field).value

    if (typeof value == undefined || !validator.isEmail(value)) {
      this.validatiorErrors.push(`${field} Field Is Not Valid Email`);
    }
  }

  minLength(field, minLength) {

    let value = Object.getOwnPropertyDescriptor(this.requestBody, field).value

    if (
      typeof value == undefined ||
      !validator.isLength(value, { min: minLength })
    ) {
      this.validatiorErrors.push(`${field} Field must be more than ${minLength} characters.`)
    }
  }

  maxLength(field, maxLength) {
    let value = Object.getOwnPropertyDescriptor(this.requestBody, field).value

    if (
      typeof value == undefined ||
      !validator.isLength(value, { max: maxLength })
    ) {
      this.validatiorErrors.push(`${field} Field must be less than ${maxLength} characters.`)
    }
  }

  matches(field1, field2) {
    if (
      this.requestBody.hasOwnProperty(field1) &&
      this.requestBody.hasOwnProperty(field2)
    ) {
      let value1 = Object.getOwnPropertyDescriptor(this.requestBody, field1).value
      let value2 = Object.getOwnPropertyDescriptor(this.requestBody, field2).value

      if (
        typeof value1 == undefined ||
        typeof value2 == undefined ||
        value1 !== value2
      ) {
        this.validatiorErrors.push(`${field1} Doesnot Match ${field2} .`)
      }
    }
  }
}

module.exports.Handler = class Handle {
  static handleError(res, err) {
    return res.status(400)
      .json({
        error: err
      })
  }
}
