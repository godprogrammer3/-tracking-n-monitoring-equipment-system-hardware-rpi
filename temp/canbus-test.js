var can = require('socketcan');

var channel = can.createRawChannel("can0", true);

channel.start();

channel.send({ 
    id: 1,
    data: Buffer.from("scan") 
});

channel.stop();

