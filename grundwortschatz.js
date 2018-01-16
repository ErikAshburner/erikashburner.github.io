function init() {
  var words = JSON.parse(data);
alert(words.words.length);
  showOtherWord();
}




function showOtherWord() {
    const div = document.getElementById('words');
  div.innerHTML=words.words[0];
}



