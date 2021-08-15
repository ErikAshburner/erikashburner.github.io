 function fetchAuthors() {
    const personListTextArea = document.getElementById('personList');
    // remove existing list entries
    personListTextArea.value ='';
    // fetch the data and add a list entry for each
    const url = 'https://randomuser.me/api/?results=1000';
    const list = [];
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let authors = data.results;
      return authors.map(function(author) {
        var name = author.name.first + " " + author.name.last;
        list.push(name);
        personListTextArea.value +=  name + '\r\n';
      })
    })
    .catch(function(error) {
      console.log(JSON.stringify(error));
    });   
  }
