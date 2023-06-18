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
        nameNegocio: "Fast Market",
        direccionNegocio: "Av Jose Galvez #1345",
        telefono: "5687943654",
        emailNegocio: "fastmark@gmail.com",
        tipoNegocio: "Productos primera necesidad",
        IDusuario: "0",
      },
      {
        id: 2,
        nameNegocio: "Tiendas Mass",
        direccionNegocio: "Av Nicolas Ayllon #1534",
        telefono: "3467890126",
        emailNegocio: "tiendmass@gmail.com",
        tipoNegocio: "Comidas Pre_peradas",
        IDusuario: "0",
      },
      {
        id: 3,
        nameNegocio: "La Union",
        direccionNegocio: "Av Ricardo Palma #4365",
        telefono: "5753698425",
        emailNegocio: "launion@gmail.com",
        tipoNegocio: "Venta de Productos Integrales",
        IDusuario: "0",
      },
      {
        id: 4,
        nameNegocio: "Papas King",
        direccionNegocio: "Av Primavera #1143",
        telefono: "4673598124",
        emailNegocio: "papaskin@gmail.com",
        tipoNegocio: "Venta de comida rapida",
        IDusuario: "0",
      },
      {
        id: 5,
        nameNegocio: "Toro Mata",
        direccionNegocio: "Av Tomas Valle #4314",
        telefono: "4675832198",
        emailNegocio: "toromata@gmail.com",
        tipoNegocio: "Venta de Productos",
        IDusuario: "0",
      },
    ],

    clientes: [
      {
        id: 1,
        nameCliente: "Ana",
        apellidoCliente: "Gonzalez",
        anioNacimiento: "1999-10-10",
        emailCliente: "AnaGonz@gmail.com",
        telefono: "912345678",
        direccion: "Urb Bello Horizonte Lt. Ll",
        IDUsuario:"0",
        cuentaBancaria: "100200300",
      },
      {
        id: 2,
        nameCliente: "Luis",
        apellidoCliente: "Garcia",
        anioNacimiento: "2004-11-04",
        emailCliente: "GarcLuis@gmail.com",
        telefono: "921643786",
        direccion: "Calle La Marina N. 145",
        IDUsuario:"0",
        cuentaBancaria: "111222333",
      },
      {
        id: 3,
        nameCliente: "Sofia",
        apellidoCliente: "Fernandez",
        anioNacimiento: "2000-04-14",
        emailCliente: "Fernandez0414@gmail.com",
        telefono: "923487221",
        direccion: "Avn Las Brizas N. 221 ",
        IDUsuario:"0",
        cuentaBancaria: "123123123",
      },
      {
        id: 4,
        nameCliente: "Juan",
        apellidoCliente: "Rodriguez",
        anioNacimiento: "2001-01-10",
        emailCliente: "JuanR01@gmail.com",
        telefono: "900765234",
        direccion: "Urb Crepitar Lt. 43",
        IDUsuario:"0",
        cuentaBancaria: "333222111",
      },
      {
        id: 5,
        nameCliente: "Javier",
        apellidoCliente: "Torres",
        anioNacimiento: "2000-06-23",
        emailCliente: "TorrezJ@gmail.com",
        telefono: "976566123",
        direccion: "Avn Nahida N. 110",
        IDUsuario:"0",
        cuentaBancaria: "321321321",
      }
    ],
    Compras: [
      {
        id:1,
        cantidad: "1",
        precio_total: "$2.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-06-24",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },
      {
        id:2,
        cantidad: "3",
        precio_total: "$6.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-09-10",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },
      {
        id:3,
        cantidad: "7",
        precio_total: "$14.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-08-23",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },
      {
        id:4,
        cantidad: "9",
        precio_total: "$18.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-10-27",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },
      {
        id:5,
        cantidad: "12",
        precio_total: "$24.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-06-12",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },

    ],

  }
  return data
}
