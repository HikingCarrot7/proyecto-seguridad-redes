"use strict";(self.webpackChunkweb_security=self.webpackChunkweb_security||[]).push([[708],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5249:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"introduction-ssl",title:"El protocolo SSL",sidebar_position:1},l=void 0,c={unversionedId:"web-security/introduction-ssl",id:"web-security/introduction-ssl",isDocsHomePage:!1,title:"El protocolo SSL",description:"\xbfDe qu\xe9 trata SSL?",source:"@site/docs/web-security/ssl.md",sourceDirName:"web-security",slug:"/web-security/introduction-ssl",permalink:"/proyecto-seguridad-redes/docs/web-security/introduction-ssl",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction-ssl",title:"El protocolo SSL",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n a VPN",permalink:"/proyecto-seguridad-redes/docs/communication-security/vpn-introduction"},next:{title:"Importancia de HTTPS",permalink:"/proyecto-seguridad-redes/docs/web-security/introduction-https"}},u=[{value:"\xbfDe qu\xe9 trata SSL?",id:"de-qu\xe9-trata-ssl",children:[],level:2},{value:"\xbfPor qu\xe9 es importante el protocolo TLS?",id:"por-qu\xe9-es-importante-el-protocolo-tls",children:[],level:2},{value:"\xbfC\xf3mo funciona TLS?",id:"c\xf3mo-funciona-tls",children:[],level:2},{value:"Referencias",id:"referencias",children:[],level:2}],d={toc:u};function p(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"de-qu\xe9-trata-ssl"},"\xbfDe qu\xe9 trata SSL?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"SSL es una tecnolog\xeda estandarizada que permite encriptar el tr\xe1fico de datos entre un navegador web y un sitio web (o entre dos servidores web), protegiendo as\xed la conexi\xf3n. Esto impide que un intruso pueda ver o interceptar la informaci\xf3n que se transmite de un punto a otro, que pueda incluir datos personales o financieros.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SSL",src:a(4353).Z})),(0,i.kt)("p",null,"Actualmente, se utiliza el protocolo ",(0,i.kt)("strong",{parentName:"p"},"TLS")," (Transport Layer Security) por tratarse de una versi\xf3n actualizada y m\xe1s segura de SSL. Aunque a\xfan se siguen utilizando las siglas SSL para denominar los certificados de seguridad, debido a que, sigue siendo el t\xe9rmino m\xe1s utilizado."),(0,i.kt)("h2",{id:"por-qu\xe9-es-importante-el-protocolo-tls"},"\xbfPor qu\xe9 es importante el protocolo TLS?"),(0,i.kt)("p",null,"El cifrado TLS ayuda a proteger las aplicaciones web de violaciones de datos y otros ataques. TLS est\xe1 implementado para ayudar a proteger la privacidad y la seguridad del usuario. Sin TLS, la informaci\xf3n confidencial transferida a trav\xe9s de internet, como las credenciales de inicio de sesi\xf3n, la informaci\xf3n personal y los n\xfameros de tarjetas de cr\xe9dito, son vulnerables al robo. Adem\xe1s, HTTPS protegido por TLS se est\xe1 convirtiendo r\xe1pidamente en una pr\xe1ctica est\xe1ndar para los sitios web."),(0,i.kt)("h2",{id:"c\xf3mo-funciona-tls"},"\xbfC\xf3mo funciona TLS?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SSL",src:a(9720).Z})),(0,i.kt)("p",null,"Una conexi\xf3n TLS se inicia mediante una secuencia conocida como ",(0,i.kt)("inlineCode",{parentName:"p"},"handshake"),". Cuando un usuario navega a un sitio web que usa TLS, el ",(0,i.kt)("inlineCode",{parentName:"p"},"handshake")," comienza entre el dispositivo del cliente y el servidor web."),(0,i.kt)("p",null,"Durante el ",(0,i.kt)("inlineCode",{parentName:"p"},"handshake"),", el dispositivo del usuario y el servidor web:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Especificar\xe1n qu\xe9 versi\xf3n de TLS (TLS 1.0, 1.2, 1.3, etc.) utilizar\xe1n para la comunicaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},"Decidir qu\xe9 conjuntos de cifrado utilizar\xe1n."),(0,i.kt)("li",{parentName:"ul"},"Autenticar la identidad del servidor web mediante un certificado TLS."),(0,i.kt)("li",{parentName:"ul"},"Generar claves de sesi\xf3n para encriptar los mensajes entre los dispositivos despu\xe9s de completarse el ",(0,i.kt)("inlineCode",{parentName:"li"},"handshake"),".")),(0,i.kt)("p",null,"El ",(0,i.kt)("inlineCode",{parentName:"p"},"handshake")," establece un conjunto de cifrado para cada sesi\xf3n de comunicaci\xf3n. Se trata de un conjunto de algoritmos que especifica detalles acerca de qu\xe9 claves de cifrado compartidas o claves de sesi\xf3n se utilizar\xe1n para esa sesi\xf3n en particular."),(0,i.kt)("p",null,"El ",(0,i.kt)("inlineCode",{parentName:"p"},"handshake")," tambi\xe9n maneja la autenticaci\xf3n, que generalmente consiste en que el servidor demuestre su identidad al cliente. Esto se hace usando claves p\xfablicas. Las ",(0,i.kt)("strong",{parentName:"p"},"claves p\xfablicas")," son claves que utilizan un cifrado unidireccional, lo que significa que cualquier persona con la clave p\xfablica puede descifrar los datos cifrados con la clave privada del servidor para garantizar su autenticidad, pero solo el dispositivo original puede cifrar los datos con la clave privada. La clave p\xfablica del servidor es parte de su certificado TLS."),(0,i.kt)("p",null,"Una vez que los datos est\xe1n encriptados y autenticados, se firman con un c\xf3digo de autenticaci\xf3n de mensajes (MAC). A continuaci\xf3n, el destinatario verifica el MAC para garantizar la integridad de los datos."),(0,i.kt)("h2",{id:"referencias"},"Referencias"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.digicert.com/es/what-is-ssl-tls-https/"},"Madden, M. (2020, 13 marzo). \xbfQU\xc9 SON SSL, TLS Y HTTPS. . .? DigiCert.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/"},"What is TLS (Transport Layer Security)? (2019). Cloudflare.")))}p.isMDXComponent=!0},4353:function(e,t,a){t.Z=a.p+"assets/images/ssl-8aa80b47477705eb1aa31a734b9e60b5.png"},9720:function(e,t,a){t.Z=a.p+"assets/images/tls_handshake-aaa8a40b80fbf7993146d2d8d878bbe0.png"}}]);