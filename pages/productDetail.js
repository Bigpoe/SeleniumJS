const locators = require('../utils/locators.json')
const {By, Key, until} = require('selenium-webdriver');

class ProductDetailPage {
    constructor(){
        this.preorderButton = locators.productDetail.preorderButton;
        this.addToCardButton = locators.productDetail.addToCardButton
        this.tvDisclaimer = locators.productDetail.tvDisclaimer;
    }

    async addSnesRetrovisionCable(driver) {
        await driver.wait(until.elementLocated(By.xpath(this.tvDisclaimer)), 5000).click()
        await driver.wait(until.elementLocated(By.xpath(this.addToCardButton)), 5000).click()
    }
}

module.exports = new ProductDetailPage()
