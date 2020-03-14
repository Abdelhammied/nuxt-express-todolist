const { Validator, Handler } = require('../requests/src/validator');

module.exports = (req, res, next) => {

  let validate = new Validator(req);

  validate.required('username');
  validate.required('email');
  validate.required('password');
  validate.required('confirmPassword');

  validate.string('username');

  validate.minLength('username', 6)
  validate.minLength('password', 6)

  validate.email('email')

  validate.matches('password', 'confirmPassword')

  if (validate.validatiorErrors.length > 0) {
    return Handler.handleError(res, validate.validatiorErrors);
  } else {
    next();
  }
}
