describe("Secret Santa", function () {

  var user = "User"
  var user2 = "User2"
  var user3 = "User3"
  var ss = SecretSanta()

  it("adds users to a list", function () {
    ss.addUser(user)
    expect(ss.showList()).toContain(user)
  })

  it("can add multiple users to a list", function () {
    ss.addUser(user2)
    ss.addUser(user3)
    expect(ss.showList()).toContain(user, user2, user3)
  })

  it("picks a random user from a list", function () {
    expect([user, user2, user3]).toContain(ss.pickUser())
  })
})