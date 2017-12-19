(function (exports) {
  exports.SecretSanta = function () {

    var list = []

    function showList() {
      return list;
    }

    function addUser(user) {
      list.push(user)
      console.log(list)
      return user
    }

    function pickUser(currentUser) {
      while (true) {
        var randomUser = list[Math.floor(Math.random() * list.length)];
        if (randomUser !== currentUser) {
          break;
        }
      }
      return randomUser
    }

    return {
      showList: showList,
      addUser: addUser,
      pickUser: pickUser
    }
  };
})(this);