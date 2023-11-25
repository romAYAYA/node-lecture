// Readable - чтение
// Writable - запись
// Duplex - для чтения и записей
// Transform - Такой же как Duplex, но может изменить данные по мере чтения

const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'data.txt'), (err, data) => {
//   if (err) {
//     throw err
//   }
//   console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'data.txt'), {
//   encoding: 'utf-8',
// })

// // Один чанк по дефолту 64 кб

// stream.on('data', (chunk) => {
//   console.log(chunk)
// })

// stream.on('end', () => console.log('End reading'))
// stream.on('open', () => console.log('Began reading'))
// stream.on('error', (err) => console.log(err))

const writableStream = fs.createWriteStream(
  path.resolve(__dirname, 'data2.txt')
)

for (let i = 0; i < 20; i++) {
  writableStream.write(i + '\n')
}

// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error')

// const http = require('http')

// http.createServer((req, res) => {
//   // req - readble stream
//   // res - writable stream

//   const stream = fs.createReadStream(path.resolve(__dirname, 'data.txt'))

//   stream.pipe(res)
// })
