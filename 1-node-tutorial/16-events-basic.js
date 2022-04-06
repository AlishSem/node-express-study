const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
    console.log(`data recived`)
})
customEmitter.on('response', () => {
    console.log(`some other logic here`)
})



customEmitter.emit('response')

