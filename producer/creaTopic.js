import Kafka from 'node-rdkafka';

export async function creaTopics()
{
    const admin = Kafka.AdminClient.create({
        'client.id': 'kafka-admin',
        'metadata.broker.list': 'localhost:9092'
      });
      
      await admin.connect();
      
      await admin.createTopic({
        topic: 'nuevosMiembros',
        num_partitions: 3,
        replication_factor: 1,
        config: { 'retention.ms': (24*60*60*1000).toString() }
        }, 
        function(err) {
            if(err) {
                if(err.code == 36)
                {
                    console.log('Topic ya existe, porfavor borre el topic anterior en caso de fallo')
                }
                else
                {
                    console.log(err);
                }
            } else {
                console.log('Topic nuevosMiembros creado');
            }
        }
      );
      admin.disconnect();
}