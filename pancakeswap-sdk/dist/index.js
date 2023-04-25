
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pancakeswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./pancakeswap-sdk.cjs.development.js')
}
