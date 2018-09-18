const split = require('split')

const morganConsole = (format, morgan = require('morgan')) => [ // eslint-disable-line global-require, import/no-unresolved
  morgan(format, {
    skip: (req, res) => res.statusCode < 400,
    stream: split().on('data', console.error)
  }),
  morgan(format, {
    skip: (req, res) => res.statusCode >= 400,
    stream: split().on('data', console.info)
  })
]

module.exports = morganConsole
