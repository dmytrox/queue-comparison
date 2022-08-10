const bs = require('nodestalker');
const client = bs.Client('127.0.0.1:11300');

client.watch('queue').onSuccess(() => {
    function resJob() {
        client.reserve().onSuccess((job) => {
            console.log('reserved', job);

            client.deleteJob(job.id).onSuccess((del_msg) => {
                console.log('deleted', job);
                console.log('message', del_msg);
                resJob();
            });
        });
    }

    resJob();
});
