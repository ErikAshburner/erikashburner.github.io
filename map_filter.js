const url = 'https://randomuser.me/api/?results=1000';
var personList = [];

 // fetch the data and add a list entry for each
 function fetchPersons() {
    const personListTextArea = document.getElementById('personList');
    const searchListTextArea = document.getElementById('searchList');
    const foundListTextArea = document.getElementById('foundList');
    // remove existing list entries
    personListTextArea.value ='';
    searchList.value ='';
    foundList.value ='';
    list = [];
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let persons = data.results;
      return persons.map(function(person) {
        var name = person.name.first + " " + person.name.last;
        personList.push(name);
        personListTextArea.value +=  name + '\r\n';
      })
    })
    .catch(function(error) {
      console.log(JSON.stringify(error));
    });  
    
  }

    // search persons in the person list and add them to the found list
    function searchPersons() {
      const searchListTextArea = document.getElementById('searchList');
      const foundListTextArea = document.getElementById('foundList');

      var searchList = searchListTextArea.value.split('\n');
      console.log(searchList);
      var foundList = personList.filter(function (person) {
        return searchList.some(name => name.toLowerCase() == person.toLowerCase());
      });

      foundList.forEach(person => {
        var name = person.name.first + " " + person.name.last;
        foundListTextArea.value +=  name + '\r\n';

      });


  }
