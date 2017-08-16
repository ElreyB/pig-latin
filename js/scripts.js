// business logic
var pigLatin = function translate(word) {
  debugger;
  if (word.match(/[^a-z]/)){
      return word;
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
