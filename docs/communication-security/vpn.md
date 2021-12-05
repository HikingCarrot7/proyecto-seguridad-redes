---
id: vpn-introduction
title: Introducción a VPN
sidebar_position: 3
---

## ¿Qué es una VPN?

> Una red privada virtual (VPN) es una conexión encriptada entre dos o más computadoras. La conexión encriptada ayuda a garantizar que los datos sensibles se transmitan de forma segura. Las conexiones VPN se realizan a través de redes públicas, pero los datos intercambiados a través de la VPN siguen siendo privados debido a que están encriptados. La tecnología VPN se usa ampliamente en entornos corporativos.

![VPN](/img/communication_security/vpn.png)

Las VPN permiten acceder de forma segura e intercambiar datos confidenciales a través de una infraestructura de red compartida, como internet. Por ejemplo, cuando los empleados trabajan de forma remota en lugar de en la oficina, a menudo utilizan VPN para acceder a archivos y aplicaciones corporativas.
Muchas VPN utilizan el conjunto de protocolos [IPsec](/docs/communication-security/ipsec-introduction) para establecer y ejecutar estas conexiones encriptadas. Sin embargo, no todas las VPN utilizan IPsec. Otro protocolo para VPN es el **SSL / TLS**.

## Modelo de seguridad

El modelo de seguridad de una VPN provee lo siguiente:

- **Confidencialidad** tal que incluso si el tráfico de la red se rastrea a nivel de paquete (consulte el rastreador de red y la inspección profunda de paquetes), un atacante vería solo datos encriptados.

- **Autenticación** del remitente para evitar que usuarios no autorizados accedan a la VPN.

- **Integridad** del mensaje para detectar cualquier caso de manipulación de los mensajes transmitidos.

## Tipos comunes de VPN

### VPN de acceso remoto

![VPN de acceso remoto](/img/communication_security/vpn_remote.jpg)

La VPN de acceso remoto permite que un usuario se conecte a una red privada y acceda a todos sus servicios y recursos de forma remota. La conexión entre el usuario y la red privada se produce a través de internet y una conexión que es segura y privada. La VPN de acceso remoto es útil tanto para empresas como para usuarios domésticos.

Un ejemplo del uso de este tipo de VPN es cuando una empresa tiene la necesidad de crear un acceso para aquellos empleados que no se encuentran en las instalaciones de la organización, sino que están desde casa o desde cualquier otro lugar ajeno a la oficina. El túnel a la red local se construye por medio de un cliente VPN en el equipo del empleado externo, donde internet se convierte en el canal de transporte. Con todo ello, los empleados pueden conectarse a la red de la empresa, al servidor de archivos o de correo electrónico o hacer uso del software especializado de la organización.

### VPN de sitio a sitio

![VPN de sitio a sitio](/img/communication_security/vpn_site_to_site.gif)

Entra en acción cuando se necesita integrar varias redes locales en una red de comunicaciones virtual a través de un canal de transporte público. Este tipo de VPN crea un “puente imaginario” entre redes geográficamente distantes y las conecta a través de Internet manteniendo una comunicación segura y privada entre las redes. En este tipo de VPN, un enrutador actúa como cliente VPN y otro enrutador como servidor VPN, ya que se basa en la comunicación de enrutador a enrutador. Cuando se valida la autenticación entre los dos enrutadores, comienza la comunicación.

## Vídeo complementario

<p align="center">
    <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xGjGQ24cXAY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
</p>

## Referencias

[What Is a VPN? - Virtual Private Network. (2021, 29 septiembre). Cisco.](https://www.cisco.com/c/en/us/products/security/vpn-endpoint-security-clients/what-is-vpn.html)

[GeeksforGeeks. (2019, 10 abril). Types of Virtual Private Network (VPN) and its Protocols.](https://www.geeksforgeeks.org/types-of-virtual-private-network-vpn-and-its-protocols/)
