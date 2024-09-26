/// <reference types="cypress" />

import { mount } from "cypress/react18";
import MoviesTable from "./MoviesTable";

describe("<MoviesTable />", () => {
  it("empty", () => {
    mount(<MoviesTable movies={[]} />);
    cy.get(".MuiDataGrid-root").should("not.exist");
    cy.get("#no-data").should("exist");
  });

  it("filled", () => {
    mount(
      <MoviesTable
        movies={[{ id: 1, rating: 5.5, releaseYear: 2024, title: "test" }]}
      />
    );
    cy.get(".MuiDataGrid-root").should("exist");
  });
});
