import Kafka from 'node-rdkafka';

export function nuevosMiembros(data)
{

    var producer = new Kafka.Producer({
        'metadata.broker.list': 'localhost:9092',
        'dr_cb': true
    });
      
    var topicName = 'nuevosMiembros';
    
    producer.on('ready', function(arg) {

        var value = Buffer.from(JSON.stringify(data));
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

export function ventaDiaria(data)
{

    var producer = new Kafka.Producer({
        'metadata.broker.list': 'localhost:9092',
        'dr_cb': true
    });
      
    var topicName = 'venta';
    
    producer.on('ready', function(arg) {

        var value = Buffer.from(JSON.stringify(data));
        var key = null;
        var partition = 1
        var headers = [
            { header: "Nueva venta!!" }
        ]
        
        console.log(producer.produce(topicName, partition, value, key, Date.now(), "", headers))
    });
  
    producer.connect();
}

export function reponerStock(data)
{

    var producer = new Kafka.Producer({
        'metadata.broker.list': 'localhost:9092',
        'dr_cb': true
    });
      
    var topicName = 'venta';
    
    producer.on('ready', function(arg) {

        var value = Buffer.from(JSON.stringify(data));
        var key = null;
        var partition = 2
        var headers = [
            { header: "Stock!!" }
        ]
        
        console.log(producer.produce(topicName, partition, value, key, Date.now(), "", headers))
    });
  
    producer.connect();
}

export function ubicacionVenta(data)
{

    var producer = new Kafka.Producer({
        'metadata.broker.list': 'localhost:9092',
        'dr_cb': true
    });
      
    var topicName = 'ubicacion';
    
    producer.on('ready', function(arg) {

        var value = Buffer.from(JSON.stringify(data));
        var key = null;
        var partition = 1
        var headers = [
            { header: "Ubicacion!!" }
        ]
        
        console.log(producer.produce(topicName, partition, value, key, Date.now(), "", headers))
    });
  
    producer.connect();
}

export function carritoExtrano(data)
{

    var producer = new Kafka.Producer({
        'metadata.broker.list': 'localhost:9092',
        'dr_cb': true
    });
      
    var topicName = 'ubicacion';
    
    producer.on('ready', function(arg) {

        var value = Buffer.from(JSON.stringify(data));
        var key = null;
        var partition = 2
        var headers = [
            { header: "Ubicacion!!" }
        ]
        
        console.log(producer.produce(topicName, partition, value, key, Date.now(), "", headers))
    });
  
    producer.connect();
}