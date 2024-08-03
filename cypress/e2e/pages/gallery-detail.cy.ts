describe("gallery detail page", () => {
  beforeEach(() => {
    cy.visit("/gallery/");
    cy.get(".row:nth-of-type(1) > :nth-child(1)").as("firstAlbum").click();
    cy.intercept({
      pathname: "/.netlify/functions/fb-albums-api",
    }).as("loadMoreAPI");
  });

  it("onScrollBottom should call load more photos API", () => {
    // wait for photos to load
    cy.wait(2500);

    cy.get(".c-photo-album__load-more").scrollIntoView();

    cy.wait("@loadMoreAPI");
  });

  it("clicking load more button should insert additional img elements", () => {
    cy.get(".container > :nth-child(2) > :nth-child(1)")
      .find("img")
      .its("length")
      .then((initialLength) => {
        cy.get(".c-photo-album__load-more").click();

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
