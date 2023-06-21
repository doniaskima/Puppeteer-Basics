const puppeteer = require('puppeteer');

(
    async () =>{
        const browser = await puppeteer.launch()
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 })
        await page.goto("https://blog.openreplay.com/forever-functional-complex-typing-in-typescript/")
        await page.screenshot({path:"article.png" , fullPage: true})
        await browser.close()
    }
)()