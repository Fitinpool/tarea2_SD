import Kafka from 'node-rdkafka';

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
    promedio = total/clientes
    console.log(`Los clientes fueron ${clientes} y vendio ${total} de sopaipillas con un promedio de ${promedio} sopaipillas por cliente`)
    total  = 0
    clientes = 0
    promedio = 0
    consumer.consume(5200000);
  }, 10*1000);
}).on('data', async (data) => {

  if(data.partition == 1)
  {
    const received = JSON.parse(data.value.toString())
    total += received.vendido
    clientes += 1
  }
})

