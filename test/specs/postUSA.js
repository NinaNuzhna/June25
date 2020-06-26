// const {expect} = require('chai');
// const loginPost = require('../loginPost');
//
// describe('Registrated Page', () => {
//     before(() => {
//         loginPost();
//     });
//
//     it('should click on Register/Sign in on the main page', function () {
//         $('//a[@id="login-register-header"]').click();
//     });
//
//     it('should verify that header is "Sign In To Your Account" ', function () {
//         const header = $('//h1');
//         const actualHeader = header.getText();
//         const expectedHeader = 'Sign In To Your Account';
//         expect(actualHeader).eq(expectedHeader);
//     });
//
//     it('shoul click Register on the Sign In page', function () {
//         $('//ul[@class="nav navbar-nav navbar-right smaller hidden-xs"]//a').click();
//     });
//
//     it('should verify that header is correct', function () {
//         const headerReg = $('//div[@class = "page-header-no-border"]/h1');
//         const actualeHeaderReg = headerReg.getText();
//         const expectedHeaderReg = 'Create Your USPS.com Account';
//         expect(actualeHeaderReg).eq(expectedHeaderReg);
//     });
//
//     // it('should choose a language preference', function () {
//     //     const langDropDown = $('#slanguage');
//     //     langDropDown.selectByVisibleText('Español');
//     // });
//
//     it('should select language', function () {
//         const langDropDown = $('#slanguage');
//         langDropDown.selectByVisibleText('English');
//         // browser.pause(1000);
//     });
//
//     it ('should enter username', function () {
//         const userName = $('#tuserName');
//         userName.setValue('Nina123');
//     });
//
//     it ('should enter password', function () {
//         const userPass = $('#tPassword');
//         userPass.setValue('1234567Mk@');
//     });
//
//     it ('should retype password', function () {
//         const userRePass = $('#tPasswordRetype');
//         userRePass.setValue('1234567Mk@');
//     });
//
//     it('should choose first question', function () {
//         const firstQuestion = $('#ssec1');
//         firstQuestion.selectByVisibleText('In what city were you born?');
//     });
//
//     it('should verify that first question is selected', function () {
//         const firstQuestion = $('#o1');
//        firstQuestion.scrollIntoView();
//         const result = firstQuestion.isSelected();
//         expect(result).true;
//         browser.pause(3000);
//     });
//
//     it('should input answer for first question', function () {
//         const answerFld = $('#tsecAnswer1');
//         answerFld.setValue('Tomsk');
//         browser.pause(3000);
//     });
//     it('should choose second question', function () {
//         const secondQuestion = $('#ssec2');
//         secondQuestion.selectByVisibleText('What is your favorite movie?');
//         browser.pause(3000);
//
//     });
//     it('should verify that second question is selected', function () {
//         const secondQuestion = $('//select[@id="ssec2"]/option[@value="5"]');
//         const result = secondQuestion.isSelected();
//         expect(result).true;
//         browser.pause(3000);
//     });
// })