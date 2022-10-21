const puppeteer = require('puppeteer')
const { outOfStock, noLongerAvailable } = require('../enums/messages')
const { AliexpressMobileURL } = require('../enums/urls')

module.exports = {
    checkStockAvailability: async () => {
        const browser = await puppeteer.launch({
            headless: true,
            defaultViewport: null,
            args: ['--lang=en-US', `--window-size=${480},${800}`, '--no-sandbox']
        })

        const pages = await browser.pages()
        const page = !pages[0] ? await browser.newPage() : pages[0]

        page.setDefaultNavigationTimeout(100000)

        await page.goto(AliexpressMobileURL, { waitUntil: 'networkidle2' })
        const content = await page.content()
        const available = !(content.includes(outOfStock) || content.includes(noLongerAvailable))

        await browser.close()
        return available
    }
}
