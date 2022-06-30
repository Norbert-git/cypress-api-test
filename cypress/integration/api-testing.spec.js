describe("Testing API using POST", () => {
  // use postman to find the correct url
  it("write to database and check for status 201", () => {
    // don't have to visit the site to test the api
    cy.visit("/")

    cy.request({
      method: "POST",
      url: "/api/correctURL",
      // POST method will write the name "abcd" to database
      body: {
        name: "abcd",
      },
      // name the returned data something simple
    }).then((returnedData) => {
      expect(returnedData.status).to.eq(201)
      // use postman to find the tree path to light or anything else
      expect(returnedData.body.light).to.be.false
      // next line will check if the ID contains numbers
      assert.isNumber(returnedData.body.id)
    })
  })
})
