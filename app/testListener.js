define(
    [        
        "libs/io",
        "collections/rooms"
    ],

    function (io, Rooms) {
        io.sockets.on('connection', function (socket) {
            socket.on('test', function() {
                console.log(Rooms.getAll());
            });
        });
    }
);