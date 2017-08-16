// business logic
var pigLatin = function translate(word) {
  if (word.match(/[^a-z]/)){
      return word;
    } else if (word[0].match(/[aeiou]/)){
      return word + "way";
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
