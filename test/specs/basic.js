// const {expect} = require('chai'); // деструктуризация объекта массива

//babel - переводит новый JS в старый
// если babel есть, то пишем import, если нет , то require


// describe.skip('Main page', () =>{
//
//     it('should Title main page is present and correct text', function () {
//         browser.url('https://stage.pasv.us/');
//         const titleProgressMonitor = "//span[@id='site-name']";
//         const actualText = $(titleProgressMonitor).getText();
//         expect(actualText).toEqual('Progress Monitor');
//     });
//     it('should Title main page is clickable', function () {
//         const titleProgressMonitor = $("//span[@id='site-name']");
//         const result = titleProgressMonitor.isClickable(); // True  False
//         expect(result).toEqual(true);
//     });
//     it('should Login button is clickable', function () {
//         const loginButton = $("//a[@qa='login-link']");
//         const result = loginButton.isClickable();
//         expect(result).toEqual(true);
//     });
//     it('should Login btn text is "Login"', function () {
//         const loginButton = $("//a[@qa='login-link']");
//         const textOfLoginBtn = loginButton.getText();
//         expect(textOfLoginBtn).toEqual('Login');
//     });
// })

// 1. Open Url
// 2. Input
// 3. Submit
//
// describe.skip('REGISTRATION PAGE', () => {
//     before( ()=>{
//       browser.maximizeWindow()
//       browser.url('https://stage.pasv.us/user/register');
//     })
//
//     it ( 'should title is correct', function() {
//        const actualText = $('//h1').getText();
//        const expectedText = 'User Register';
//        expect(actualText).eq(expectedText);
//     });
//
//     it ( 'should Submit button is not clickable', function() {
//         const submitButton = $('//button[@type="submit"]');
//         const result = submitButton.isClickable;
//         expect(result).true;
//     });
//
//     it ('should fill out firstName field ', function () {
//         const inputFirstName = $('//input[@name="firstName"]');
//         inputFirstName.setValue('Egor'); // add - заполняет пустое поле, set - очищает предидущее значение и вбивает новое
//     });
//
//     it ('should input first name is valid', function () {
//         const inputFirstName = $('//input[@name="firstName"]');
//         browser.keys('Tab');
//         browser.pause (5000);
//         const result = inputFirstName.getAttribute('class');
//         // console.log(++++++++++++++++++);
//         // console.log(result);
//         expect(result).contains('is-valid');
//     });
//
//     it ('should fill out lastName field', function () {
//         const inputFirstName = $('//input[@name="lastName"]');
//         inputFirstName.setValue('Nenuzh'); // add - заполняет пустое поле, set - очищает предидущее значение и вбивает новое
//     });
//
//     it ('should input lastName is valid', function () {
//         const inputLastName = $('//input[@name = "lastName"]');
//         browser.keys('Tab');
//         browser.pause (5000);
//         const result = inputLastName.getAttribute('class');
//         // console.log(++++++++++++++++++);
//         // console.log(result);
//         expect(result).contains('is-valid');
//     });
//
//     it ('should fill out Email field', function () {
//         const inputEmail = $('//input[@name = "email"]');
//         inputEmail.setValue('nina@gmail.com'); // add - заполняет пустое поле, set - очищает предидущее значение и вбивает новое
//     });
//
//     it ('should input Email is valid', function () {
//         const inputEmail = $('//input[@name = "email"]');
//         browser.keys('Tab');
//         browser.pause (5000);
//         const result = inputEmail.getAttribute('class');
//         expect(result).contains('is-valid');
//     });
//
//     it ('should fill out password field', function () {
//         const inputPas = $('//input[@name = "password"]');
//         inputPas.setValue('123'); // add - заполняет пустое поле, set - очищает предидущее значение и вбивает новое
//     });
//
//     it ('should input password is valid', function () {
//         const inputPas = $('//input[@name = "password"]');
//         browser.keys('Tab');
//         browser.pause (5000);
//         const result = inputPas.getAttribute('class');
//         expect(result).contains('is-valid');
//     });
//
//     it ( 'should Submit button is not clickable', function() {
//         const submitButton = $('//button[@type="submit"]');
//         const result = submitButton.isClickable;
//         expect(result).true;
//         browser.pause(1000)
//     });
//
// });


// describe('EDIT PROFILE', ()=>{
//         before(() => {
//             browser.maximizeWindow();
//             browser.url('https://stage.pasv.us/user/login');
//             $("//input[@name='email']").setValue('shapovalovihorolegovich@gmail.com');
//             $("//input[@name='password']").setValue('2804915wwW');
//             $("//button[@type='submit']").click();
//             $('//div[@id="user-section"]//a[@class="dropdown-toggle nav-link"]').click();
//             $("//button[text()='Settings']").click;
//         });
//
//         it('should', function () {
//             $("//select[@name='tShirtSize']").selectByVisibleText('Men/Unisex - XL');
//             browser.pause(2000);
//         });
//
//     });
//     it
// })














