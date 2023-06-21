const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://trix-editor.org/')
  await page.focus('trix-editor')
  await page.keyboard.type('Just adding a title')
  await page.screenshot({ path: 'keyboard.png' })
  await browser.close()
})()
