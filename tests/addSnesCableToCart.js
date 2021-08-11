const locators = require('../utils/locators.json')
const {Builder, By, Key, until, WebDriver} = require('selenium-webdriver');
require('chromedriver')
const homePage = require('../pages/home')
const productsList = require('../pages/productsList')
const productDetailPage = require('../pages/productDetail');

async function addSnesCableToCart() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.manage().window().maximize();
    await driver.get(locators.targetUrl);
    await homePage.clickShopButton(driver);
    await productsList.findSnesRetrovisionCable(driver);
    await productDetailPage.addSnesRetrovisionCable(driver);
}

async function showProduct(){
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.manage().window().maximize();
    await driver.get(locators.targetUrl);
    await homePage.clickShopButton(driver);
    await productsList.showProducts(driver);
}

addSnesCableToCart()
// showProduct()