'use strict';

const { Consumer } = require('redis-smq');

const config = require('./config');

const consumer = new Consumer(config);

const messageHandler = (msg, cb) => {
    const payload = msg.getBody();
    console.log('Message payload', payload);
    cb();
};

consumer.consume('queue', messageHandler, (err) => {
    if (err) console.error(err);
});

consumer.run();