/**
 * Routing passing point. This section is separated from the routes' implementation.
 */

'use strict';
var app = require('../app'),
    routes = require('./routes');

function configureRoutes() {
    app.post('/connectDruid', routes.queryDruid);
    app.post('/clearCache', routes.clearCache);
    app.post('/putEntry', routes.putEntry);
    app.post('/getEntry', routes.getEntry);
    app.post('/initZoomableChart', routes.initZoomableChart);
    app.post('/getNodes', routes.getNodes);
    app.post('/getMsgCnt', routes.getMsgCnt);
    app.post('/getFlowChartMatrix', routes.getFlowChartMatrix);
    app.post('/getChordDiagramMatrix', routes.getChordDiagramMatrix);
    app.post('/getMessagesInfo', routes.getMessagesInfo);
    app.post('/getMinimumMessageTime', routes.getMinimumMessageTime);
    app.post('/getMaximumMessageTime', routes.getMaximumMessageTime);
    app.post('/getMessagesCount', routes.getMessagesCount);
    app.get('/', routes.index);
    app.get('/index.html', routes.index);
    app.get('/operations_get.html', routes.operations_get);
    app.get('/operations_put.html', routes.operations_put);
}

module.exports = configureRoutes;