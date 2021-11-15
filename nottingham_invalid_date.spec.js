describe('Testing of the Meta Weather API (Invalid Date):', () => {
 
  var service_url = 'https://www.metaweather.com/api/location/';
  var response;
  var nottingham = '30720'; // this is the YAHOO WOEID Where On Earth ID for Nottingham
  var request_url = service_url + nottingham + '/' + '0000'+ '/'+ '00'+ '/'+ '00';

  it('Check Header:', () => {
      response = cy.request({
     url: request_url,
     failOnStatusCode: false
     })
      response.its('headers')
      .its('content-type')
      .should('include', 'text/html')
  })

  it('Check Date Bad', () => {
     response = cy.request({
      url: request_url,
      failOnStatusCode: false
     })
       response.its('status')
      .should('equal', 500);
  })

  it('Check 404', () => {
      response = cy.request({
     url: request_url,
      failOnStatusCode: false
      })
      response.its('body')
      .should('not.be.empty')
      .and('include', 'something went wrong');
  })

})
