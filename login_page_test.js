const { kIsNormalizedAlready } = require("got/dist/source");
const { before } = require("lodash");

Feature('loginPageTest');

Before(({ I }) => {

    I.amOnPage('login-page');

});

Scenario('SuccessfulLoginWithFirstUser', ({ I }) => {
    I.fillField('log' , 'testuser');
    I.fillField('pwd', 'testuser');
    I.checkOption('rememberme');
    I.click('wp-submit');
    I.saveScreenshot('FirstUserSuccess.png');
    I.waitForClickable('#site-footer > div > a');

});


Scenario('SuccesfulLoginWithSecondUser', ({ I }) => {
    I.fillField('//*[@id="user_login"]','testuser1');
    I.fillField('//*[@id="user_pass"]','Mae9iGei6m');
    I.checkOption('//*[@id="rememberme"]');
    I.click('//*[@id="wp-submit"]');
    I.saveScreenshot('secondUserSuccess.png');
    I.waitForClickable('#site-footer > div > a');
});


