define(
    [
        "fs",
        "http",
        "socket.io",
        "config/app"],

    function (fs, http, socketIo, config) {

        var dirname = requirejs.s.contexts._.config.baseUrl;

        var app = http.createServer(function (req, res) {

            fs.readFile(dirname + 'index.html',
                function (err, data) {
                    if (err) {
                        res.writeHead(500);
                        return res.end('Error loading index.html');
                    }
                    res.writeHead(200);
                    res.end(data);
                });
        });

        return socketIo.listen(app.listen(process.env.PORT || config.server.port));

    }
);