(function (exports) {
  exports.SecretSanta = function () {

    var list = []

    function showList() {
      return list;
    }

    function addUser(user) {
      list.push(user)
    }

    return {
      showList: showList,
      addUser: addUser
    }
  };
})(this);