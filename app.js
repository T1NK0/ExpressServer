//Setup our express application
const express = require('express');
//makes app = to our express application
const app = express();
//Setup cors
const cors = require('cors');
//Creates a port variable with the value of 3000
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

let dictators = Array();

app.get('/getDictator', (req, res) => {
  res.send(dictators)
})

app.post('/createDictator', function (req, res) {
  const dictator = req.body;
  console.log(dictator);
  dictators.push(dictator);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})