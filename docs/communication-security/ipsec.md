---
id: ipsec-introduction
title: Introducción a IPSec
sidebar_position: 2
---

## ¿Qué es IPSec?

> IPsec es un grupo de protocolos que se utilizan juntos para configurar conexiones encriptadas entre dispositivos. Ayuda a mantener seguros los datos enviados a través de redes públicas. IPsec se usa a menudo para configurar VPNs y funciona encriptando paquetes IP, junto con la autenticación de la fuente de donde provienen los paquetes.

![IPSec](/img/communication_security/ipsec.png)

Además, IPSec provee servicios de autenticación, confidencialidad, integridad y no repudio. Gracias a estos servicios, la seguridad de las comunicaciones está garantizadas. Por supuesto, también se tiene el control de acceso, calidad de servicio y registro de actividad.

## ¿Cómo funciona IPSec?

- En primer lugar, se da un **Intercambio de claves**, las cuales son necesarias para el cifrado; una clave consiste en una cadena de caracteres aleatorios que se puede utilizar para "bloquear" (cifrar) y "desbloquear" (descifrar) mensajes. IPsec configura estas claves para ser intercambiadas entre los dispositivos conectados, de modo que cada dispositivo pueda descifrar los mensajes del otro dispositivo.

- IPsec agrega varios **encabezados** y **[trailers](https://www.speedcheck.org/wiki/packet/#packet-structure)** a los paquetes de datos que contienen información de autenticación y encriptación.

- Se **encriptan** los encabezados y el [payload](<https://en.wikipedia.org/wiki/Payload_(computing)>) de cada paquete enviado. Esto mantiene los datos enviados a través de IPsec seguros y privados.

- Se proporciona **autenticación** para cada paquete; parecido a un sello de autenticidad para cada paquete que se envía. Esto asegura que los paquetes provengan de una fuente confiable y no de un atacante.

- Los paquetes son **desencriptados** en el otro extremo de la comunicación para que las aplicaciones puedan utilizar los datos entregados.

## Protocolos involucrados en IPSec

- **Authentication header** (AH): este protocolo garantiza que los paquetes de datos provengan de una fuente confiable y que no hayan sido manipulados. Estos encabezados no proporcionan ningún cifrado; no ayudan a ocultar los datos a los atacantes.

- **Encapsulating Security Protocol** (ESP): Este protocolo encripta el encabezado IP y el payload de cada paquete. ESP agrega su propio encabezado y un tráiler a cada paquete de datos.

- **Security Association** (SA): Es el paquete de algoritmos y parámetros (tales como las claves) que se utilizan para cifrar y autenticar un flujo de datos particular en una dirección. Uno de los protocolos SA más comunes es el Internet Key Exchange (IKE), que es el encargado de generar las llaves de cifrado y autenticación que serán usadas por IPSec.

## Referencias

[de Luz, S. (2021, 10 junio). Mejora la seguridad de tu VPN con el protocolo IPsec. RedesZone.](https://www.redeszone.net/tutoriales/vpn/ipsec-que-es-como-funciona/)

[What is IPSec? (2019). Cloudfire.](https://www.cloudflare.com/learning/network-layer/what-is-ipsec/)
