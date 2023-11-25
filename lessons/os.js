const os = require('os')
const cluster = require('cluster')

// if (cluster.isMaster) {
//   for (let i = 0; i < os.cpus().length - 2; i++) {
//     cluster.fork()
//   }
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker with pid = ${worker.process.pid} died`)
//     if (code === 'smth') {
//       cluster.fork()
//     } else {
//       console.log('Worker died...')
//     }
//   })
// } else {
//   console.log(`Worker with pid: ${process.pid} started`)

//   setInterval(() => {
//     console.log(`Worker with pid: ${process.pid} is still working`)
//   }, 5000)
// }

// for (let i = 0; i < cpus.length - 2; i++) {
//   const CPUcore = cpus[i]
// }

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)

// const cpus = os.cpus()

// console.log(process.pid)

// while (true) {}
