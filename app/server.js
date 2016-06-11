var requirejs = require('requirejs');
requirejs.config({
    baseUrl    : __dirname,
    nodeRequire: require
});

requirejs([
        "underscore",
        "libs/io",
        "libs/redis",
        "testListener",
        "collections/rooms",
        "models/room"
    ],
    function (_, io, redis, testListener, Rooms, Room) {
        
        redis.subscribe('chat.socketio.redis.app', function(err, count) {});

        redis.on('message', function(channel, message) {
            console.log('message');
        });

        io.sockets.on('connection', function (socket) {

            socket.on('test', function() {
                var roomId = 'test-room';
                Rooms.push(roomId, _.extend(Rooms.get(roomId), new Room(socket.id)));
            });
        });
    });