const { before } = require("lodash");

Feature('loginPageTest');

Before(({ I }) => {

    I.amOnPage('login-page');

});

Scenario('test something', ({ I }) => {
    

});