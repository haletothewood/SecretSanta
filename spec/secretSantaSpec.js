describe("Secret Santa", function () {

  var user = "User"
  var ss = SecretSanta()

  it("adds users to a list", function () {
    ss.addUser(user)
    expect(ss.showList()).toContain(user)
  })
})