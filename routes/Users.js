const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

const user_ = require('../models').user_;

users.use(cors())

process.env.SECRET_KEY = 'secret';


// users.post('/login', (req, res) => {
//   user_.findOne({
//     where: {
//       login: req.body.login,
//       password: req.body.password,
//       role: "110"
//     }
//   })
//     .then(user => {
//       if (user) {
//          if (bcrypt.compare(req.body.password, user.password)) {
//           let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
//             expiresIn: 1440
//           })
//           res.send(token)
//         }else{
//           res.json({ error: 'Usuário e senha não combinam.' });
//         }
//       } else {
//         res.status(400).json({ error: 'Por favor, digite login e senha corretamente.' });
//       }
//     })
//     .catch(err => {
//       res.status(400).json({ error: err });
//     })
// })

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

  user_.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('Usuário não existe');
      }
    })
    .catch(err => {
      res.send('error: ' + err);
    })
})

users.get('/allusers', (req, res) => {
  
    user_.findAll({
      where: {
        role: "102"
      }
    })
      .then(user => {
        if (user) {
          res.json(user)
        } else {
          res.send('Usuário não existe');
        }
      })
      .catch(err => {
        res.send('error: ' + err);
      })
})

module.exports = users;