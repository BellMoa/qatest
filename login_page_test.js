Feature('loginPageTest');

Before(({ I }) => {

    I.amOnPage('login-page');

});

Scenario('SuccessLoginWithCreatedUser', ({ I }) => {
    I.fillField('log' , 'testuser');
    I.fillField('pwd', 'testuser');
    I.checkOption('rememberme');
    I.click('wp-submit');
    I.saveScreenshot('FirstUserSuccess.png');
    I.waitForClickable('#site-footer > div > a');

});


Scenario('SuccessLoginWithSecondCreatedU', ({ I }) => {
    I.fillField('//*[@id="user_login"]','testuser1');
    I.fillField('//*[@id="user_pass"]','Mae9iGei6m');
    I.checkOption('//*[@id="rememberme"]');
    I.click('//*[@id="wp-submit"]');
    I.saveScreenshot('secondUserSuccess.png');
    I.waitForClickable('#site-footer > div > a');
});

