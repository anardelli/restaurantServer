const queueName = 'Deepanshu';

// AMQP PORT 5672

// amqp://user:pass@host.com/vhost
// amqp://localhost

// amqp://mindtree:mindtree@mt.nodesense.ai

const open = require('amqplib').connect('amqp://test:test@mt.nodesense.ai');

// Consumer
open.then(function (connection) {
  return connection.createChannel();
}).then(function (channel) {
  return channel.assertQueue(queueName).then(function (ok) {
    return channel.consume(queueName, function (message) {
      if (message !== null) {
        console.log(message.content.toString());
        channel.ack(message);
      }
    });
  });
}).catch(console.warn); 