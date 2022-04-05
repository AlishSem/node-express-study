const os = require('os')

const user = os.userInfo()

//method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()}`)

const currnetOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currnetOS)