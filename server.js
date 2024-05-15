const express = require('express')
const app = express()
const port = 4131
const path = require('path')


app.set("views", "templates"); // look in "templates" folder for pug templates
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, 'resources')));

app.get('/', (req, res) => {
    res.render('frog')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })