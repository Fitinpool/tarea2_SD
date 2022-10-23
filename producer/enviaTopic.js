import Kafka from 'node-rdkafka';
import { miembro } from '../eventType.js';

export function nuevosMiembros(data)
{

    var producer = new Kafka.Producer({
        'metadata.broker.list': 'localhost:9092',
        'dr_cb': true
    });
      
    var topicName = 'nuevosMiembros';
    
    producer.on('ready', function(arg) {

        var value = miembro.toBuffer(data);
        var key = null;
        if(data.registro === 'premium')
        {
            var partition = 2;
        }
        else{
            var partition = 1;
        }
        var headers = [
            { header: "Miembro nuevo!!" }
        ]
        
        console.log(producer.produce(topicName, partition, value, key, Date.now(), "", headers))
    });
  
    producer.connect();
}