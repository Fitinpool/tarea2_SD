import Kafka from 'node-rdkafka';
import { escribirArchivo } from '../archivos.js';

var consumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka-admin',
  'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

var reponer = []

consumer.on('ready', () => {
  consumer.subscribe(['venta']);

  consumer.consume()
}).on('data', async (data) => {

  if(data.partition == 2)
  {
    const received = JSON.parse(data.value.toString())

    if(reponer.length != 5)
    {
        reponer.push(received)
    }
    else
    {
        await escribirArchivo('./stock.txt', JSON.stringify(reponer), (res) => {
          console.log(res);
        })

        reponer = []
    }
  }
})

