var pidusage = require('pidusage')

// Compute statistics every second:
const interval = setInterval(function () {
  pidusage(process.pid, { maxage: 1000 }, function (err, stats) {
    console.log(stats)
    // => {
    //   cpu: 10.0,            // percentage (from 0 to 100*vcore)
    //   memory: 357306368,    // bytes
    //   ppid: 312,            // PPID
    //   pid: 727,             // PID
    //   ctime: 867000,        // ms user + system time
    //   elapsed: 6650000,     // ms since the start of the process
    //   timestamp: 864000000  // ms since epoch
    // }
  })
}, 1000);

setTimeout(() => clearInterval(interval), 3500);