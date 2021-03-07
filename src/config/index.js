const HOST = 'http://foreverheart.top'
// const NODE_HOST = 'http://localhost:8080'

let env = process.env.NODE_ENV

let currentHost = env === 'development' ? HOST : HOST

exports.HOST = currentHost