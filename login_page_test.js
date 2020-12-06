Feature('loginPageTest');

Before(({ I }) => {

    I.amOnPage('login-page');

});

Scenario('Checking the login form when using an existing user', ({ I }) => {
    I.fillField('log' , 'testuser');
    I.fillField('pwd', 'testuser');
    I.checkOption('rememberme');
    I.click('wp-submit');
    I.saveScreenshot('FirstUserSuccess.png');
    I.waitForClickable('#site-footer > div > a');

});


Scenario('Checking the login form when using the second existing user', ({ I }) => {
    I.fillField('//*[@id="user_login"]','testuser1');
    I.fillField('//*[@id="user_pass"]','Mae9iGei6m');
    I.checkOption('//*[@id="rememberme"]');
    I.click('//*[@id="wp-submit"]');
    I.saveScreenshot('secondUserSuccess.png');
    I.waitForClickable('#site-footer > div > a');
});


