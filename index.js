$(document).ready(function () {

  var ss = new SecretSanta();

  $('.btn').click(function (e) {
    var user = $("input[id=name]").val();
    ss.addUser(user)
    console.log(ss.showList())
    e.preventDefault()
    $("input[id=name]").val("")
  });
});