const schedule = require('node-schedule')
const notifier = require('node-notifier')
const { AliexpressURL } = require('../enums/urls')
const { getCurrentDateTime } = require('./date')
const { checkStockAvailability } = require('./puppeteer')

module.exports = {
    schedulePuppeteer: async () => {
        /**
         * @ Every minute
         * Checks availability using puppeteer and alerts if available
         */
        schedule.scheduleJob('* * * * *', async () => {
            console.log(`${getCurrentDateTime()} Checking availability...`)

            const available = await checkStockAvailability()
            if (!available) return console.log('Not available, will retry in a minute \n')

            const content = `Miyoo Mini V3 is available now! go to ${AliexpressURL}`
            console.log('\x1b[42m' + content + '\x1b[0m')

            try {
                notifier.notify({
                    title: 'MiyooBot',
                    message: 'Miyoo Mini V3 is available now!',
                    sound: true
                })
            } catch (err) {
                return console.error('Failed to send OS notification')
            }
        })
    }
}
