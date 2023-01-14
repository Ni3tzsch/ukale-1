const bcrypt = require('bcrypt')
const dbConn = require('../config/mysqlConn')

exports.login = (req, res, next) => {
  const { email, password } = req.body
  const sql = `SELECT * FROM users WHERE email = ?`

  dbConn.execute(sql, email, async (err, results, fields) => {
    if (err) throw err
    const isPassword = await bcrypt.compare(password, results[0].password)

    if (!isPassword) {
      return res
        .status(400)
        .json({ error: 'Email ou mot de passe incorrecte !' })
    }

    // ..
  })
}
