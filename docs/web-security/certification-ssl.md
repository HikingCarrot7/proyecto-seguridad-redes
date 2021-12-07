---
id: certification-ssl
title: Certificados SSL
sidebar_position: 3
---

## ¿Cómo conseguir un certificado SSL?

![SSL Certification](/img/web-security/ssl_certification.png)

Un certificado TLS lo emite una autoridad certificadora a la persona o empresa propietaria de un dominio. El certificado contiene información importante sobre quién es el propietario del dominio, junto con la clave pública del servidor, los cuales son importantes para validar la identidad del servidor.

Para que un certificado SSL sea válido, los dominios deben obtenerlo de una autoridad de certificación (CA). Una CA es una organización externa, un tercero de confianza, que genera y distribuye certificados SSL. La CA también firmará digitalmente el certificado con su propia clave privada, lo que permitirá que los dispositivos del cliente lo verifiquen. La mayoría de las CA, pero no todas, cobrarán una tarifa por emitir un certificado SSL.

Una vez que se emite el certificado, es necesario instalarlo y activarlo en el servidor de origen del sitio web. Los servicios de alojamiento web generalmente pueden manejar esto para los operadores de sitios web. Una vez que esté activado en el servidor de origen, el sitio web podrá cargarse a través de HTTPS y todo el tráfico hacia y desde el sitio web estará encriptado y seguro.

## ¿Cómo saber si un sitio posee un certificado SSL?

![Chrome HTTPS](/img/web-security/chrome_https.jpg)

Un sitio web que posee un certificado SSL utiliza el protocolo HTTPS comienza con https:// en lugar de http://. Los navegadores web modernos también indican que un usuario está visitando un sitio web HTTPS seguro al mostrar un símbolo de candado cerrado a la izquierda de la URL.

![Chrome No HTTPS](/img/web-security/no_https.png)

Cuando una página web **no** cumple con el certificado, se muestra un mensaje parecido al anterior.

## Referencias

[What is an SSL certificate? | How to get a free SSL certificate. (2017). Cloudflare.](https://www.cloudflare.com/learning/ssl/what-is-an-ssl-certificate/)
