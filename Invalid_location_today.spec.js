describe('MetaWeather API - Invalid Location, Today):', () => {
  
    var service_url = 'https://www.metaweather.com/api/location/';
  
    var response;  
    
    var date = new Date();
    var day = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // adding 1 as index starts at zero, therefore getMonth returns last month.
    var nowhere = '000000'; // this is the YAHOO WOEID which is nonsense
   
    var request_url = service_url + 
                      nowhere + 
                      '/' + year.toString() +
                      '/' + month.toString() +
                      '/' + day + '/';

    it('Check Status', () => {
    response = cy.request({
        url: request_url,
        failOnStatusCode: false
    })
    response.its('status')
        .should('equal', 404);
    })
    
    it('Check Body', () => {
    response = cy.request({
        url: request_url,
        failOnStatusCode: false
    })
    response.its('body')
        .should('not.be.empty')
        .and('include', {detail: 'Not found.' });
    })
        
  })
  