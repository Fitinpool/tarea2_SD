import Kafka from 'node-rdkafka';
import { escribirArchivo } from '../archivos.js';

var consumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka-admin',
  'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

var ubicacion = {}
var profugos = {}

consumer.on('ready', () => {
  consumer.subscribe(['ubicacion']);

  consumer.consume();

  setInterval(async function() {
    
    await escribirArchivo('./ubicacion.txt', JSON.stringify(ubicacion), (res) => {
        console.log(res)
    })
    await escribirArchivo('./profugos.txt', JSON.stringify(profugos), (res) => {
        console.log(res)
    })

    ubicacion = {}
    profugos = {}
  }, 10*1000);
}).on('data', async (data) => {

  if(data.partition == 1)
  {
    var received = JSON.parse(data.value.toString())

    ubicacion = received
    console.log(ubicacion)
    
  }
  else if(data.partition == 2)
  {
    var received = JSON.parse(data.value.toString())

    profugos = received

    console.log(profugos)
  }
})

