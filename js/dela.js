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

    $("#check-image").click(function () {
      $("#check-whole").toggle();
      $("#check-word").toggle();
    });

    $("#list-image").click(function () {
      $("#list-whole").toggle();
      $("#list-word").toggle();
    });
  });
