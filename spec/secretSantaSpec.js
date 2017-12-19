describe("Secret Santa", function () {

  var user = "User"
  var ss = SecretSanta()

  it("adds users to a list", function () {
    ss.addUser(user)
    expect(ss.showList()).toContain(user)
  })

  it("can add multiple users to a list", function () {
    var user2 = "User2"
    var user3 = "User3"
    ss.addUser(user2)
    ss.addUser(user3)
    expect(ss.showList()).toContain(user, user2, user3)
  })
})