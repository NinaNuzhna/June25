function loginPost() {
    browser.maximizeWindow();
    browser.deleteAllCookies();
    browser.url('https://www.usps.com/');
}

module.exports = loginPost;