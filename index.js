require('dotenv').config();

const express = require('express');
const router = require('./app/router');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use('*', (req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
