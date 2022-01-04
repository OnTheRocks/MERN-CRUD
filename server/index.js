const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const User = require('./models/user.model')

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/CRUD", () => { console.log("Connected to CrudDB") }, e => console.error(e))

app.post('/api/register', async (req, res) => {
  console.log(req.body)
  try {
      await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
      })
      res.json({ status: 'OK' })
  } catch (err) {
      console.log(err)
      res.json({ status: 'error', error: 'Duplicate email' })
  } 
})

app.post('/api/login', async (req, res) => {
      await User.findOne({
          email: req.body.email,
          password: req.body.password,
      })

      if (User) {
        return res.json({ status: 'OK', user: true })
      } else {
        return res.json({ status: 'error', user: false })
      }
      
      res.json({ status: 'OK'})
    })

app.listen(1337, () => {
  console.log("Server started on 1337")
});