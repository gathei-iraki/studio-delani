function getData() {
    var a = document.getElementById("name").value;
    alert("Hey, " + a + ". We got your message. Thanks for reaching out to us.")
    event.preventDefault()


  }
  $().ready(function () {
    $("#pen-image").click(function () {
      $("#pen-whole").toggle();
      $("#pen-word").toggle();
    });

    $("#develop").click(function () {
      $("#develop-1").toggle();
      $("#develop-2").toggle();
    });

    $("#product").click(function () {
      $("#product-1").toggle();
      $("#product-2").toggle();
    });
  });