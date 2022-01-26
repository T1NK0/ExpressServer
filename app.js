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

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.post('/dictators', function (req, res) {
      const firstname = req.body.userName;
      const lastname = req.body.lastname;
      const birthyear = req.body.birthyear;
      const deathyear = req.body.deathyear;
      const description = req.body.description;
  
      res.send({'firstname': firstname, 'lastname': lastname})
    })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })