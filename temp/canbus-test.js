var can = require('socketcan');

var channel = can.createRawChannel("can0", true);

channel.start();

channel.send({ 
    id: 10,
    ext:true,
    data: Buffer.from("HelloESP3",'utf8') 
});

channel.stop();

