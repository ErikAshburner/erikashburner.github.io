function init() {
alert(data.words.length);
  showOtherWord();
}




function showOtherWord() {
    const div = document.getElementById('words');
  div.innerHTML=words.words[0];
}



