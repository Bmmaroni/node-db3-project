const model = require("./scheme-model")
const db = require("../../data/db-config")
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  try {
    const { scheme_id } = req.params
    const scheme = await db("schemes").where({ scheme_id }).first()
    if (!scheme) {
      return res.status(404).json({
        message: `scheme with scheme_id ${ scheme_id } not found`
      })
    } else {
      req.scheme = scheme
      next()
    }
  } catch (err) {
      next(err)
  }
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  if (!req.body.scheme_name || typeof req.body.scheme_name !== 'string' || req.body.scheme_name.length === 0) {
    res.status(400).json({
      message: "invalid scheme_name"
    })
  }
  next()
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  if (!req.body.instructions || typeof req.body.instructions !== 'string' || req.body.instructions.length == 0 || typeof req.body.step_number !== "number" || req.body.step_number < 1) {
    res.status(400).json({
      message: "invalid step"
    })
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
