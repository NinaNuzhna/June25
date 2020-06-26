// const {expect} = require('chai');
//
// describe('Amazon registration page', () => {
//
//     before(() => {
//         browser.maximizeWindow();
//         browser.deleteAllCookies();
//         browser.url('https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Dnav_logo%2F%3F_encoding%3DUTF8%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&')
//     });
//
//     it('should Title be "Amazon Registration"', function () {
//         const Title = browser.getTitle();
//         expect(Title).eq('Amazon Registration');
//     });
//
//     it('should text "Create account" is present', function () {
//         const textHeader = $('//h1');
//         const actualText = textHeader.getText();
//         expect(actualText).eq('Create account');
//     });
//
//     it('should YOUR NAME text present', function () {
//         const textName = $('//div[@class="a-row a-spacing-base"]/label[@for="ap_customer_name"]');
//         const actualName = textName.getText();
//         const expectedName = 'Your name';
//         expect(actualName).eq(expectedName);
//     });
//
//     it('should fill YOUR NAME field', function () {
//         const inputName = $('//input[@id="ap_customer_name"]');
//         inputName.setValue('Nina Ne');
//         //browser.pause(1000);
//         const actualInpName = inputName.getValue();
//         expect(actualInpName).eq('Nina Ne');
//     });
//
//     it('should EMAIL text present', function () {
//         const textEmail = $('//label[@for="ap_email"]');
//         const actualTextEmail = textEmail.getText();
//         const expectedTextEmail = 'Email';
//         expect(actualTextEmail).eq(expectedTextEmail);
//     });
//
//     it ('should fill EMAIL field', function () {
//         const inputEmail = $('//input[@id="ap_email"]');
//         inputEmail.setValue('nn@tut.by');
//         //browser.pause(1000);
//         const actualeInputEmail = inputEmail.getValue();
//         expect(actualeInputEmail).eq('nn@tut.by');
//     });
//
//     it ('should PASSWORD text present', function () {
//         const passwordText = $('//label[@for="ap_password"]');
//         const actualpasswordText = passwordText.getText();
//         expect(actualpasswordText).eq('Password');
//     });
//
//     it ('should fill PASSWORD field', function () {
//         const inputPassword = $('//input[@id="ap_password"]');
//         inputPassword.setValue('qwe123');
//        // browser.pause(1000);
//         const actualeInputPassword = inputPassword.getValue();
//         expect(actualeInputPassword).eq('qwe123');
//     });
//
//     it ('should I icon be displayed', function () {
//         const iIcon = $('//div[@class="a-box a-alert-inline a-alert-inline-info auth-inlined-information-message a-spacing-top-mini"]//i');
//         const resultIcon = iIcon.isDisplayed();
//         expect(resultIcon).true;
//     });
//
//     it ('should display alert massege that input must be at least 6 char', function () {
//         const pasAlert = $('//div[contains(@class,"a-box a-alert-inline a-alert-inline-info ")]//div[@class="a-alert-content"]');
//         const actualPasAlert = pasAlert.getText();
//         const expectedPasAlert = 'Passwords must be at least 6 characters.';
//         expect(actualPasAlert).eq(expectedPasAlert);
//     })
//
//     it ('should RE-ENTER PASSWORD text present', function () {
//         const rePasswordText = $('//label[@for="ap_password_check"]');
//         const actualRepasswordText = rePasswordText.getText();
//         expect(actualRepasswordText).eq('Re-enter password');
//     });
//
//     it ('sould fill RE-ENTER PASSWORD field', function () {
//         const inputRePassword = $('//input[@id="ap_password_check"]');
//         inputRePassword.setValue('qwe123');
//         const actualInputRePas = inputRePassword.getValue();
//         expect(actualInputRePas).eq('qwe123');
//     });
//
//     it('should submit button have text "Create your Amazon account"', function () {
//         const submBtnT = $('//span[@id="a-autoid-0-announce"]');
//         const actualSubmBtn = submBtnT.getText();
//         const expectedSubmBtn = "Create your Amazon account";
//         expect(actualSubmBtn).eq(expectedSubmBtn);
//     });
//
//     it('should submit button be clickable', function () {
//         const submBtn = $('//input[@id="continue"]');
//         const result = submBtn.isClickable();
//         expect(result).true;
//     });


// });