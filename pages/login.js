const locators = require('../utils/locators.json')
const {By, Key, until} = require('selenium-webdriver');

class loginPage {
    constructor(){
        this.emailInput = locators.loginPage.emailInput;
        this.passwordInput = locators.loginPage.passwordInput;
    }

    async loginWithValidCredentials(driver) {
        await driver.wait(until.elementLocated(By.xpath(this.emailInput)), 5000).sendKeys(locators.credentials.valildEmail)
        await driver.wait(until.elementLocated(By.xpath(this.passwordInput)), 5000).sendKeys(locators.credentials.valildPassword, Key.ENTER)
    }
}

module.exports = new loginPage()