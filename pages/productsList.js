const locators = require('../utils/locators.json')
const {By, Key, until} = require('selenium-webdriver');

class ProductsListPage {
    constructor(){
        this.productsList = locators.productList.productsList
        this.manufacturerList = locators.productList.manufacturerList
        this.hdRetrovisionManufacturer = locators.header.hdRetrovisionManufacturer
        this.searchIcon = locators.header.searchIcon
        this.searchbox = locators.header.searchbox
        this.snesRetrovisionCable = locators.productList.snesRetrovisionCable
    }


    async findSnesRetrovisionCable(driver){
        await driver.sleep(2000);
        await console.log('Hi there')
        await driver.findElement(By.xpath(this.searchIcon)).click()
        await driver.findElement(By.xpath(this.searchbox)).sendKeys('retrovision', Key.ENTER)
        await driver.wait(until.elementLocated(By.xpath(this.snesRetrovisionCable)), 5000).click()
    }
    
    
    async showProducts(driver){
        await driver.sleep(2000);
        let products = await driver.findElements(By.xpath(this.productsList))
        console.log(await products.getAttribute('textContent'))
    }

    
    async findRetrovision(driver) { 
        await driver.sleep(2000);
        // await driver.wait(until.elementLocated(By.xpath(this.hdRetrovisionManufacturer)), 5000).click()


        
        let text = await driver.executeScript("arguments[0].scrollIntoView();", this.hdRetrovisionManufacturer);
        console.log(text)

        // let manufacturer = await driver.wait(until.elementLocated(By.xpath(this.hdRetrovisionManufacturer)), 5000)
        // console.log(manufacturer)

        // let retro_snes = await driver.wait(until.elementLocated(By.xpath(this.snesRetrovisionCable)), 5000)
        // await retro_snes.click()

        // await driver.wait(until.elementLocated(By.css('h3')), 10000);
        // console.log(title.getAttribute('textContent'))
        
        // await driver.findElement(By.xpath(this.searchIcon)).sendKeys('retrovision', Key.ENTER);

    //     await driver.actions({async: true})
    //         .move({origin:this.hdRetrovisionManufacturer})
    //         .perform();
        // await (driver.findElement(By.xpath(this.hdRetrovisionManufacturer))).click();
        // retrovision = driver.findElement(By.xpath(this.snesRetrovisionCable))
        // console.log(await retrovision)
        // await (driver.findElement(By.xpath(this.snesRetrovisionCable))).click()
        
    }
}

module.exports = new ProductsListPage()
