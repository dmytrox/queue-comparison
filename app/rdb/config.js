'use strict';

module.exports = {
    namespace: 'rdb',
    redis: {
        client: 'redis',
        options: {
            host: '127.0.0.1',
            port: 6377,
            connect_timeout: 3600000,
        },
    },
    messages: {
      store: false,
    }
};