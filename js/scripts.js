// business logic
var consonants = "";
var noConsonantsBegin = "";
var newWord = "";

function removeConsonants(word){
  newWord = word.match(/([aeiou]([a-z]*))/i);
  return newWord[0];
}

function removeQu(word){
  newWord = word.match(/([aeio]([a-z]*))/i);
  return newWord[0];
}


var pigLatin = function translate(word) {
  debugger;
  if (word.match(/[^a-z]/i)){
      return word;
  } else if (word[0].match(/[aeiou]/i)){
    return word + "way";
  }else if (word.match(/[^aeiou]/i)){
    consonants = word.match(/[^aeiou]*/i);
    noConsonantsBegin = removeConsonants(word);
    return noConsonantsBegin + consonants + "way";
  }else if (word.match(/([^aeiou](qu))/i)){
    consonants = word.match(/([^aeiou](qu))/i);
    noConsonantsBegin = removeQu(word);
    return noConsonantsBegin + consonants + "way";
  }
};


// user interface logic
$(document).ready(function() {
  $("form#pre-latin").submit(function(event) {
    event.preventDefault();

    var wordInput = $("input#english").val();
    var result = pigLatin(wordInput);

    $(".pLatin").text(result);

  });
});
