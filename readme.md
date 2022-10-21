### miyooBot is a NodeJS (with Puppeteer) script that alerts if the Miyoo Mini v3 is available in the Aliexpress official store.

## Examples

<img src="https://raw.githubusercontent.com/tk-ni/miyooBot/master/assets/cli_example_full.jpg">

<img src="https://raw.githubusercontent.com/tk-ni/miyooBot/master/assets/cli_available_example.jpg">

<img src="https://raw.githubusercontent.com/tk-ni/miyooBot/master/assets/notification_image.jpg" width="300px">

## Installation

### Prerequisites

In order to run MiyooBot you need to have **NodeJS installed** (v16.17.1+)

Download the official release version from https://nodejs.org/en/download/

### Verify Nodejs Installation

Open a terminal and run

```sh
node -v
```

If node is installed it should print 'v16.17.1' or whatever version you have installed

### Install miyooBot

To install miyooBot, clone the repository (or download a zipped version from
https://github.com/tk-ni/miyooBot/archive/refs/heads/master.zip)

Unzip it if necessary and open a terminal in the respected directory

```
cd miyooBot
```
Install the script's dependencies by running 

```
npm install
```

Finally run the miyooBot.js file using node or run npm start

```
node miyooBot.js
```

The script should now run, it will check the official Aliexpress store every minute and alert you if the Miyoo Mini v3 is in stock.

