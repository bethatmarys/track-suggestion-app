$(document).ready(function() {
  $("form#option").submit(function(event) {
  var answer1 = $("input:radio[name=answer1]:checked").val();
  var answer2 = $("input:radio[name=answer2]:checked").val();
  var answer3 = $("input:radio[name=answer3]:checked").val();
  var answer4 = $("input:radio[name=answer4]:checked").val();
  var answer5 = $("input:radio[name=answer5]:checked").val();

  if (answer1 === "lg-corp" && answer2 === "bkend" && answer3 === "blah1" && answer4 === "blah1" && answer5 "blah1") {
    console.log(answer1, answer2, answer3, answer4, answer5);
    $("#css").hide();
    $("#php").hide();
    $("#ruby").hide();
    $("#c").hide();
    $(".java").show();
  }
else if (answer1 === "sm-bus" && answer2 === "ftend" && answer3 === "bla2" && answer4 === "blah2" && answer5 "blah2") {
    console.log(answer1, answer2, answer3, answer4, answer5);
    $("#css").hide();
    $("#c").hide();
    $("#ruby").hide();
    $("#java").hide();
    $(".php").show();
  }
  else if (answer1 === "st-up" && answer2 === "apps" && answer3 === "bla3" && answer4 === "blah3" && answer5 "blah3") {
    console.log(answer1, answer2, answer3, answer4, answer5);
    $("#css").hide();
    $("#php").hide();
    $("#c").hide();
    $("#java").hide();
    $(".ruby").show();
  }
  else if (answer1 === "remo" && answer2 === "blah1" && answer3 === "bla1" && answer4 === "blah4" && answer5 "blah4") {
    console.log(answer1, answer2, answer3, answer4, answer5);
    $("#css").hide();
    $("#php").hide();
    $("#ruby").hide();
    $("#java").hide();
    $(".c").show();

  else {
      console.log(answer1, answer2, answer3, answer4, answer5);
      $("#css").hide();
      $("#php").hide();
      $("#ruby").hide();
      $("#java").hide();
      $(".css").show()
    }
    event.preventDefault();
