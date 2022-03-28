describe("Navigation", () => {
  it("should logged in successfully", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#email")
      .type("tony@gmail.com")
      .should("have.value", "tony@gmail.com");
    cy.get("#password").type("123").should("have.value", "123");

    cy.contains("Login/Register").click();
    cy.wait(2000);

    cy.contains("Welcome tony@gmail.com").should("exist");
  });
});
