const {expect} = require('chai');
const login = require("../login");

describe('CREATE DAY REPORT', () => {

    before(() => {
        login();
    });

    it('should click on diary in main menu', function () {
        $("//div[@id='site-menu']//a[@qa='diary-link']").click();
    });

    it('should Title is correct', function () {
        const actualTitle = $("//h1").getText();
        expect(actualTitle).eq('Daily reports')
    });

    it('should Button create day report is clickable', function () {
        const dayReportBtn = $("//a[@qa='create-day-report-button']");
        browser.pause(1000);
        const actualResult = dayReportBtn.isClickable();
        expect(actualResult).true;
    });

    it('should click on day report btn', function () {
        $("//a[@qa='create-day-report-button']").click();
    });

    it('should click I UNDERSTOOD EVERYTHING', function () {
        const elem = $("//input[@id='input-2']");
        elem.click();
        expect(elem.isSelected()).true
    });

    it('should click on check box Helped classmates', function () {
        const elem = $("//label[@for='input-3']");
        elem.click();
        const res = $("//input[@id='input-3']");
        expect(res.isSelected()).true;
        browser.pause(2000)
    });

});
