const puppeteer = require('puppeteer');

(
    async()=>{
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto('https://medium.com/@doniaskima344/dockerize-your-node-js-app-a-comprehensive-guide-to-containerization-d58e6624fb6f')
        const title = await page.title()
        console.log(title)
        await browser.close()
    }
)()