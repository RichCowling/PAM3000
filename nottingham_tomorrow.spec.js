describe('MetaWeather API - Nottingham, Tomorrow):', () => {
  
  var service_url = 'https://www.metaweather.com/api/location/';

  var response;  
  
  //initialise some dates -   
  //remembering that indexes start at zero and that getDate returns day of month rather than getDay which returns day of week 
  var date = new Date();
  date.setDate(date.getDate() + 1); // make it tomorrow
  var day = date.getDate();
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // adding 1 as index starts at zero, therefore getMonth returns last month.
  var nottingham = '30720'; // this is the YAHOO WOEID Where On Earth ID for Nottingham 
  var request_url = service_url + 
                    nottingham + 
                    '/' + year.toString() +
                    '/' + month.toString() +
                    '/' + day + '/';

  it('Check Header', () => {
    response = cy.request(request_url)
    response.its('headers')
    .its('content-type')
    .should('include', 'application/json')
  })

  it('Check Status', () => {
    response = cy.request(request_url)
    response.its('status')
   .should('equal', 200);
  })

  it('Check Body', () => {
    response = cy.request(request_url)
    response.its('body')
    .should('not.be.empty');
  })

  // should probably test that body fields exist as expected?
  // whilst we think about that ... going to go do some additional feature files for bad requests ...
  
})
