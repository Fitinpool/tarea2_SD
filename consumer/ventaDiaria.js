import Kafka from 'node-rdkafka';
import { escribirArchivo } from '../archivos.js';

var consumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka-admin',
  'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

var total = 0
var clientes = 0
var promedio = 0

consumer.on('ready', () => {
  consumer.subscribe(['venta']);

  setInterval(function() {

    if(clientes != 0)
    {
      promedio = total/clientes
      console.log(`El miembro vendio ${total} sopaipillas a ${clientes}, con un promedio de ${promedio}.`)
    }

    total = 0
    clientes = 0
    promedio = 0

    consumer.consume(5200000);
  }, 10*1000);
}).on('data', async (data) => {

  if(data.partition == 1)
  {
    var received = JSON.parse(data.value.toString())

    total += received.vendido
    clientes += 1

    await escribirArchivo('./ventas.txt', JSON.stringify(received), (res) => {
      console.log(res)
    })
    
  }
})

