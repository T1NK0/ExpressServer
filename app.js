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
app.use(cors());

let dictators = new Array();
// let lengthOfDictators = 0;
  

app.get('/getDictator', function(req, res){
  res.send(dictators)
});

app.post('/createDictator', function (req, res) {
  const indexDictator = IndexOfDictators(dictators);
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const birthyear = req.body.birthyear;
  const deathyear = req.body.deathyear;
  const description = req.body.description;
  const dictator = {'id':indexDictator, 'firstname':firstname, 'lastname':lastname, 'birthyear':birthyear, 'deathyear':deathyear, 'description':description};
  console.log(dictator);
  dictators.push(dictator);
});

app.delete('/deleteDictator', function(req, res){
  indexDictator = req.body.id
  // indexDictator = IndexOfDictators(dictators);
  //Selects our dictators array, and splice the element of the index. (,1 to indecate we only delete 1 item.)
  dictators.splice(indexDictator,1);
});

app.listen(port, () => {
  //writes to our console that the api is listening on port 3000, as we define at the top of our code.
  console.log(`Dictator API is listening on port ${port}`)
});

function IndexOfDictators(dictators) {
  if(dictators == null) {
    return 1;
  } else if(dictators.length > 0) {
    return dictators.length + 1;
  }
  else {
    return 1;
  }
}