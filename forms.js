const puppeteer = require('puppeteer');
(async () => {
 
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({width:1280 , height : 1800 });
    await page.goto('https://getbootstrap.com/docs/4.3/components/forms/#checkboxes-and-radios')
    const checkboxStatus = await page.$eval('#defaultCheck1', input => { return input.checked })
    console.log('Checkbox checked status:', checkboxStatus)
  

    const radios = await page.$$eval('input[name="exampleRadios"]', inputs => { return inputs.map(input => input.value) })
    console.log('Radio values:', radios)

    await page.goto('https://getbootstrap.com/docs/4.3/components/forms/#select-menu')

    const selectOptions = await page.$$eval('.bd-example > select.custom-select.custom-select-lg.mb-3 > option', options => { return options.map(option => option.value) })

    console.log(selectOptions)

    await browser.close()
  })()
  


//   page.$eval() function provided by Puppeteer. It retrieves the first element in the page that matches the CSS selector '#defaultCheck1' and evaluates the specified callback function on that element. The callback function receives the matched element as an argument (input),
//    and in this case, it returns the checked property of the input element. The value of  checkboxStatus will be a boolean indicating whether the checkbox is checked or not.

// const radios = await page.$$eval('input[name="exampleRadios"]', inputs => { return inputs.map(input => input.value) }): 
//This line uses the page.$$eval() function provided by Puppeteer. It retrieves all elements in the page that match the CSS selector 'input[name="exampleRadios"]' and evaluates the specified callback function on those elements. The callback function receives an array of matched elements (inputs), and in this case, it maps over the elements and returns an array of their values.
//  The resulting array (radios) will contain the values of all the matched input elements.



// const selectOptions = await page.$$eval('.bd-example > select.custom-select.custom-select-lg.mb-3 > option', options => { return options.map(option => option.value) }):
// This line uses the page.$$eval() function provided by Puppeteer. It retrieves all elements in the page that match the CSS selector '.bd-example > select.custom-select.custom-select-lg.mb-3 > option' and evaluates the specified callback function on those elements. The callback function receives an array of matched elements (options), and in this case, it maps over the elements and returns an array of their values. The resulting array (selectOptions) will contain the values of all the matched <option> elements.