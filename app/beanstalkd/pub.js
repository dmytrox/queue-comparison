const bs = require('nodestalker');
const client = bs.Client('127.0.0.1:11300');

client.use('queue').onSuccess(() => {      
    
});

let x = 100000

const start = new Date().now();
while (x > 0){
    x--;
    client.put('job' + x).onSuccess(() => {          
      console.log();
    });    
}
const end = new Date().now();

console.log("Time Elapsed:", end - start);

client.disconnect();