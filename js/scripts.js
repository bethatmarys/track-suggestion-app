$(document).ready(function() {
  $("form#option1").submit(function(event) {
  var answer1 = $("input:radio[name=answer1]:checked").val();
  var answer8 = $("input:radio[name=answer8]:checked").val();
  var answer13 = $("input:radio[name=answer13]:checked").val();
  var answer18 = $("input:radio[name=answer13]:checked").val();

  if (answer1 === "lg-corp" && answer8 === "bkend" && answer13 === "bla1" && answer18 === "blah1") {
    console.log(make, model, color);
    $("#css").hide();
    $("#php").hide();
    $("#ruby").hide();
    $("#c").hide();
    $(".java").show();
  }
  else if (make === "bmw" && model === "coupe" && color === "red") {
    console.log(make, model, color);
    $("#css").hide();
    $("#c").hide();
    $("#ruby").hide();
    $("#java").hide();
    $(".php").show();
  }
  else if (make === "bmw" && model === "coupe" && color === "blue") {
    console.log(make, model, color);
    $("#css").hide();
    $("#php").hide();
    $("#c").hide();
    $("#java").hide();
    $(".ruby").show();
  }
  else if (make === "ferrari" && model === "coupe" && color === "green") {
    console.log(make, model, color);
    $("#css").hide();
    $("#php").hide();
    $("#ruby").hide();
    $("#java").hide();
    $(".c").show();

  else {
      console.log(make, model, color);
      $("#css").hide();
      $("#php").hide();
      $("#ruby").hide();
      $("#java").hide();
      $(".css").show()
    }
    event.preventDefault();
