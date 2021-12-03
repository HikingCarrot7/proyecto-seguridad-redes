"use strict";(self.webpackChunkweb_security=self.webpackChunkweb_security||[]).push([[87],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8199:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],c={id:"ipsec-introduction",title:"Introducci\xf3n a IPSec",sidebar_position:2},s=void 0,u={unversionedId:"communication-security/ipsec-introduction",id:"communication-security/ipsec-introduction",isDocsHomePage:!1,title:"Introducci\xf3n a IPSec",description:"\xbfQu\xe9 es IPSec?",source:"@site/docs/communication-security/ipsec.md",sourceDirName:"communication-security",slug:"/communication-security/ipsec-introduction",permalink:"/proyecto-seguridad-redes/docs/communication-security/ipsec-introduction",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"ipsec-introduction",title:"Introducci\xf3n a IPSec",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Importancia de la seguridad en la comunicaci\xf3n",permalink:"/proyecto-seguridad-redes/docs/communication-security/intro"},next:{title:"Introducci\xf3n a VPN",permalink:"/proyecto-seguridad-redes/docs/communication-security/vpn-introduction"}},p=[{value:"\xbfQu\xe9 es IPSec?",id:"qu\xe9-es-ipsec",children:[],level:2},{value:"\xbfC\xf3mo funciona IPSec?",id:"c\xf3mo-funciona-ipsec",children:[],level:2},{value:"Protocolos involucrados en IPSec",id:"protocolos-involucrados-en-ipsec",children:[],level:2},{value:"Referencias",id:"referencias",children:[],level:2}],l={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"qu\xe9-es-ipsec"},"\xbfQu\xe9 es IPSec?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"IPsec es un grupo de protocolos que se utilizan juntos para configurar conexiones encriptadas entre dispositivos. Ayuda a mantener seguros los datos enviados a trav\xe9s de redes p\xfablicas. IPsec se usa a menudo para configurar VPNs y funciona encriptando paquetes IP, junto con la autenticaci\xf3n de la fuente de donde provienen los paquetes.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/communication-security/ipsec.png",alt:"IPSec"})),(0,o.kt)("p",null,"Adem\xe1s, IPSec provee servicios de autenticaci\xf3n, confidencialidad, integridad y no repudio. Gracias a estos servicios, la seguridad de las comunicaciones est\xe1 garantizadas. Por supuesto, tambi\xe9n se tiene el control de acceso, calidad de servicio y registro de actividad."),(0,o.kt)("h2",{id:"c\xf3mo-funciona-ipsec"},"\xbfC\xf3mo funciona IPSec?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"En primer lugar, se da un ",(0,o.kt)("strong",{parentName:"p"},"Intercambio de claves"),', las cuales son necesarias para el cifrado; una clave consiste en una cadena de caracteres aleatorios que se puede utilizar para "bloquear" (cifrar) y "desbloquear" (descifrar) mensajes. IPsec configura estas claves para ser intercambiadas entre los dispositivos conectados, de modo que cada dispositivo pueda descifrar los mensajes del otro dispositivo.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"IPsec agrega varios ",(0,o.kt)("strong",{parentName:"p"},"encabezados")," y ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.speedcheck.org/wiki/packet/#packet-structure"},"trailers"))," a los paquetes de datos que contienen informaci\xf3n de autenticaci\xf3n y encriptaci\xf3n.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Se ",(0,o.kt)("strong",{parentName:"p"},"encriptan")," los encabezados y el ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Payload_(computing)"},"payload")," de cada paquete enviado. Esto mantiene los datos enviados a trav\xe9s de IPsec seguros y privados.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Se proporciona ",(0,o.kt)("strong",{parentName:"p"},"autenticaci\xf3n")," para cada paquete; parecido a un sello de autenticidad para cada paquete que se env\xeda. Esto asegura que los paquetes provengan de una fuente confiable y no de un atacante.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Los paquetes son ",(0,o.kt)("strong",{parentName:"p"},"desencriptados")," en el otro extremo de la comunicaci\xf3n para que las aplicaciones puedan utilizar los datos entregados."))),(0,o.kt)("h2",{id:"protocolos-involucrados-en-ipsec"},"Protocolos involucrados en IPSec"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Authentication header")," (AH): este protocolo garantiza que los paquetes de datos provengan de una fuente confiable y que no hayan sido manipulados. Estos encabezados no proporcionan ning\xfan cifrado; no ayudan a ocultar los datos a los atacantes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Encapsulating Security Protocol")," (ESP): Este protocolo encripta el encabezado IP y el payload de cada paquete. ESP agrega su propio encabezado y un tr\xe1iler a cada paquete de datos.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Security Association")," (SA): Es el paquete de algoritmos y par\xe1metros (tales como las claves) que se utilizan para cifrar y autenticar un flujo de datos particular en una direcci\xf3n. Uno de los protocolos SA m\xe1s comunes es el Internet Key Exchange (IKE), que es el encargado de generar las llaves de cifrado y autenticaci\xf3n que ser\xe1n usadas por IPSec."))),(0,o.kt)("h2",{id:"referencias"},"Referencias"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.redeszone.net/tutoriales/vpn/ipsec-que-es-como-funciona/"},"de Luz, S. (2021, 10 junio). Mejora la seguridad de tu VPN con el protocolo IPsec. RedesZone.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/learning/network-layer/what-is-ipsec/"},"What is IPSec? (2019). Cloudfire.")))}d.isMDXComponent=!0}}]);