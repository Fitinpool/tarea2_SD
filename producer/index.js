import Kafka from 'node-rdkafka';
import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'

const stream = Kafka.Producer.createWriteStream({
  'metadata.broker.list': 'localhost:9092'
}, {}, {
    topic: 'test'
  });

function quequeMessage(){
  const success = stream.write(Buffer.from('h1'));
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
}, 3000);