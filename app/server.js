var requirejs = require('requirejs');
requirejs.config({
    baseUrl    : __dirname,
    nodeRequire: require
});

requirejs([
        "underscore",
        "libs/io",
        "libs/redis",
        "collections/testList",
        "collections/connections"
    ],
    function (_, io, redis, testList, connetions) {
        
        redis.subscribe('chat.socketio.redis.app', function(err, count) {});

        redis.on('message', function(channel, message) {
            console.log('message');
        });

        io.sockets.on('connection', function (socket) {

            socket.on('test', function() {
                connetions[socket.id] = socket;
            });
        });
    });