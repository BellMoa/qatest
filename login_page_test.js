Feature('loginPageTest');

Before(({ I }) => {

    I.amOnPage('login-page');

});

// Scenario('Checking the login form when using an existing user', ({ I }) => {
//     I.fillField('log' , 'testuser');
//     I.fillField('pwd', 'testuser');
//     I.checkOption('rememberme');
//     I.click('wp-submit');
//     I.saveScreenshot('FirstUserSuccess.png');
//     I.waitForClickable('#site-footer > div > a');

// });


// Scenario('Checking the login form when using the second existing user', ({ I }) => {
//     I.fillField('//*[@id="user_login"]','testuser1');
//     I.fillField('//*[@id="user_pass"]','Mae9iGei6m');
//     I.checkOption('//*[@id="rememberme"]');
//     I.click('//*[@id="wp-submit"]');
//     I.saveScreenshot('secondUserSuccess.png');
//     I.waitForClickable('#site-footer > div > a');
// });


// Scenario('Checking the login form when a non-existent user is used', ({ I }) => {
//     I.fillField('//*[@id="user_login"]','elvin');
//     I.fillField('//*[@id="user_pass"]','13247');
//     I.checkOption('//*[@id="rememberme"]');
//     I.click('//*[@id="wp-submit"]');
//     I.waitForText('Unknown username.');
//     I.saveScreenshot('LoginWithNonExistentUser.png');
// });

// Scenario('Checking the login form when using an existing user and incorrect password.', ({ I }) => {
//     I.fillField('//*[@id="user_login"]','testuser1');
//     I.fillField('//*[@id="user_pass"]','Teechaep8a');
//     I.checkOption('//*[@id="rememberme"]');
//     I.click('//*[@id="wp-submit"]');
//     I.waitForText('Lost your password?');
//     I.saveScreenshot('LoginWithExistentUserAndIncorrectPassword.png');

// });

Scenario('Checking the login form when using an existing user and an empty password', ({ I }) => {

    I.fillField('//*[@id="user_login"]','testuser1');
    I.fillField('//*[@id="user_pass"]','');
    I.checkOption('//*[@id="rememberme"]');
    I.click('//*[@id="wp-submit"]');
    I.waitForText('The password field is empty.');
    I.saveScreenshot('LoginWithExistentUserAndEmptyPassword.png');
});