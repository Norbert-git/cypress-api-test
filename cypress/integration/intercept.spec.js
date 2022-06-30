it("use intercept", () => {
  cy.intercept({
    method: "POST",
    url: "/api/correctURL",
  }).as("correctlyNamedData")

  cy.visit("/")

  cy.get("textField").type("message{enter}")

  cy.wait("@correctlyNamedData").then((dataName) => {
    expect(dataName.resposne.status).eq(201)
    // checking if the typed in text is the same
    expect(dataName.request.body.textfield).to.eq("message")
  })
})
