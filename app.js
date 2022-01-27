//Setup our express application
const express = require('express');
//makes app = to our express application
const app = express();
//Setup cors
const cors = require('cors');
const res = require('express/lib/response');
//Creates a port variable with the value of 3000
const port = 3000;

//Sets our api type to json.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Sets our api to use Cors.
app.use(cors());

let dictators = new Array();
// let lengthOfDictators = 0;
  

//Sends the dictators array back as a response.
app.get('/getDictator', function(req, res){
  res.send(dictators)
});

//Our create function, adds all the fields into our dictator, which we then push to our array in our api.
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

//Our dlete from api function, checks on index, we get sent in our url, on create looking for the index.
app.delete('/deleteDictator/:index', function(req, res){
  const {index} = req.params.index;
  const dictatorId = dictators.findIndex(parameter => parameter.index == index);
  console.log(dictatorId+1);
  // console.log(dictatorId)
  //Selects our dictators array, and splice the element of the index. (,1 to indecate we only delete 1 item.)
  dictators.splice(dictatorId +1,1);
  // console.log(dictators);
  // return res.send();
});

app.listen(port, () => {
  //writes to our console that the api is listening on port 3000, as we define at the top of our code.
  console.log(`Dictator API is listening on port ${port}`)
});

//Adds an index to our dictators in our array.
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