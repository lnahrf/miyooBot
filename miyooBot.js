const { schedulePuppeteer } = require('./modules/schedule')

console.log('Script started, I will check every minute and alert if Miyoo Mini V3 is in stock')
console.log('Keep this window open, it will update every minute (press CTRL+C to exit) \n')

schedulePuppeteer()
