define([],
    function () {
        return {
            isDev : true,
            server: {
                port               : 3000,
                secure             : false,
                key                : null,
                cert               : null,
                password           : null,
                pingOffline        : 4000,
                pingOfflineRemove  : 10000,
                messageBlockTimeout: 3000
            },
            redis: {
                port: 6379,
                host: '127.0.0.1'
            },
            api   : {
                script: "",
                token : ""
            }
        }
    }
);