const homeRouter = require('./home.route');
const _19110341Router = require('./19110341.route');
const messageRouter = require('./message.route');
const logMiddleware = require('../middleware/log.middleware')

function route(app) {
    app.use('/', logMiddleware , homeRouter)
    app.use('/19110341', logMiddleware , _19110341Router)
    app.use('/message', logMiddleware , messageRouter)
}

module.exports = route