define(
    [],

    function () {
        return {
            data: {},
            push: function(id, data) {
                this.data[id] = data;
            },
            get: function(id) {
                var data = {};
                if(!this.isUndefined(id)) {
                    data = this.data[id];
                }
                return data;
            },
            getAll: function() {
                return this.data;
            },
            delete: function(id) {
                if(!this.isUndefined(id)) {
                    delete this.data[id];
                }
            },
            isUndefined: function(id) {
                return this.data[id] == undefined;
            }
        };
    }
);