const puppeteer = require('puppeteer');

(async ()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Create pdf from url 
    await page.goto('https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pdf');
    await page.pdf({ path: 'api.pdf', format: 'A4' })

    //create PDF from static HTML
    const htmlContent = `<body>
    <h1>An example static HTML to PDF</h1>
    </body>`
    await page.setContent(htmlContent);
    await page.pdf({ path: 'html.pdf', format: 'A4' })

    await browser.close()

})