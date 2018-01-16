function init() {
  var words = JSON.parse(grundwortschatz);
alert(words.words.length);
  showOtherWord();
}




function showOtherWord() {
    const div = document.getElementById('words');
  div.innerHTML=words.words[0];
}



