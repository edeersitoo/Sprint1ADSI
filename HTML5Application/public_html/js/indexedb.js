var db;

// Abrir o crear la base de datos
var request = indexedDB.open("miBaseDeDatos", 1);

// Manejar eventos de actualización de la base de datos
request.onupgradeneeded = function(event) {
    var db = event.target.result;
    // Crear objeto de almacenamiento para usuarios
    if (!db.objectStoreNames.contains("usuarios")) {
        var usuariosStore = db.createObjectStore("usuarios", { keyPath: "id", autoIncrement: true });
        usuariosStore.createIndex("nombre", "nombre", { unique: false });
        usuariosStore.createIndex("email", "email", {unique: false});
        usuariosStore.createIndex("contraseña", "contraseña", {unique: false});
        usuariosStore.createIndex("foto", "foto", {unique: false});
        usuariosStore.createIndex("movil", "movil", {unique: false});
        // Agregar más índices y configuraciones según tus necesidades
    }

    // crear clase categoría
    if (!db.objectStoreNames.contains("categorias")) {
        var categoriasStore = db.createObjectStore("categorias", { keyPath: "id", autoIncrement: true });
        categoriasStore.createIndex("idCat", "idCat", { unique: true });
        categoriasStore.createIndex("nombreCat", "nombreCat", {unique: true});
    }

    // Crear objeto de almacenamiento para productos
    if (!db.objectStoreNames.contains("productos")) {
        var productosStore = db.createObjectStore("productos", { keyPath: "id", autoIncrement: true });
        productosStore.createIndex("idProd", "idProd", { unique: false });
        productosStore.createIndex("nombreProd", "nombreProd", {unique: false});
        productosStore.createIndex("idCat", "idCat", {unique: false});
        productosStore.createIndex("precio", "precio", {unique: false});
        productosStore.createIndex("foto", "foto", {unique: false});
        productosStore.createIndex("emailPropietario", "emailPropietario", {unique: false});
        productosStore.createIndex("emailComprador", "emailComprador", {unique: false});
        productosStore.createIndex("latitud", "latitud", {unique: false});
        productosStore.createIndex("longitud", "longitud", {unique: false});
        productosStore.createIndex("fechaHoraVenta", "fechaHoraVenta", {unique: false});
    }
};

// Manejar eventos de éxito
request.onsuccess = function(event) {
    db = event.target.result;
};

// Manejar eventos de error
request.onerror = function(event) {
    console.error("Error al abrir la base de datos:", event.target.errorCode);
};
