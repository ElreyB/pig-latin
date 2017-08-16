// business logic
function removeConsonants(word){
  var newWord = "";
  var letters = word.split("");
  letters.forEach(function(letter){
    if (letter.match(/[aeiou]/i)){
      newWord += letter;
    }
  });
  return newWord;
}


var pigLatin = function translate(word) {
  // debugger;
  if (word.match(/[^a-z]/i)){
      return word;
    } else if (word[0].match(/[aeiou]/i)){
      return word + "way";
  } else if (word.match(/[^aeiou]/)){
    var consonants = word.match(/[^aeiou]*/);
    var pigLatin =
    console.log(word)
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
