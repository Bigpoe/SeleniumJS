const locators = require('../utils/locators.json')
const {Builder, By, Key, until, WebDriver} = require('selenium-webdriver');
require('chromedriver')
const homePage = require('../pages/home')
const loginPage = require('../pages/login')

async function loginToMyAccount() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get(locators.targetUrl);
    await homePage.clickLoignButton(driver);
    await loginPage.loginWithValidCredentials(driver);
}

loginToMyAccount()




