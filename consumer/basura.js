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

//eventType.fromBuffer(data.value)