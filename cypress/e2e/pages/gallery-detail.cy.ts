describe("gallery detail page", () => {
  beforeEach(() => {
    cy.visit("/gallery/");
    cy.get(".row > :nth-child(1)").click();
  });

  it("onScrollBottom should call load more photos API", () => {
    cy.intercept({
      pathname: "/.netlify/functions/fb-albums-api",
    }).as("loadMoreAPI");

    // wait for scroll event handler to be attached.
    cy.wait(500);

    cy.get(".container > :nth-child(2) > :nth-child(1)")
      .find("img")
      .as("photoElements");

    cy.get("@photoElements")
      .its("length")
      .then((initialLength) => {
        cy.get(".c-photo-album__load-more").scrollIntoView();

        cy.wait("@loadMoreAPI");

        // TODO: find a way to reset the state of gallery detail page so that this assertion can be in a seperate 'it' block
        // should increase count of photo elements
        cy.get(".container > :nth-child(2) > :nth-child(1)")
          .find("img")
          .its("length")
          .should("be.gt", initialLength);
      });
  });
});
