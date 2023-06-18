module.exports = function () {
  var data = {
    Usuarios: [
      {
        id: 0,
        email: "AnaGonz@gmail.com",
        contrasenia: "*********",
        telefono: "928457131"
      }
    ],
    Destinos: [
      {
        id: 1,
        nombreDestino: "Destino 1",
        historia: "historia... 1"
      },
      {
        id: 2,
        nombreDestino: "Destino 2",
        historia: "historia... 2"
      },
      {
        id: 3,
        nombreDestino: "Destino 3",
        historia: "historia... 3"
      }
    ],

    Negocio: [
      {
        id: 1,
        nameNegocio: "50 sombras de Gray",
        direccionNegocio: "Novela erótica de la autora británica E. L. James del año 2011",
        telefono: "Prestado",
        emailNegocio: "10/05/2011",
        tipoNegocio: "Romantico",
        IDusuario: "Las Letras de Jesus",
      },
      {
        id: 2,
        nameNegocio: "Luna de Pluton",
        direccionNegocio: "Publicado por DrossRotzank, un youtuber venezolano que actualmente radica en Argentina.",
        telefono: "Disponible",
        emailNegocio: "04/06/2014",
        tipoNegocio: "Ficcion",
        IDusuario: "Manzanitas",
      },
      {
        id: 3,
        nameNegocio: "El Marques de Sade",
        direccionNegocio: "Cuando la policía le preguntó por el autor de las torturas la mujer inculpó al marqués de Sade.",
        telefono: "Disponible",
        emailNegocio: "20/12/1729",
        tipoNegocio: "Romantico",
        IDusuario: "Provervios",
      },
      {
        id: 4,
        nameNegocio: "El Libro Troll",
        direccionNegocio: "Tu vida es un libro a medio construir, un juego a veces provocador, pero siempre extraordinario",
        telefono: "Prestado",
        emailNegocio: "21/10/2016",
        tipoNegocio: "Comic",
        IDusuario: "Cosmos",
      },
      {
        id: 5,
        nameNegocio: "Biblia Satanica",
        direccionNegocio: "Es una colección de ensayos, observaciones y rituales publicada por Anton LaVey en 1969.",
        telefono: "Disponible",
        emailNegocio: "10/10/1969",
        tipoNegocio: "Cultura",
        IDusuario: "Papa Franciso",
      },
    ],

    clientes: [
      {
        id: 1,
        nameCliente: "Doña",
        apellidoCliente: "Clotilde",
        anioNacimiento: "Ingenieria",
        emailCliente: "Ing. Sistemas",
        telefono: "71234567",
        direccion: "987654321",
        IDUsuario:"Vecindad del Chavo N°71",
        cuentaBancaria: "100200300",
      },
      {
        id: 2,
        nameCliente: "Don",
        apellidoCliente: "Barriga",
        anioNacimiento: "Medicina",
        emailCliente: "Psicologia",
        telefono: "71234390",
        direccion: "999888777",
        IDUsuario:"Vecindad del Chavo N°43",
        cuentaBancaria: "111111111",
      },
      {
        id: 3,
        nameCliente: "Ramon",
        apellidoCliente: "Valdez",
        anioNacimiento: "Ingenieria",
        emailCliente: "Ing. Industrial",
        telefono: "923487221",
        direccion: "921214567",
        IDUsuario:"Vecindad del Chavo N°31",
        cuentaBancaria: "123123123",
      },
      {
        id: 4,
        nameCliente: "Florinda",
        apellidoCliente: "Mesa",
        anioNacimiento: "Letras",
        emailCliente: "Periodismo",
        telefono: "900765234",
        direccion: "978564231",
        IDUsuario:"Vecindad del Chavo N°21",
        cuentaBancaria: "333222111",
      },
      {
        id: 5,
        nameCliente: "Jaimito",
        apellidoCliente: "El Cartero",
        anioNacimiento: "Derecho",
        emailCliente: "Derecho",
        telefono: "976566123",
        direccion: "999333555",
        IDUsuario:"Vecindad del Chavo N°25",
        cuentaBancaria: "321321321",
      }
    ],
    Compras: [
      {
        id:1,
        cantidad: "01/04/2023",
        precio_total: "15/04/2023",
        descripcion:"Pendiente",
        fecha:"1",
        Cliente_ID:"2",
        Negocio_ID:"1",
      },
      {
        id:2,
        cantidad: "30/04/2023",
        precio_total: "14/05/2023",
        descripcion:"Pendiente",
        fecha:"2",
        Cliente_ID:"1",
        Negocio_ID:"2",
      },
      {
        id:3,
        cantidad: "01/05/2023",
        precio_total: "16/05/2023",
        descripcion:"Pendiente",
        fecha:"3",
        Cliente_ID:"3",
        Negocio_ID:"3",
      },
      {
        id:4,
        cantidad: "05/05/2023",
        precio_total: "19/05/2023",
        descripcion:"Pendiente",
        fecha:"4",
        Cliente_ID:"4",
        Negocio_ID:"4",
      },
      {
        id:5,
        cantidad: "04/05/2023",
        precio_total: "18/04/2023",
        descripcion:"Pendiente",
        fecha:"5",
        Cliente_ID:"5",
        Negocio_ID:"5",
      },

    ],

  }
  return data
}
