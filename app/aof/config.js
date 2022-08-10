'use strict';

module.exports = {
    namespace: 'aof',
    redis: {
        client: 'redis',
        options: {
            host: '127.0.0.1',
            port: 6378,
            connect_timeout: 3600000,
        },
    },
    messages: {
      store: false,
    }
};