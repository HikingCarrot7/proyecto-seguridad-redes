---
id: introduction-sockets
title: ¿Qué son los sockets?
sidebar_position: 1
---

## Definición

> Un socket es un "endpoint" o "punto final" de una comunicación bidireccional entre dos programas que están corriendo en la red. Cada socket está vinculado a un número de puerto para que la capa TCP pueda identificar la aplicación a la que están destinados los datos. Para que dos aplicaciones se puedan comunicar, es necesaria una dirección formada por la combinación de una dirección IP y un número de puerto.

![Comunicación entre hosts y servidor](/img/sockets/sockets_example.png)

Los sockets permiten implementar arquitecturas **cliente-servidor** o **peer-to-peer**. En este tipo de arquitecturas la comunicación es iniciada por una aplicación llamada **cliente**, aquella que envía peticiones y espera una respuesta. En contraparte, existe una segunda aplicación que siempre se encuentra a la escucha, esperando a que un cliente realice una petición para darle una respuesta; esta aplicación es conocida como **servidor**.

## Componentes de un socket

Un socket consiste en tres elementos:

- **Dirección IP**: Se trata de una dirección única que identifica a un dispositivo en internet o en una red local.
- **Puerto**: Es el punto de entrada (para un servidor) o salida (para un cliente) por la que se da la comunicación entre dos aplicaciones. Cada puerto está asociado con una aplicación específica. Todos los puertos se indentifican por un **número de puerto**.
- **Protocolo**: El conjunto de reglas que existen entre dos o más aplicaciones para poder comunicarse entre sí.

## Tipos de socket

- **Socket de flujo de datos (Stream socket)**: Este tipo de socket está asociado al protocolo **TCP**, por lo brinda seguridad en la transmisión, seguridad en la recepción, en la integridad y en la secuencia de los paquetes de datos.

- **Socket de datagramas (Datagram socket)**: Tipo de socket asociado al protocolo **UDP**, e indica que los datos viajan en datagramas. En contraste con el con el tipo de socket anterior, en este tipo de comunicaciones no se requieren servicios de recuperación y verificación de errores.

En las siguiente sessión se habla de manera más detallada del protocolo TCP y UDP.

## Referencias

[GeeksforGeeks. (2020, 10 mayo). Socket in Computer Network.](https://www.geeksforgeeks.org/socket-in-computer-network/)

[What Is a Socket? (The JavaTM Tutorials > Custom Networking > All About Sockets). (2014). Oracle.](https://docs.oracle.com/javase/tutorial/networking/sockets/definition.html)

[Java Socket Programming (Java Networking Tutorial) - javatpoint. (2015). Www.Javatpoint.Com.](https://www.javatpoint.com/socket-programming)
