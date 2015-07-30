//Usuarios
use MomentosUnicosdb
var datos={"UserId":1,"Nombre":"Nicolle","Apellido":"Gonzalez","Correo":"gnicolle93@gmail.com","Usuario":"gnicolle","Clave":"gonzalez",
"Carrito":[{"ProdId":1,"Mesas":"Mesas Redondas Plásticas
Desarmables","Precio":200,"Cantidad":20,"Img":"mesaredonda.jpg"},{"ProdId":4,"Pasteles De Fondat":"Pastel De
Vainilla 3 Pisos","Precio":2000,"Cantidad":1,"Img":"pastelvainilla.jpg"}]}
db.usuario.insert(datos)
var datos={"UserId":2,"Nombre":"Marcony","Apellido":"Meza","Correo":"marconymeza@gmail.com","Usuario":"mmeza","Clave":"marcony"
,"Carrito":[{"ProdId":1,"Mesas":"Mesas Rectángulares","Precio":200,"Cantidad":10,"Img":"mesacuadrada.jpg"},{"ProdId":3,"Manteles":"Manteles Rectángulares","Precio":80,"Cantidad":10,"Img":"mantelcuadrado.jpg"}
             ,{"Prod":4,"Pasteles De Fondat":"Pastel De Chocolate 3 Pisos","Precio":2500,"Cantidad":1,"Img":"pastelchocolate.jpg"},{"ProdId":5,"Tarjetas De Invitación":"Tarjeta Para Quince Años","Precio":75,"Cantidad":50,"Img":"tarjeta15.jpg"}]}
db.usuario.insert(datos)
var datos={"UserId":3,"Nombre":"Wilmer","Apellido":"Lainez","Correo":"sirmimex@gmail.com","Usuario":"sirmimex","Clave":"hola"
,"Carrito":[{"ProdId":10,"Servicio De Meseros":"Servicio De 2 Meseros","Precio":1000,"Cantidad":2,"Img":"meseros.jpg"}]}
db.usuario.insert(datos)
var datos={"UserId":4,"Nombre":"Brigith","Apellido":"Zaldivar","Correo":"brillito09@gmail.com","Usuario":"brillito","Clave":"brillito09"
,"Carrito":[{"ProdId":8,"Decoraciones":"Decoración De Salones","Precio":3000,"Cantidad":1,"Img":"decoracionsalon.jpg"},{"ProdId":12,"Fotografía Profesional":"Sesión Fotográfica Junto Con Video Profesional","Precio":5000,"Cantidad":1,"Img":"sesion2.jpg"}]}
db.usuario.insert(datos)

//Productos
var prod={"ProdId":1,"Mesas":[{"Descrip":"Mesas Redondas","Precio":200,"Img":"mesaredonda.jpg"},{"Descrip":"Mesas Rectángulares","Precio":200,"Img":"mesacuadrada.jpg"}]
            }
db.producto.insert(prod)
var prod={"ProdId":2,"Sillas":[{"Descrip":"Sillas De Metal","Precio":100,"Img":"sillasmetal.jpg"},{"Descrip":"Sillas Plásticas","precio":100,"Img":"sillaplastica.jpg"}]
          }
db.producto.insert(prod)
var prod={"ProdId":3,"Manteles":[{"Descrip":"Manteles Redondos","Precio":50,"Img":"mantelredondo.jpg"},{"Descrip":"Manteles Rectángulares","Precio":80,"Img":"mantelcuadrado.jpg"}]
          }
db.producto.insert(prod)
var prod= {"ProdId":4,"Pasteles De Fondat":[{"Descrip":"Pastel De Vainilla 3 Pisos","Precio":2000,"Img":"pastelvainilla.jpg"},{"Descrip":"Pastel de Chocolate 3 Pisos","Precio":2500,"Img":"pastelchocolate.jpg"}]
        }
db.producto.insert(prod)
var prod=  {"ProdId":5,"Tarjetas De Invitación":[{"Descrip":"Tarjetas Para Boda","Precio":100,"Img":"tarjetaboda.jpg"},{"Descrip":"Tarjeta Para Quince Años","Precio":75,"Img":"tarjeta15.jpg"},
        {"Descrip":"Tarjeta Para Bautizo","Precio":50,"Img":"tarjetabautizo.jpg"}]}
db.producto.insert(prod)
var prod={"ProdId":6,"Ramos De Novia":[{"Descrip":"Ramo En Cascada","Precio":1000,"Img":"ramocascada.jpg"},{"Descrip":"Ramo En Domo","Precio":1400,"Img":"ramodomo.jpg"},{"Descrip":"Ramo Redondo","Precio":1200,"Img":"ramoredondo.jpg"}
               ,{"Descrip":"Ramo De Presentacion","Precio":1600,"Img":"ramopresentacion"}]}
db.producto.insert(prod)
var prod={"ProdId":7,"Accesorios Para Boda":[{"Descrip":"Copas","Precio":25,"Img":"copas.jpg"},{"Descrip":"Cofre","Precio":1000,"Img":"cofre.jpg"},{"Descrip":"Libro De Firmas","Precio":1000,"Img":"librofirmas.jpg"}
              ,{"Descrip":"Cojín Para Anillos","Precio":1000,"Img":"cojinanillos.jpg"}]}
db.producto.insert(prod)
var prod={"ProdId":8,"Decoraciones":[{"Descrip":"Decoración De Iglesias","Precio":2500,"Img":"decoracioniglesia"},{"Descrip":"Decoración De Salones","Precio":3000,"Img":"decoracionsalon.jpg"}
               ,{"Descrip":"Decorción Fiesta Infantil","Precio":2000,"Img":"fiestainfantil.jpg"}]}
db.producto.insert(prod)
var prod={"ProdId":9,"Sonido Proesional":[{"Descrip":"Parlantes Y Luces","Precio":1000,"Img":"parlante.jpg"},{"Descrip":"Parlantes, Luces Y Humo","Precio":1200,"Img":"parlantes2.jpg"},{"Descrip":"Combo Completo De Sonido","Precio":1600,"Img":"parlante3.jpg"}]}
db.producto.insert(prod)
var prod={"ProdId":10,"Servicio De Meseros":[{"Descrip":"Servicio De 2 Meseros","Precio":1000,"Img":"meseros.jpg"},{"Descrip":"Servicio De 4 Meseros","Precio":2000,"Img":"meseros2.jpg"}]}
db.producto.insert(prod)
var prod={"ProdId":11,"Centro De Mesa":[{"Descrip":"Centro De Mesa Altos","Precio":1000,"Img":"centroalto.jpg"},{"Descrip":"Centro De Mesa Bajo","Precio":2000,"Img":"centrosbajos.jpg"}]}
db.producto.insert(prod)
var prod={"ProdId":12,"Fotografía Profesional":[{"Descrip":"Sesión Fotográfica Profesional","Precio":2000,"Img":"sesion.jpg"},{"Descrip":"Sesión Fotográfica Junto Con Video Profesional","Precio":5000,"Img":"sesion2.jpg"}]}
db.producto.insert(prod)
