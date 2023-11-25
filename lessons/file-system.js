const fs = require('fs')
const path = require('path')

// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2'), { recursive: true })
// console.log('start')

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('папка создана')
// })

// console.log('end')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     throw err
//   }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 xyu chleni', (err) => {
//   if (err) {
//     throw err
//   }
//   console.log('File was written')

//   fs.appendFile(
//     path.resolve(__dirname, 'test.txt'),
//     ' penises rewrote',
//     (err) => {
//       if (err) {
//         throw err
//       }
//       console.log('Wiw, it worked')
//     }
//   )
// }) // ад колбеков. welcome to the dermovi code

const writeFileAsync = async (path, data) => {
  return new Promise((res, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }
      res()
    })
  )
}

const appendFileAsync = async (path, data) => {
  return new Promise((res, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }
      res()
    })
  )
}

const readFileAsync = async (path) => {
  return new Promise((res, reject) =>
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(err.message)
      }
      res(data)
    })
  )
}

const removeFileAsync = async (path) => {
  return new Promise((res, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message)
      }
      res()
    })
  )
}

// writeFileAsync(path.resolve(__dirname, 'test2.txt'), 'data')
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test2.txt'), '123'))
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test2.txt'), '534'))
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test2.txt'), '12445345'))
//   .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// removeFileAsync(path.resolve(__dirname, 'test.txt')).then(() =>
//   console.log('file removed')
// )


const text = '23 43 12 654 345 23 roma'

writeFileAsync(path.resolve(__dirname, 'test3.txt'), text)
  .then(() => readFileAsync(path.resolve(__dirname, 'test3.txt')))
  .then((data) => data.split(' ').length)
  .then((count) =>
    writeFileAsync(
      path.resolve(__dirname, 'count.txt'),
      `Count of words ${count}`
    )
  )
  .then(() => removeFileAsync(path.resolve(__dirname, 'test3.txt')))
