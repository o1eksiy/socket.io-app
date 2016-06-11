define(
    ["ioredis"],

    function (Ioredis) {

        return new Ioredis(6379, '127.0.0.1');

    }
);