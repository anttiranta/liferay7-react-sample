const apiEndpointDefinitions = require('./apiEndpointDefinitions');
const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

let referer = null;

function formatLocale(string) {
    return string.replace('_', '-');
}

function getTimeAppendedWithMessage(message, locale) {
    if (typeof message !== 'string') {
        throw new TypeError('message must be a string');
    }
    if (typeof locale !== 'string') {
        throw new TypeError('locale must be a string');
    }

    return {
        time: new Date().toLocaleTimeString(formatLocale(locale)),
        message: message
    };
}

function defineServerResponses(serverPort) {
    server.use(jsonServer.bodyParser)
    server.use(middlewares)

    server.get('/api', (req, res) => {
        const statusOkCode = 200;
        const resourceId = req.query.p_p_resource_id;
        const portletId = req.query.p_p_id;
        const portletNamespace = '_' + portletId + '_';

        setReferer(req);

        if (resourceId === apiEndpointDefinitions.RESOURCE_CMD_GET_TIME) {
            const message = req.query[portletNamespace + 'message'];
            const locale = req.query[portletNamespace + 'locale'];

            res.status(statusOkCode)
                .jsonp(getTimeAppendedWithMessage(message, locale));
        } else {
            res.status(404);
        }
    });

    server.listen(serverPort);
}

function setReferer(request) {
    if (referer === null) {
        referer = request.headers.referer.replace('index.html','');
    }
}

// eslint-disable-next-line no-undef
module.exports = {
    defineServerResponses
};
