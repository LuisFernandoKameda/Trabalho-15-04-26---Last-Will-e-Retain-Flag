import mqtt from "mqtt";

const client = mqtt.connect("mqtt://localhost:1883", {
  will: {
    topic: 'temperatura/s',
    payload: 'offline',
    qos: 0,
    retain: true
  }
});

client.on("connect", () => {
  console.log("PUB QoS0: conectado");
  
  client.publish("temperatura/s", "online", {retain:true});


  const t = setInterval(() => {
    let i = Math.floor(Math.random() * (30 - 12 + 1)) + 12; 
    client.publish("temperatura/s", `msg ${i} (QoS0)`,{retain:true});
    console.log("PUB QoS0 enviou:", i, "ºC");

    

  }, 7000);
});

//Foi utilizado o Qos0 para o sensor de temperatura pois não existe tanta necessidade para a entrega dos dados do sensor.
