import Kafka from 'node-rdkafka';

var consumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka-admin',
  'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

var reponer = [[]]

consumer.on('ready', () => {
  consumer.subscribe(['venta']);

  consumer.consume()
}).on('data', async (data) => {

  if(data.partition == 2)
  {
    const received = JSON.parse(data.value.toString())

    if(reponer[reponer.length - 1].length != 5)
    {
        reponer[reponer.length - 1].push(received)
    }
    else
    {
        reponer.push([])
        reponer[reponer.length - 1].push(received)
    }
  }

  console.log(reponer)
})

