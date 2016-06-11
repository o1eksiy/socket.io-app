define(
    [        
        "libs/io",
        "collections/connections"
    ],

    function (io, connections) {
        io.sockets.on('connection', function (socket) {
            socket.on('test', function() {
                console.log(connections);
                console.log('emit from client' + 2);
            });
        });
    }
);