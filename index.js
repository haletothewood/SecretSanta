$(document).ready(function () {

  var ss = new SecretSanta();

  $('.add').click(function (e) {
    var name = $("input[id=name]").val();
    var email = $("input[id=email]").val();
    var user = {user: name, email: email}
    ss.addUser(user)
    e.preventDefault()
    $("input[id=name]").val("")
    $("input[id=email]").val("")
  });

  $('.pick').click(function (e) {
    var name = $("input[id=current-name]").val();
    console.log(ss.pickUser(name))
    e.preventDefault()
    $("input[id=current-name]").val("")
  });
});