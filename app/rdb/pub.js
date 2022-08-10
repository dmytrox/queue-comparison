'use strict';

const { QueueManager, Message, Producer, Consumer } = require('redis-smq');

const config = require('./config');

QueueManager.createInstance(config, (err, queueManager) => {
    if (err) throw err;

    queueManager.queue.exists('queue', (err, reply) => {        
        if (err) throw err;        

        if(!reply) queueManager.queue.create('queue', false, (err) => console.log(err))
    });
});

const producer = new Producer(config);
producer.run((err) => {
    if (err) throw err;

    const message = new Message();

    message
        .setBody({ test1: 'test1', test2: 'test2' })
        .setTTL(3600000)
        .setQueue('queue'); 

    
    let x = 100000

    const start = new Date().now();
    while (x > 0){
        x--;
        producer.produce(message, (err) => {
            if (err) console.log(err);
            else {
                const msgId = message.getId();
                console.log('Successfully produced. Message ID is ', msgId);
            }
        });
    }
    const end = new Date().now();
    
    console.log("Time Elapsed:", end - start);
});