describe("Secret Santa", function () {

  var user = "User"
  var ss = SecretSanta()

  it("adds users to a list", function () {
    expect(ss.showList()).toEqual(user)
  })
})