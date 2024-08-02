describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/gallery/");
    cy.get(".row > :nth-child(1)").click();
  });

  it("should visit page", () => {});

  describe("onScrollBottom", () => {
    it("should call load more photos API", () => {
      cy.intercept({
        pathname: "/.netlify/functions/fb-albums-api",
      }).as("loadMoreAPI");

      cy.get(".c-photo-album__load-more").scrollIntoView();
      cy.wait("@loadMoreAPI").its("response.statusCode").should("eq", 200);
    });
  });
});
