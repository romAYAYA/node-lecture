const Emitter = require('events')

const emitter = new Emitter()

const emitterCallback = (data, second, third) => {
  console.log('You sent a message ' + data)
  console.log('Second argument ' + second)
}

emitter.once('message', emitterCallback)

emitter.emit('message')
emitter.emit('message')
emitter.emit('message')
emitter.emit('message')

emitter.removeAllListeners()
emitter.removeListener('message', emitterCallback)

// const MESSAGE = process.env.message || ''

// if (MESSAGE) {
//   emitter.emit('message', MESSAGE, 123)
// } else {
//   emitter.emit('message', 'You didnt write a message')
// }

//  Как использовать удобно?
// http
// websockets
// long pulling
// cluster
