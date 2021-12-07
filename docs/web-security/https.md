---
id: introduction-https
title: Importancia de HTTPS
sidebar_position: 2
---

## Antecedentes

La web es insegura por naturaleza. Cuando se diseñaron los protocolos en los que está basada (TCP/IP) no se tuvieron en cuenta muchos de los problemas que tiene la Internet moderna. Y el protocolo HTTP, para transferir páginas web, no añadió nada al respecto tampoco hasta mucho después, con la introducción del protocolo HTTPS (la "S" de "Seguro") allá por 1994 por la empresa [Netscape](https://en.wikipedia.org/wiki/Netscape). El protocolo HTTPS original utilizaba SSL (Secure Sockets Layer) como protocolo seguro de intercambio de claves y cifrado, pero en la actualidad está obsoleto y se emplea TLS (Transport Layer Security).

## ¿De qué trata HTTPS?

![HTTPS](/img/web-security/https.png)

El protocolo HTTPS hace posible que los usuarios del sitio web transmitan datos confidenciales como números de tarjetas de crédito, información bancaria y credenciales de inicio de sesión de forma segura a través de Internet. Por esta razón, HTTPS es especialmente importante para proteger las actividades en línea, como compras, operaciones bancarias y trabajo remoto. Fortuitamente, HTTPS se está convirtiendo rápidamente en el protocolo estándar para todos los sitios web, ya sea que intercambien datos confidenciales con los usuarios o no.

## ¿Cuáles son las principales diferencias con HTTP?

Las siguientes características hacen de HTTPS un protocolo mucho más seguro para navegar y realizar negocios en la web que HTTP.

### Encriptación

Debido a que HTTP fue originalmente diseñado como un protocolo para la transferencia de texto plano, los datos son vulnerables a ser interceptados por intermediarios. Al incluir el cifrado SSL / TLS, HTTPS evita que los datos enviados a través de Internet sean interceptados y leídos por un tercero. A través de la criptografía de clave pública y el protocolo de enlace SSL / TLS, se puede configurar de forma segura una sesión de comunicación cifrada entre dos partes ajenas (por ejemplo, un servidor web y un navegador) mediante la creación de una clave secreta compartida.

### Autenticación

A diferencia de HTTP, HTTPS incluye una autenticación sólida a través del protocolo SSL / TLS. El certificado SSL / TLS de un sitio web incluye una clave pública que un navegador web puede utilizar para confirmar que los documentos recibidos por el servidor (como las páginas HTML) han sido firmados digitalmente por la clave privada que únicamente posee dicho servidor.

### Integridad

Cada documento (como una página web, una imagen o fichero de JavaScript) enviado a un navegador por un servidor web por medio del protocolo HTTPS incluye una firma digital que un navegador web puede usar para determinar que el documento no ha sido alterado por un tercero o dañado de alguna otra manera. El servidor calcula un hash criptográfico del contenido del documento, incluido con su certificado digital, que el navegador puede calcular de forma independiente para demostrar que la integridad del documento está intacta.

## ¿Cómo se relaciona HTTP con SSL / TLS?

![HTTPS TLS](/img/web-security/https_tls.png)

HTTPS es una implementación del protocolo de cifrado SSL / TLS sobre el protocolo HTTP, que utilizan todos los sitios web, así como algunos otros servicios web. Por lo tanto, cualquier sitio web que utilice HTTPS utiliza el protocolo SSL / TLS.

## Referencias

[SSL Corp. (2021, 13 octubre). What is HTTPS? SSL.Com.](https://www.ssl.com/faqs/what-is-https/)
