/**
 * Created by wangdawei on 16-3-17.
 */
var restify = require('restify');

var server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

//server.get('/echo/:name', function (req, res, next) {

function response (req, res, next) {

    // Console.log(req.queryParser()) ;


    console.log(req.query);
    console.log();
    console.log();
    res.send(req.query.name+" -- "+req.query.id);
    // res.send(req.params);
    return next();
}


function respond(req, res) {
    res.send('hello ' + req.params.name);
}

server.get('/hello/:name', respond);


server.get('/echo',response);

server.listen(8810, function () {
    console.log('%s listening at %s', server.name, server.url);
});