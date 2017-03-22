$(document).ready(function() {
  renderPart(story[1]);
});

function renderPart(part) {
  $("#text").empty();
  $("#responses").empty();
  $("#text").text(part.text);
  for (i in part.responses) {
    var option_button = $("<button>").text(part.responses[i].text).val(part.responses[i].link);
    option_button.click(function(a, b, c) {
      var responseIndex = a.target.value;
      appendHistory(part.text, a.target.textContent);
      renderPart(story[responseIndex]);
    });
    $("#responses").append(option_button);
  }
}

function appendHistory(storyText, responseText) {
  var storyDiv = $("<span>").text(storyText);
  var responseDiv = $("<span>").text(responseText);
  $("#history").append(storyDiv);
  $("#history").append($("<br>"));
  $("#history").append(responseDiv);
  $("#history").append($("<br>"));
}