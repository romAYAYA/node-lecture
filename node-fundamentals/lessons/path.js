const path = require('path')

console.log(
  'Склеить участки пути',
  path.join(__dirname, 'first', 'second', '..')
)
console.log('Склеить участки пути', path.resolve('/Desktop', 'second.js'))

const fullPath = path.resolve()
console.log('Парсинг пути', path.parse(fullPath))
console.log('разделить в ОС', path.sep)
console.log('проверка на абсолютный путь', path.isAbsolute('lessons'))
console.log('название файла', path.basename(fullPath))
console.log('расширение файла', path.extname(fullPath))

const siteUrl = 'http://localhost:8080/users?id=5132'

const url = new URL(siteUrl)
console.log(url)
