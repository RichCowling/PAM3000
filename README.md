# PAM3000
Quick exploration of a test framework and a REST API

Cypress test automation and the meta weather API

These Mocha / Chai feature files are for use with the Cypress automation testing framework. To install Cypress visit cypress.io and follow the instructions. These files go in the "integration" folder of the cypress folder structure. To then run Cypress follow the "Getting Started" instructions on cypress.io - but this is pretty much 'npx cypress open' which will launch the Cypress desktop. This tool will run your tests - with test run results appearing in a browser it detects you have available.

These files are the product of 3 hours work on a Monday afternoon - lots of that time was taken up by the installation of Cypress - but only because I had old versions of node.js and npm on my machine. I handn't used Cypress before - and haven't used javascript for a good many years. I lost lots of time trying to work out how dates work in javascript ...

Given more time I would discover how to create parameterised feature files - lots of code is repeated across the files - don't like that - but - new to this framework.

I chose Cypress after a quick look around at the frameworks available - and have wanted to look at it for a while. It looks like a swiss army knife for test automation - I like how I can use it like postman for exploration - and then find myself with feature files that are very readable chaina and I can run in CI etc.

I like how Cypress feature files can easily express tests that interact with webpages, web-services, and the system underneath (perhaps for a DB cleardown etc.) .... blending if required those interations - also just just getting my head around how Cypress claims to help you avoid flakiness - and non-determinism - and isn't webdriver based.

I would have looked for more tests to automate - yet I have been very time poor - and have not coded for years and years and years - so quite rusty technically.


