const puppeteer = require('puppeteer');

(async () => {
    // This line launches a new instance of the Chrome or Chromium browser using Puppeteer.
    const browser = await puppeteer.launch()
    // This line creates a new page within the browser instance. The newPage() function returns a promise that resolves to a Page object.
    const page = await browser.newPage()
    //: This line navigates the page to the specified URL, in this case, 'https://www.google.com/'. The goto() function returns a promise that resolves when the navigation is complete.
    await page.goto('https://www.google.com/')
    //This line logs the message displayed in the dialog box to the console.
    page.on('dialog', async dialog => {
      console.log(dialog.message())
      await dialog.dismiss()
      //This line dismisses (closes) the dialog box. The dismiss() function returns a promise that resolves when the dialog is dismissed.
    })
    await page.evaluate(() => alert('This message is inside an alert box'))
    //This line evaluates the provided function in the context of the page. In this case, it triggers an alert box with the message 'This message is inside an alert box'. The evaluate() function returns a promise that resolves with the return value of the provided function.
    await browser.close()
    //The close() function returns a promise that resolves when the browser is successfully closed.
    
  })()
  