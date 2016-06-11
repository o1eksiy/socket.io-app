define(
    [],

    function () {
        return function Room(id) {
            var self = this;
            function init(id) {
                self[id] = id;
            }
            init(id);
        };
    }
);