---
id: protocols-sockets
title: Protocolos en sockets
sidebar_position: 2
---

Para que se pueda existir la comunicación entre los dos dispositivos en una conexión, es necesario un protocolo de comunicaciones que permita el intercambio de información. Existen dos protocolos básicos que son mayormente utilizados para lograr tal fin: **TCP** y **UDP**. Cabe resaltar que ambos protocolos operan en la capa de transporte (capa 4 en el modelo [OSI](https://en.wikipedia.org/wiki/OSI_model)) y tienen el objetivo de comunicar a dos aplicaciones ejecutándose en computadoras diferentes a través de una red.

### TCP

![Ejemplo de comunicación entre dispositivos con el protocolo TCP](/img/sockets/tcp.png)

TCP (Protocolo de control de trasmisión) es un protocolo **orientado a la conexión**, es decir, garantiza que exista una conexión adecuada antes de que pueda comenzar una comunicación entre los dispositivos. Además, este protocolo garantiza que la transmisión de todos los paquetes de datos sin errores ni omisiones; asimismo, garantiza que cada paquete llegará a su destino en el mismo orden en que se ha transmitido.

Para lograr una conexión confiable, se establece una sesión a través de un procedimiento conocido como **three-way handshake**. Este procedimiento consta de 3 pasos:

- En el paso 1, la computadora origen envía un mensaje `SYN` (Synchronize Sequence Number) hacia el servidor para informarle que desea establecer una sesión.

- En el paso 2, el servidor responde a la solicitud del cliente con un mensaje de tipo `SYN-ACK`.

- En el paso 3, la computadora origen acepta con un "acuse de recibo" (`ACK`nowledge) la información recibida.

### UDP

![TCP vs UDP](/img/sockets/tcp_vs_udp.png)

A diferencia del protocolo TCP, este protocolo es **no orientado a conexión**, esto significa que no asegura un transporte fiable de paquetes de datos entre la conexión, ya que no realiza ningún tipo de seguimiento de los datos enviados ni el orden en que llegarán. Esto provoca que los paquetes sean mucho más livianos y rápidos, pero menos fiables, así que lo utilizan aplicaciones como NFS y programas P2P. También se utiliza en la transmisión de audio y vídeo por la red y en juegos online para disminuir latencia y aumentar la velocidad de la transmisión.

### Referencias

[Castillo, J. A. (2020, 21 febrero). Protocolo TCP/IP – Qué es y cómo funciona. Profesional Review.](https://www.profesionalreview.com/2020/03/21/protocolo-tcp-ip/)
