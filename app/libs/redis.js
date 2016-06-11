define(
    ["ioredis", "config/app"],

    function (Ioredis, Config) {

        return new Ioredis(Config.redis.port, Config.redis.host);

    }
);