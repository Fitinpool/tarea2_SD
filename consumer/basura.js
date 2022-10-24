import Kafka from 'node-rdkafka';

var consumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka-admin',
  'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

consumer.on('ready', () => {
  console.log('consumer ready..')
  consumer.subscribe(['nuevosMiembros']);
  consumer.consume();
}).on('data', (data) => {
  console.log(`recibe data : ${JSON.stringify(data)}`)
})

consumer
  .on('ready', function() {
    // Subscribe to the librdtesting-01 topic
    // This makes subsequent consumes read from that topic.
    consumer.subscribe(['librdtesting-01']);

    // Read one message every 1000 milliseconds
    setInterval(function() {
      consumer.consume(1);
    }, 1000);
  })
  .on('data', function(data) {
    console.log('Message found!  Contents below.');
    console.log(data.value.toString());
  });

//eventType.fromBuffer(data.value)