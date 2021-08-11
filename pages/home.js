const locators = require('../utils/locators.json')
const {By, Key, until} = require('selenium-webdriver');

class HomePage {
    constructor(){
        this.loginButton = locators.header.loginButton;
        this.shopNowButton = locators.homePage.shopNowButton;
    }
    
    async clickLoignButton(driver) {
        await driver.wait(until.elementLocated(By.xpath(this.loginButton)), 5000).click();
    }

    async clickShopButton(driver) {
        await driver.wait(until.elementLocated(By.xpath(this.shopNowButton)), 5000).click();
    }
    
}

module.exports = new HomePage()
