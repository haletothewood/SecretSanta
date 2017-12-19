(function (exports) {
  exports.SecretSanta = function () {

    var list = []

    function showList() {
      return list;
    }

    function addUser(user) {
      list.push(user)
      return user
    }

    function pickUser() {
      var randomUser = list[Math.floor(Math.random() * list.length)];
      return randomUser
    }

    return {
      showList: showList,
      addUser: addUser,
      pickUser: pickUser
    }
  };
})(this);