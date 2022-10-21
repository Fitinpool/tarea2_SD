import Kafka from 'node-rdkafka';
import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'

var consumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka',
  'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

consumer.on('ready', () => {
  console.log('consumer ready..')
})