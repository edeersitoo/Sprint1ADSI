var bd,producto,usuario,categoria;
function iniciar() {
    var boton = document.getElementById("subir");
    boton.addEventListener("click", subirProducto);

    var solicitud = indexedDB.open("basededatos");
    solicitud.addEventListener("error", mostrarerror);
    solicitud.addEventListener("success", comenzar);
    solicitud.addEventListener("upgradeneeded", crearBD);
}
function mostrarerror(evento) {
    alert("Error: " + evento.code + " " + evento.message);
}

function comenzar(evento) {
    alert("Comenzar");
    bd = evento.target.result;
    agregarObjetos();
}
function crearBD(evento) {
    alert("crear");

    basededatos = evento.target.result;
    producto = basededatos.createObjectStore("productos", {keyPath: "idProducto",autoIncrement: true});
    producto.createIndex("BuscarNombre", "nombre", {unique: true});
    producto.createIndex("BuscarCategoria", "idCategoria", {unique: false});
    usuario = basededatos.createObjectStore("usuarios", {keyPath: "email"});
    usuario.createIndex("BuscarEmail", "email", {unique: true});
    categoria = basededatos.createObjectStore("categorias", {keyPath: "idCategoria"});
    categoria.createIndex("BuscarCategoria", "idCategoria", {unique: false});
    
}

function subirProducto() {
    var nombre = document.getElementById("nombre").value;
    var categoria = document.getElementById("categoria").value;
//    var imagen = document.getElementById("imagen").value;
    var precio = document.getElementById("precio").value;
    var fecha = document.getElementById("fecha").value;
    
    var transaccion = bd.transaction(["productos"], "readwrite");
    
    producto = transaccion.objectStore("productos");
    producto.onerror = function (event) {
        console.error('Error al crear el ObjectStore durante la actualización:', event.target.error);
    };
    var nuevoProducto = {
        nombre: nombre,
        categoria: categoria,
        fecha: fecha,
//        imagen: imagen,
        precio: precio
    };
    producto.add(nuevoProducto);
    document.getElementById("nombre").value = "";
    document.getElementById("idcategoria").value = "";
    document.getElementById("imagen").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("fecha").value = "";

}
function agregarObjetos() {
    alert("agregar");
    var transaccion = bd.transaction(["productos"], "readwrite");
    producto = transaccion.objectStore("productos");
    var Producto1 = {
        nombre: "Zapatillas",
        idCategoria: 1,
        fecha: "2023-11-21",
        imagen: "img/logo1.png",
        precio: 50,
        latitud: 40.7128, // Example latitude
        longitud: -74.0060, // Example longitude
        emailVendedor: "vendedor@example.com",
        emailComprador: ""// Initial empty value for buyer's email;
    };
    producto.add(Producto1);
    var Producto2 = {
        nombre: "Camiseta",
        idCategoria: 4,
        fecha: "2023-11-21",
        imagen: "img/logo1.png",
        precio: 50,
        latitud: 40.7128, // Example latitude
        longitud: -74.0060, // Example longitude
        emailVendedor: "vendedor@example.com",
        emailComprador: "" // Initial empty value for buyer's email;
    };
    producto.add(Producto2);
//    var Producto3 = {
//        nombre: "Camiseta",
//        categoria: 6,
//        fecha: "2023-11-21",
//        imagen: "data:image/png;base64,",
//        precio: 50.00,
//        latitud: 40.7128, // Example latitude
//        longitud: -74.0060, // Example longitude
//        emailVendedor: "vendedor@example.com",
//        emailComprador: "" // Initial empty value for buyer's email;
//    };
//    var Producto4 = {
//        nombre: "Camiseta",
//        categoria: 7,
//        fecha: "2023-11-21",
//        imagen: "data:image/png;base64,",
//        precio: 50.00,
//        latitud: 40.7128, // Example latitude
//        longitud: -74.0060, // Example longitude
//        emailVendedor: "vendedor@example.com",
//        emailComprador: "" // Initial empty value for buyer's email;
//    };
//    var Producto5 = {
//        nombre: "Camiseta",
//        categoria: 7,
//        fecha: "2023-11-21",
//        imagen: "data:image/png;base64,",
//        precio: 50.00,
//        latitud: 40.7128, // Example latitude
//        longitud: -74.0060, // Example longitude
//        emailVendedor: "vendedor@example.com",
//        emailComprador: "" // Initial empty value for buyer's email;
//    };

//    producto.add(Producto1);
//    productos.add(Producto2);
//    productos.add(Producto3);
//    productos.add(Producto4);
//    productos.add(Producto5);
    var transaccion = bd.transaction(["usuarios"], "readwrite");
    usuario = transaccion.objectStore("usuarios");
    var Usuario1 = {
        email: "eder@gmail.com",
        password: "eder",
        nombre: "eder",
        foto: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
        movil: "678945678"
    };
    usuario.add(Usuario1);
    var Usuario2 = {
        email: "olatz@gmail.com",
        password: "olatz",
        nombre: "olatz",
        foto: "https://cdn2.iconfinder.com/data/icons/user-23/512/User_Generic_1.png",
        movil: "687483984"
    };
    usuario.add(Usuario2);
    var Usuario3 = {
        email: "sergio@gmail.com",
        password: "sergio",
        nombre: "sergio",
        foto: "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
        movil: "6754856484"
    };
    usuario.add(Usuario3);
//    var Usuario4 = {
//        email: "ana@gmail.com",
//        password: "ana",
//        nombre: "ana",
//        foto: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
//        movil: "678902445"
//    };
//    usuarios.add(Usuario1);
//    usuarios.add(Usuario2);
//    usuarios.add(Usuario3);
//    usuarios.add(Usuario4);

    categoria1 = {
        idCategoria:1,
        nombre: "Móviles"
    };
//    categoria2 = {
//        nombre: "Ropa"
//    };
//    categoria3 = {
//        nombre: "Zapatos"
//    };
//    categoria4 = {
//        nombre: "Accesorios"
//    };
//    categoria5 = {
//        nombre: "Coches"
//    };
//    categoria6 = {
//        nombre: "Electronica"
//    };
    var transaccion = bd.transaction(["categorias"], "readwrite");
    categoria= transaccion.objectStore("categorias");
    categoria.add({idCategoria:1,
       nombre: "Móviles"});
//    categorias.add(categoria2);
//    categorias.add(categoria3);
//    categorias.add(categoria4);
//    categorias.add(categoria5);
//    categorias.add(categoria6);


}
//
//function mostrar() {
//    cajadatos.innerHTML = "";
//    var transaccion = bd.transaction(["peliculas"]);
//    var almacen = transaccion.objectStore("peliculas");
//    var indice = almacen.index("BuscarFecha");
//
//    var puntero = indice.openCursor(null, "prev");
//    puntero.addEventListener("success", mostrarLista);
//}
//
//function mostrarLista(evento) {
//    var puntero = evento.target.result;
//    if (puntero) {
//        cajadatos.innerHTML += "<div>" + puntero.value.id + " - " + puntero.value.nombre + " - ";
//        cajadatos.innerHTML += puntero.value.fecha + ' <input type="button" onclick="removerObjeto(\'' + puntero.value.id + '\')" value="Remover"></div>';
//        puntero.continue();
//    }
//}

window.addEventListener("load", iniciar);