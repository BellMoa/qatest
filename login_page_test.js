const { kIsNormalizedAlready } = require("got/dist/source");
const { before } = require("lodash");

Feature('loginPageTest');

Before(({ I }) => {

    I.amOnPage('login-page');

});

Scenario('SuccessfulLogin', ({ I }) => {
    I.fillField('log' , 'testuser');
    I.fillField('pwd', 'testuser');
    I.checkOption('rememberme');
    I.click('wp-submit');
    I.saveScreenshot('success.png');
    I.waitForClickable('#site-footer > div > a');

});



