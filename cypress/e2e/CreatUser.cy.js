const user = require('../fixtures/user.json');
const { id, username, firstName, lastName, email, password, phone, userStatus } = user;

describe("API user tests", () => {
  it("Should create a new user", () => {
    cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus)
      .then((response) => {  
        expect(response.status).to.eql(200); 
      });
  });

  it("Should update user", () => {
    cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus)
      .then(() => {
        cy.updateUser(id[1], username, firstName, lastName, email, password, phone, userStatus)
          .then((response) => {  
            expect(response.body.message).to.equal("177"); 
          });
      });
  });

  it("Should delete user", () => {
    cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus)
      .then(() => {
        cy.deleteUser(username)
          .then((response) => {  
            expect(response.status).to.eql(200);
          });
      });
  });
});
