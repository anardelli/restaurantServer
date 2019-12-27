const nodemailer = require('nodemailer');
const queueName = 'Deepanshu';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mail-id',
    pass: 'password'
  }
});

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
        if (message && message.details && message.details.orderId && message.details.customerId) {
          const output = `
            <h1>You got an order</h1>
            <h3>Order details</h3>
            <ul>  
              <li>Order Id: ${message.details.orderId}</li>
              <li>Customer Id: ${message.details.customerId}</li>
            </ul>
          `;
          const mailOptions = {
            from: 'deepanshunkt@gmail.com',
            to: 'deepanshunkt@gmail.com',
            subject: 'Order Received',
            html: output
          };
          transporter.sendMail(mailOptions, function (err, info) {
            if (err)
              console.log('Sending a mail', err);
            else
              console.log('Sending a mail', info);
          });
        }
        console.log(message.content.toString());
        channel.ack(message);
      }
    });
  });
}).catch(console.warn); 