const express = require('express')
const hbs = require('hbs');
const app = express()
const port = 3000
app.use(express.static("public"));
app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/pedidos', (req, res) => {
    res.render('pedidos')
  })

  app.get('/crearpedido', (req, res) => {
    res.render('crearpedido')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})