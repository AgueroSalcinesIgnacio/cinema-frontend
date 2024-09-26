/// <reference types="cypress" />

describe("login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000");
  });

  it("login has email and password fields", () => {
    cy.get("#email").should("exist");
    cy.get("#password").should("exist");
    cy.get("#login").should("exist");

    cy.get("#email").type("test@example.com");
    cy.get("#password").type("1234");
    cy.get("#login").click();

    // jump to movies screen
    cy.get(".MuiDataGrid-root").should("exist");
  });
});
