---
id: introduction-ssl
title: El protocolo SSL
sidebar_position: 1
---

## ¿De qué trata SSL?

> SSL es una tecnología estandarizada que permite encriptar el tráfico de datos entre un navegador web y un sitio web (o entre dos servidores web), protegiendo así la conexión. Esto impide que un intruso pueda ver o interceptar la información que se transmite de un punto a otro, que pueda incluir datos personales o financieros.

![SSL](/img/web-security/ssl.png)

Actualmente, se utiliza el protocolo **TLS** (Transport Layer Security) por tratarse de una versión actualizada y más segura de SSL. Aunque aún se siguen utilizando las siglas SSL para denominar los certificados de seguridad, debido a que, sigue siendo el término más utilizado.

## ¿Por qué es importante el protocolo TLS?

El cifrado TLS ayuda a proteger las aplicaciones web de violaciones de datos y otros ataques. TLS está implementado para ayudar a proteger la privacidad y la seguridad del usuario. Sin TLS, la información confidencial transferida a través de internet, como las credenciales de inicio de sesión, la información personal y los números de tarjetas de crédito, son vulnerables al robo. Además, HTTPS protegido por TLS se está convirtiendo rápidamente en una práctica estándar para los sitios web.

## ¿Cómo funciona TLS?

![SSL](/img/web-security/tls_handshake.png)

Una conexión TLS se inicia mediante una secuencia conocida como `handshake`. Cuando un usuario navega a un sitio web que usa TLS, el `handshake` comienza entre el dispositivo del cliente y el servidor web.

Durante el `handshake`, el dispositivo del usuario y el servidor web:

- Especificarán qué versión de TLS (TLS 1.0, 1.2, 1.3, etc.) utilizarán para la comunicación.
- Decidir qué conjuntos de cifrado utilizarán.
- Autenticar la identidad del servidor web mediante un certificado TLS.
- Generar claves de sesión para encriptar los mensajes entre los dispositivos después de completarse el `handshake`.

El `handshake` establece un conjunto de cifrado para cada sesión de comunicación. Se trata de un conjunto de algoritmos que especifica detalles acerca de qué claves de cifrado compartidas o claves de sesión se utilizarán para esa sesión en particular.

El `handshake` también maneja la autenticación, que generalmente consiste en que el servidor demuestre su identidad al cliente. Esto se hace usando claves públicas. Las **claves públicas** son claves que utilizan un cifrado unidireccional, lo que significa que cualquier persona con la clave pública puede descifrar los datos cifrados con la clave privada del servidor para garantizar su autenticidad, pero solo el dispositivo original puede cifrar los datos con la clave privada. La clave pública del servidor es parte de su certificado TLS.

Una vez que los datos están encriptados y autenticados, se firman con un código de autenticación de mensajes (MAC). A continuación, el destinatario verifica el MAC para garantizar la integridad de los datos.

## Referencias

[Madden, M. (2020, 13 marzo). ¿QUÉ SON SSL, TLS Y HTTPS. . .? DigiCert.](https://www.digicert.com/es/what-is-ssl-tls-https/)

[What is TLS (Transport Layer Security)? (2019). Cloudflare.](https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/)
