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
            api   : {
                script: "",
                token : ""
            }
        }
    }
);