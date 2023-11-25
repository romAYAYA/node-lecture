import * as uuid from 'uuid'
import * as path from 'path'
import * as fs from 'fs';

class FileService {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + '.jpg'
      const filePath = path.resolve('static', fileName)

      const readStream = fs.createReadStream(file.path)
      const writeStream = fs.createWriteStream(filePath)

      readStream.pipe(writeStream)

      writeStream.on('close', () => {
        fs.unlinkSync(file.path)
      })

      return fileName
    } catch (err) {
      console.error(err)
    }
  }
}

export default new FileService()
