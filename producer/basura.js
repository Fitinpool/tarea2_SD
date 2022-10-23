import Kafka from 'node-rdkafka';
import * as dotenv from 'dotenv' 
dotenv.config()
import eventType from '../eventType.js';


console.log('Creating the topic tesst with AdminClient');
const admin = Kafka.AdminClient.create({
  'client.id': 'kafka-admin',
  'metadata.broker.list': 'localhost:9092'
});

admin.connect();
console.log("AdminClient connected");

admin.createTopic({
  topic: 'estasi',
  num_partitions: 3,
  replication_factor: 1,
  config: { 'retention.ms': (24*60*60*1000).toString() }
  }, 
  function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log('Topic Creado');
      }
  }
);

/*
const stream = Kafka.Producer.createWriteStream({
  'metadata.broker.list': 'localhost:9092'
}, {}, {
    topic: 'testisss'
});

function quequeMessage(){
  const event = { category : 'DOG', noise : 'Hola putimadre' }
  const success = stream.write(eventType.toBuffer(event));
  if(success)
  {
    console.log("mensaje en cola")
  }
  else
  {
    console.log("Algo salio mal")
  }
}


setInterval(() => {
  quequeMessage()
}, 3000)*/

var producer = new Kafka.Producer({
  'metadata.broker.list': 'localhost:9092',
  'dr_cb': true
});

var topicName = 'estasi';

producer.on('ready', function(arg) {

  var value = Buffer.from('value-');
  var key = "key-";
  // if partition is set to -1, librdkafka will use the default partitioner
  var partition = 2;
  var headers = [
    { header: "header value" }
  ]
  producer.produce(topicName, partition, value, key, Date.now(), "", headers);
});

//starting the producer
producer.connect();


