describe("gallery detail page", () => {
  context("onScrollBottom", () => {
    beforeEach(() => {
      cy.visit("/gallery/");
      cy.get(".row > :nth-child(1)").click();
    });

    it("should call load more photos API", () => {
      cy.intercept({
        pathname: "/.netlify/functions/fb-albums-api",
      }).as("loadMoreAPI");

      cy.get(".c-photo-album__load-more").scrollIntoView();
      cy.wait("@loadMoreAPI").its("response.statusCode").should("eq", 200);
    });

    it("should increase count of photo elements", () => {
      cy.get(".container > :nth-child(2) > :nth-child(1)")
        .find("img")
        .its("length")
        .then((initialLength) => {
          cy.intercept({
            pathname: "/.netlify/functions/fb-albums-api",
          }).as("loadMoreAPI");

          cy.get(".c-photo-album__load-more").scrollIntoView();

          cy.wait("@loadMoreAPI");

          cy.get(".container > :nth-child(2) > :nth-child(1)")
            .find("img")
            .its("length")
            .should("be.gt", initialLength);
        });
    });
  });
});
