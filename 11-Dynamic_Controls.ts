import { step, TestSettings, Until, By, Device } from '@flood/element'
import * as assert from 'assert'

export const settings: TestSettings = {
  clearCache: false,
  disableCache: false,
  clearCookies: false,
  loopCount: 1,
  duration: -1,
  actionDelay: 1.5,
  stepDelay: 3,
  waitTimeout: 60,
  screenshotOnFailure: true,
  DOMSnapshotOnFailure: true
}

/**
 * Author: Antonio Jimenez : antonio@flood.io
 * The Heroku App
 * @version 1.0
*/

export default () => {

  step('Test: 01 - Homepage', async browser => {

    await browser.visit('http://18.208.170.2:7080/')
    await browser.wait(Until.elementIsVisible(By.css('#content > h1')))
    let pageTextVerify = By.visibleText('Welcome to the-internet')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

  })

  step('Test: 02 - Dynamic Controls', async browser => {
  
    let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(11) > a'))
    await linkHref.click()
    await browser.wait(Until.elementIsVisible(By.css('#checkbox-example > button')))
    let pageTextVerify = By.visibleText('Dynamic Controls')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

  })

  step('Test: 03 - Dynamic Controls - Checkbox Remove', async browser => {

    let Checkbox = await browser.findElement(By.css('#checkbox > input[type=checkbox]'))
    await Checkbox.click()
    let Remove = await browser.findElement(By.css('#checkbox-example > button'))
    await Remove.click()

  })

  step('Test: 04 - Dynamic Controls - Add', async browser => {

    let pageTextVerify = By.visibleText("It's gone!")
    await browser.wait(Until.elementIsVisible(pageTextVerify))
    let Remove = await browser.findElement(By.css('#checkbox-example > button'))
    await Remove.click()

  })

  step('Test: 05 - Dynamic Controls - Is Back!', async browser => {

    let pageTextVerify = By.visibleText("It's back!")
    await browser.wait(Until.elementIsVisible(pageTextVerify))

  })

}